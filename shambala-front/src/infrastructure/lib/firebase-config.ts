import { initializeApp } from "firebase/app";
import { getApps, getApp } from "firebase/app";
import {
  AuthProvider,
  EmailAuthProvider,
  FacebookAuthProvider,
  getAuth,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_NESSAGING_SENDER,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const providers: AuthProvider[] = [];

providers.push(new GoogleAuthProvider());
providers.push(new FacebookAuthProvider());
providers.push(new EmailAuthProvider());

export { app, auth, providers };
