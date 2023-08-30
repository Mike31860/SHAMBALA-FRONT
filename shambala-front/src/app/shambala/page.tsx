"use client";

import Button from "@components/atoms/Button";
import { auth } from "@infrastructure/lib/firebase-config";
import { signOut as firebaseSignOut } from "firebase/auth";
import React from "react";
import { useRouter } from "next/navigation";
import { appLogout } from "@pages/serverActions/auth";

const Home = () => {
  const router = useRouter();

  const signOut = async () => {
    console.log;
    await firebaseSignOut(auth);
    const response = await appLogout();
    if (response.status === 200) {
      router.push("/login");
    }
  };

  return (
    <>
      <div className="bg-red-300 w-20 h-20"></div>
      <h1>Hello</h1>
      <Button onClick={() => void signOut()}>Log out</Button>
    </>
  );
};

export default Home;
