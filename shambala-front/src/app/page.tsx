'use client'


import Button from "@components/atoms/Button";
import { auth } from "@infrastructure/lib/firebase-config";
import { signOut as firebaseSignOut } from "firebase/auth";
import React, { useEffect } from "react";
import { appLogout } from "./serverActions/auth";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  const signOut = async () => {

    console.log
    await firebaseSignOut(auth);
    const response = await appLogout();
    if (response.status === 200) {
      router.push("/login");
    }
  };

  return (
    <div>
      <h1>Hello</h1>
      <Button onClick={() => void signOut()}>Log out</Button>
    </div>
  );
};

export default Home;
