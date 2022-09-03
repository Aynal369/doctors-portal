import { useEffect, useState } from "react";
import firebaseInitialize from "../authentication/firebaseInitialize";
import {
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  getIdToken,
  signOut,
} from "firebase/auth";
import { toast } from "react-toastify";

firebaseInitialize();

const useFirebase = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        let accessKey = sessionStorage.getItem("key");
        if (accessKey) {
          getIdToken(user).then((itToken) =>
            sessionStorage.setItem("token", itToken)
          );
          setIsLoggedIn(user);
          setUsers(user);
        }
      } else {
        setIsLoggedIn({});
        setUsers({});
        sessionStorage.removeItem("key");
      }
      setIsLoading(false);
    });
    return () => unSubscribe;
  }, [auth]);
  const createNewUser = (fullName, email, password, navigate) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfileName(fullName);
        const email = user.email;
        const displayName = fullName;
        const userData = {
          email,
          displayName,
          role: "Client",
          status: "Active",
        };
        clientSaveToDatabase(userData, "POST");
        toast.success("Successfully create a new account.");
        navigate("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode) {
          toast.error("Sorry! this email is already in use");
        }
      })
      .finally(() => setIsLoading(false));
  };
  const signInWithGoogle = (navigate, location) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setIsLoggedIn(user);
        setUsers(user);
        const email = user.email;
        const displayName = user.displayName;
        const userData = {
          email,
          displayName,
          role: "Client",
          status: "Active",
        };
        clientSaveToDatabase(userData, "PUT");
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        sessionStorage.setItem("key", JSON.stringify(token));
        const destination = location?.state?.from || "/";
        navigate(destination);
      })
      .catch((error) => {
        //
      })
      .finally(() => setIsLoading(false));
  };
  const clientSaveToDatabase = (userData, method) => {
    fetch("http://localhost:5000/clients", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    }).then();
  };
  const updateProfileName = (fullName) => {
    updateProfile(auth.currentUser, {
      displayName: fullName,
    })
      .then(() => {})
      .catch((error) => {});
  };
  const userLogin = (email, password, navigate, location) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const token = user.accessToken;
        sessionStorage.setItem("key", JSON.stringify(token));
        setUsers(user);
        setIsLoggedIn(user);
        const destination = location.state?.from || "/";
        navigate(destination);
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === "auth/wrong-password") {
          toast.error("wrong password. please try again or reset the password");
        } else if (errorCode === "auth/user-not-found") {
          toast.warn("user not found. please sign up");
        }
      })
      .finally(() => setIsLoading(false));
  };
  const handlePasswordResetEmail = (email) => {
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {})
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === "auth/user-not-found") {
          toast.warn("user not found. please sign up");
        }
      });
  };
  const handleSignOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUsers({});
        setIsLoggedIn();
        sessionStorage.removeItem("key");
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };

  return {
    users,
    isLoggedIn,
    isLoading,
    signInWithGoogle,
    createNewUser,
    userLogin,
    handlePasswordResetEmail,
    handleSignOut,
  };
};

export default useFirebase;
