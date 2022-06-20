// react
import React, { useState, useEffect } from "react";
// firebase
import { onAuthStateChanged } from "firebase/auth";
import { myAuth } from "./firebase";
// routes&components
import Main from "./routes/Main";
import Loading from "./components/Loading";

export default function App() {
  const [init, setInit] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    onAuthStateChanged(myAuth, user => {
      if (user) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
      setInit(true);
    })
  }, []);

  return (
    <>
      {init ? <Main isLogin={isLogin} /> : <Loading />} 
    </>
  )
}

