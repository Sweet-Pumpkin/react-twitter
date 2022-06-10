// react
import React, { useState, useEffect } from 'react'

// react router
import { useNavigate } from 'react-router-dom';

// firebase
import { myAuth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';

// components
import Modal from "../components/Modal";

// img
import basicImg from "../assets/basic.png"

export default function Profile() {
  // navigate
  const navigate = useNavigate();

  // photoURL, displayName, email, joined
  const [myImgURL ,setMyImgURL] = useState("")
  const [myName, setMyName] = useState("");
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState("");

  const [modalState, setModalState] = useState(false);
  
  // firebase info
  useEffect(() => {
    onAuthStateChanged(myAuth, () => {
      const info = myAuth.currentUser

      if (info.displayName === null) {
        setMyName("unknown");
      } else {
        setMyName(info.displayName);
      }

      if (info.photoURL === null) {
        setMyImgURL(basicImg)
      } else {
        setMyImgURL(info.photoURL);
      }

      setEmail(info.email);
      setJoined(info.metadata.creationTime);

    })
  }, [])

  // edit profile
  const onEdit = () => {
    setModalState(true);
  }

  // logout
  const onLogout = () => {
    myAuth.signOut();
    navigate("/");
  }

  return (
    <div className="profile">
      <img src={myImgURL} alt="myImg" />
      <button onClick={onEdit}>프로필 수정</button>
      <button onClick={onLogout}>로그아웃</button>
      <h3>{myName}</h3>
      <h3>{email}</h3>
      <h4>{joined.slice(0, 16)}</h4>
      <div>{modalState && <Modal setModalState={setModalState} setMyName={setMyName} />}</div>
    </div>
  )
}