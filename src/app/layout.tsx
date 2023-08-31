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
import { AuthProvider } from "./contexts/AuthProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-fit p-2 dark:bg-black">
        <AuthProvider>
        <ThemeProvider initialTheme="light">
          <Navbar />
          <div className="p-4">{children}</div>
        </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
