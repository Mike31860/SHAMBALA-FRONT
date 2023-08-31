import {  initializeApp } from "firebase/app";
import { getApps, getApp } from "firebase/app";
import {
  AuthProvider,
  EmailAuthProvider,
  getAuth,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD8wGfWsJwlk2O8bt-Eyaf9YZRUamHFlqk",
  authDomain: "shambaladb-12673.firebaseapp.com",
  projectId: "shambaladb-12673",
  storageBucket: "shambaladb-12673.appspot.com",
  messagingSenderId: "673154517280",
  appId: "1:673154517280:web:d5a3c220de0d948a026f45"
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const providers: AuthProvider[] = [];

providers.push(new GoogleAuthProvider());
providers.push(new EmailAuthProvider());

export { app, auth, providers };
