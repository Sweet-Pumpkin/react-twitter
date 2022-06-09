// react
import React from "react"

// react router
import { useNavigate } from "react-router-dom"

// firebase
import { myAuth } from "../firebase";
import { GoogleAuthProvider, signInWithPopup, } from "firebase/auth";

// style
import { LoginGoogleStyle } from "../styles/LoginGoogleStyle";

export default function LoginGoogle() {
  const navigate = useNavigate();

  // login to google
  const onGoogle = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(myAuth, provider);
    
    navigate("/");
  }
  return (
    <LoginGoogleStyle>
      <button onClick={onGoogle}>Google 아이디로 로그인</button>
    </LoginGoogleStyle>
  )
}
