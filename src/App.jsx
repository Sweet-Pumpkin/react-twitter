import React, { useState, useEffect } from "react";

import { onAuthStateChanged } from "firebase/auth";
import { myAuth } from "./firebase";

import Main from "./routes/Main";

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
      {init ? <Main isLogin={isLogin} /> : "LOADING..."} 
    </>
  )
}

