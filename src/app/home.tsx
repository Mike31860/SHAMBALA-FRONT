"use client";

import React from "react";
import FirebaseAuth from "@components/atoms/FirebaseAuth";
import { uiConfig } from "@infrastructure/lib/firebase-ui-config";
import { auth, providers } from "@infrastructure/lib/firebase-config";
import dynamic from "next/dynamic";

const authConfig = uiConfig(providers.map((provider) => provider.providerId));

const MyComponent = dynamic(() => import("@components/atoms/FirebaseAuth"), {
  ssr: false,
});

const LoginView = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center">
      <MyComponent
        className="mt-10"
        uiConfig={authConfig}
        firebaseAuth={auth}
      />
    </div>
  );
};

export default LoginView;
