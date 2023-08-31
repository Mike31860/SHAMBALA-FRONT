"use client";

import { getSession } from "@pages/serverActions/auth";
import { usePathname, useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(undefined);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [session, setSession] = useState<string | undefined>();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSession().then(setSession);
  }, []);

  useEffect(() => {
    setLoading(false);
  }, [session]);

  useEffect(() => {
    console.log("SESSION AUTH ", session);
    if (!router) {
      return;
    }
    if (!session) {
      console.log("REFRESH ");
      router.refresh();
      return;
    }

    const isAccessingLoging = pathname == "/";
    if (isAccessingLoging) {
      console.log("REFRESH 2");

      router.refresh();
    }
  }, [session, router, pathname]);

  if (loading) {
  }

  return (
    <AuthContext.Provider value={{ session, setSession }}>
      {children}
    </AuthContext.Provider>
  );
};
