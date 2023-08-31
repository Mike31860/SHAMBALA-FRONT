import { useEffect, useRef, useState, useContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
import "firebaseui/dist/firebaseui.css";
import { auth } from "firebaseui";
import { appLogin } from "@pages/serverActions/auth";
import { AuthContext } from "@pages/contexts/AuthProvider";

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
  const { session, setSession } = useContext(AuthContext);
  const [firebaseui, setFirebaseui] = useState<
    typeof import("firebaseui") | null
  >(null);

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
    const unregisterAuthObserver = onAuthStateChanged(
      firebaseAuth,
      (newUser) => {
        if (!newUser) {
          firebaseUiWidget.reset();
          return;
        }

        newUser.getIdToken().then((token) => {
          appLogin(token).then(() => setSession(token));
        });
      }
    );

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

  if (typeof window === "undefined") {
    return <div>...</div>;
  }

  return <div className={className} ref={elementRef} />;
};

export default FirebaseAuth;
