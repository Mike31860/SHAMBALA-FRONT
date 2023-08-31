"use client";
import React from "react";
import { MenuItem } from "../DropdownMenu";
import Component from "./component";
import { auth } from "@infrastructure/lib/firebase-config";
import { usePathname } from "next/navigation";
import { signOut as firebaseSignOut } from "firebase/auth";
import { appLogout } from "@pages/serverActions/auth";

const Navbar = () => {
  const pathname = usePathname();

  const signOut = async () => {
    console.log("sign out");
    await firebaseSignOut(auth);
    const response = await appLogout();
  };

  const leftmenu: MenuItem[] = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
  ];

  let rightmenu: MenuItem[] = [
    {
      label: "Start now!",
      href: "/login",
      badge: "Login / Sign up",
    },
  ];

  const isLoggedIn = pathname.includes("/shambala");

  if (isLoggedIn) {
    rightmenu = [
      {
        label: "User",
        children: [
          {
            title: "Log out",
            onClick: signOut,
          },
        ],
      },
    ];
  }

  const mobilemenu = [...leftmenu, ...rightmenu];

  return (
    <Component
      leftmenu={leftmenu}
      rightmenu={rightmenu}
      mobilemenu={mobilemenu}
    />
  );
};

export default Navbar;
