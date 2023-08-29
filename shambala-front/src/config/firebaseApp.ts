import { initializeApp, getApps } from 'firebase/app';
import { firebaseConfig } from './firebaseApp.config'

let firebaseApp;

if (!getApps().length) {
    firebaseApp=initializeApp(firebaseConfig)
}


export default firebaseApp;
