"use client";

import React from "react";
import FirebaseAuth from "@components/atoms/FirebaseAuth";
import { uiConfig } from "@infrastructure/lib/firebase-ui-config";
import { auth, providers } from "@infrastructure/lib/firebase-config";

const authConfig = uiConfig(providers.map((provider) => provider.providerId));

const LoginView = () => {
  return (
    <div
      style={{
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        minWidth: "100%",
        minHeight: "100%",
        background: "red",
      }}
    >
      <FirebaseAuth uiConfig={authConfig} firebaseAuth={auth} />
    </div>
  );
};

export default LoginView;
