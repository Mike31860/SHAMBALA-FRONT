"use client";

import React from "react";
import FirebaseAuth from "@components/atoms/FirebaseAuth";
import { uiConfig } from "@infrastructure/lib/firebase-ui-config";
import { auth, providers } from "@infrastructure/lib/firebase-config";

const authConfig = uiConfig(providers.map((provider) => provider.providerId));

const LoginView = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center">
      <FirebaseAuth uiConfig={authConfig} firebaseAuth={auth} />
    </div>
  );
};

export default LoginView;
