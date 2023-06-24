import { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged
} from "firebase/auth";

const FirebaseContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyCq7yfEST8GFdoJWeNlnxONUPzOuV6xDpI",
  authDomain: "bookify-46b90.firebaseapp.com",
  projectId: "bookify-46b90",
  storageBucket: "bookify-46b90.appspot.com",
  messagingSenderId: "72911311798",
  appId: "1:72911311798:web:692e8caf64f4b6292de717",
};

export const useFirebase = () => useContext(FirebaseContext);

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

const googleProvider = new GoogleAuthProvider();

export const FirebaseProvider = (props) => {
  const [user, setUser] = useState(null);
  
useEffect(() => {
  onAuthStateChanged(firebaseAuth, (user) => {
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  })
}, []);

  const signupUserWithEmailAndPassword = (email, password) => {
    createUserWithEmailAndPassword(firebaseAuth, email, password);
  };

  const signinUserWithEmailAndPassword = (email, password) => {
    signInWithEmailAndPassword(firebaseAuth, email, password);
  };

  const signinUserWithGoogle = () => {
    signInWithPopup(firebaseAuth, googleProvider);
  };
  const isLoggedIn = user ? true : false;

  return (
    <FirebaseContext.Provider
      value={{
        signupUserWithEmailAndPassword,
        signinUserWithEmailAndPassword,
        signinUserWithGoogle,
        isLoggedIn,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
