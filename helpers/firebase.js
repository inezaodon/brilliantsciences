import { initializeApp, getApps, getApp } from "firebase/app"

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "brilliant-sciences.firebaseapp.com",
  projectId: "brilliant-sciences",
  storageBucket: "brilliant-sciences.appspot.com",
  messagingSenderId: "811825813849",
  appId: "1:811825813849:web:f2ac7de4c861ee7cd15448",
  measurementId: "G-L87TNW9W4B"
}

export const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
