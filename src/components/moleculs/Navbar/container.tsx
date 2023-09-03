"use client";
import React, { useContext, useMemo, useCallback } from "react";
import { MenuItem } from "../DropdownMenu";
import Component from "./component";
import { auth } from "@infrastructure/lib/firebase-config";
import { usePathname } from "next/navigation";
import { signOut as firebaseSignOut } from "firebase/auth";
import { appLogout, getSession } from "@pages/serverActions/auth";
import { AuthContext } from "@pages/contexts/AuthProvider";

const Navbar = () => {
  const pathname = usePathname();

  const { session, setSession } = useContext(AuthContext);

  const signOut = useCallback(async () => {
    console.log("sign out");
    await firebaseSignOut(auth);
    await appLogout();
    getSession().then((session) => setSession(session));
  }, [setSession]);

  const leftmenu: MenuItem[] = useMemo(() => {
    const menu: MenuItem[] = [
      {
        label: "Home",
        href: session ? "/shambala" : "/",
      },
    ];

    if (session) {
      menu.push({
        label: "Create",
        href: "/shambala/create",
      });
    }

    return menu;
  }, [session]);

  const rightmenu = useMemo(() => {
    let menu: MenuItem[] = [
      {
        label: "Start now!",
        href: "/",
        badge: "Login / Sign up",
      },
    ];

    if (session) {
      menu = [
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
    return menu;
  }, [session, signOut]);

  const mobilemenu = useMemo(
    () => [...leftmenu, ...rightmenu],
    [leftmenu, rightmenu]
  );

  return (
    <Component
      leftmenu={leftmenu}
      rightmenu={rightmenu}
      mobilemenu={mobilemenu}
    />
  );
};

export default Navbar;
