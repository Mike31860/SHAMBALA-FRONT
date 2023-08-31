import { useEffect, useRef, useState } from "react";
import { onAuthStateChanged, updateCurrentUser } from "firebase/auth";
import "firebaseui/dist/firebaseui.css";
import { auth } from "firebaseui";
import { appLogin } from "@pages/serverActions/auth";
import { useRouter } from "next/navigation";

interface Props {
  uiConfig: auth.Config;
  uiCallback?(ui: auth.AuthUI): void;
  firebaseAuth: any;
  className?: string;
}

const FirebaseAuth = ({
  uiConfig,
  firebaseAuth,
  className,
  uiCallback,
}: Props) => {
  const router = useRouter();
  const [firebaseui, setFirebaseui] = useState<
    typeof import("firebaseui") | null
  >(null);

  const [userSignedIn, setUserSignedIn] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    setFirebaseui(require("firebaseui"));
  }, []);

  useEffect(() => {
    if (firebaseui === null) return;

    // Get or Create a firebaseUI instance.
    const firebaseUiWidget =
      firebaseui.auth.AuthUI.getInstance() ||
      new firebaseui.auth.AuthUI(firebaseAuth);
    if (uiConfig.signInFlow === "popup") firebaseUiWidget.reset();

    // We track the auth state to reset firebaseUi if the user signs out.
    const unregisterAuthObserver = onAuthStateChanged(firebaseAuth, (user) => {
      if (!user && !userSignedIn) {
        return;
      }

      if (!user && userSignedIn) {
        firebaseUiWidget.reset();
      }

      user.getIdToken().then((token) => {
        appLogin(token);
      });
    });

    // Trigger the callback if any was set.
    if (uiCallback) uiCallback(firebaseUiWidget);

    // Render the firebaseUi Widget.
    // @ts-ignore
    firebaseUiWidget.start(elementRef.current, uiConfig);

    return () => {
      unregisterAuthObserver();
      firebaseUiWidget.reset();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firebaseui, uiConfig]);

  return <div className={className} ref={elementRef} />;
};

export default FirebaseAuth;
