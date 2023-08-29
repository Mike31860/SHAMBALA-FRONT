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
  apiKey: "AIzaSyBig_NuEmR0nd1GYp-uksPR9Rwser9kICE",
  authDomain: "shambala-5802c.firebaseapp.com",
  projectId: "shambala-5802c",
  storageBucket: "shambala-5802c.appspot.com",
  messagingSenderId: "694742843898",
  appId: "1:694742843898:web:d3689be4164539f7152443",
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const providers: AuthProvider[] = [];

providers.push(new GoogleAuthProvider());
providers.push(new FacebookAuthProvider());
providers.push(new EmailAuthProvider());

export { auth, providers };
