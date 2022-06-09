// react
import React, { useState, useEffect } from "react";

// react router
import { useNavigate } from "react-router-dom";

// firebase
import { myAuth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

// img
import basicImg from "../assets/basic.png"

export default function Profile() {
  const navigate = useNavigate();

  const [myName, setMyName] = useState("")
  const [myImgURL ,setMyImgURL] = useState("")
  
  useEffect(() => {
    onAuthStateChanged(myAuth, () => {
      const info = myAuth.currentUser

      if (info.displayName === null) {
        setMyName("unknown")
      } else {
        setMyName(info.displayName);
      }

      if (info.photoURL === null) {
        setMyImgURL(basicImg)
      } else {
        setMyImgURL(info.photoURL);
      }
    })
  }, [])

  // logout
  const onLogout = () => {
    myAuth.signOut();
    navigate("/");
  }

  return (
    <div className="profile">
      <img src={myImgURL} alt="myImg" />
      <div className="myName">{myName}</div>
      <button onClick={onLogout}>로그아웃</button>
    </div>
  )
}
