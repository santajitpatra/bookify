import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";

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

export const FirebaseProvider = (props) => {
  return <FirebaseContext.Provider>{props.children}</FirebaseContext.Provider>;
};
