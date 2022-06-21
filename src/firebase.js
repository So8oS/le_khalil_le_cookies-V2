import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDnWJVShW6txXhVsqiufuCLxP7bRbNmp3k",
  authDomain: "le-khalil-le-cookies.firebaseapp.com",
  projectId: "le-khalil-le-cookies",
  storageBucket: "le-khalil-le-cookies.appspot.com",
  messagingSenderId: "1092288488672",
  appId: "1:1092288488672:web:f5bcaaa7816ad2804fdc85",
};

const firebaseApp = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log("🚀 ~ file: firebase.js ~ line 27 ~ createUserDocumentFromAuth ~ userDocRef", userDocRef);
  const userSnapshot = getDoc(userDocRef);
  console.log("🚀 ~ file: firebase.js ~ line 29 ~ createUserDocumentFromAuth ~ userSnapshot", userSnapshot);

  if (!userSnapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("🚀 ~ file: firebase.js ~ line 41 ~ createUserDocumentFromAuth ~ error", error);
    }
  }
  return userDocRef;
};
