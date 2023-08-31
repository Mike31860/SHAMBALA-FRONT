"use client"
import { auth } from "@infrastructure/lib/firebase-config";
import { appLogin } from "@pages/serverActions/auth";
import { User, onAuthStateChanged } from "firebase/auth";
import { usePathname, useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(undefined);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | undefined>();

  useEffect(() => {
    const unregisterAuthObserver = onAuthStateChanged(auth, (newUser) => {
      console.log("USER");
      setUser(newUser ?? user);

      if (!newUser) {
        return;
      }

      newUser.getIdToken().then((token) => {
        appLogin(token);
      });
    });

    return () => {
      unregisterAuthObserver();
    };
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
