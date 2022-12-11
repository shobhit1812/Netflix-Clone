// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyD5OyVs_V7C-qMxUOfGygznqAKCfIwblJk",
  authDomain: "react-netflix-clone-4769d.firebaseapp.com",
  projectId: "react-netflix-clone-4769d",
  storageBucket: "react-netflix-clone-4769d.appspot.com",
  messagingSenderId: "1058206643367",
  appId: "1:1058206643367:web:11716cee2112845d171782",
  measurementId: "G-7PS3XMBL4Q",
}

const app = initializeApp(firebaseConfig)

export const firebaseAuth = getAuth(app)
