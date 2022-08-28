import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";




const firebaseConfig = {
    apiKey: "AIzaSyAfuaWWNItdu2lMHv3iztyrG-pv2n8kL50",
    authDomain: "mydesktime-f6fd1.firebaseapp.com",
    projectId: "mydesktime-f6fd1",
    storageBucket: "mydesktime-f6fd1.appspot.com",
    messagingSenderId: "1073659343278",
    appId: "1:1073659343278:web:09cf01bc7c2a028b96d83f"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  
  } catch (err) {
    console.error(err);
    alert("Email already used use Another one")
  }
};


const logInWithEmailAndPassword = async (auth,email, password,toast) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    toast({
      title: 'Login Successful.',
      description: "You've successfully logged in",
      status: 'success',
      duration: 9000,
      isClosable: true,
      position: 'bottom'
    })
  } catch (err) {
    console.error(err);
 
  }
};


const registerWithEmailAndPassword = async (name, email, password, toast) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    })
    toast({
        title: 'Account created.',
        description: "We've created your account for you.",
        status: 'success',
        duration: 9000,
        isClosable: true,
        position: 'top'
      })
  }
  catch (err) {
    console.error(err);
    toast({
        title: 'Email used.',
        description: "Entered email already used, use another one.",
        status: 'error',
        duration: 9000,
        isClosable: true,
        position: 'top'
      })
  }
};


const sendPasswordReset = async (auth,email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};


const logout = () => {
  signOut(auth);
};


export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
  sendPasswordResetEmail
};