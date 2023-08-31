"use client";

import Navbar from "@components/moleculs/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "@infrastructure/lib/firebase-config";
import { appLogin } from "@pages/serverActions/auth";
import { useRouter } from "next/navigation";
import { ThemeProvider } from "./contexts/ThemeProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [userSignedIn, setUserSignedIn] = useState(false);

  useEffect(() => {
    const unregisterAuthObserver = onAuthStateChanged(auth, (user) => {
      if (!user && !userSignedIn) {
        router.push("/");
        return;
      }

      setUserSignedIn(!!user);
      user.getIdToken().then((token) => {
        appLogin(token);
      });
    });

    router.push("/shambala");

    return () => {
      unregisterAuthObserver();
    };
  }, [router, userSignedIn]);

  return (
    <html lang="en">
      <body className="h-fit p-2 dark:bg-black">
        <ThemeProvider initialTheme="light">
          <Navbar />
          <div className="p-4">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
