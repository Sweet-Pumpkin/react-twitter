// react
import React, { useState, useEffect } from 'react'
// react router
import { useNavigate } from 'react-router-dom';
// firebase
import { myAuth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
// components
import Modal from "../components/Modal";
import Title from '../components/Title';
// style
import { ProfileStyle } from "../styles/ProfileStyle";

export default function Profile() {
  // navigate
  const navigate = useNavigate();

  // photoURL, displayName, email, joined
  const [myImgURL ,setMyImgURL] = useState("")
  const [myName, setMyName] = useState("");
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState("");

  const [modalState, setModalState] = useState(false);
  
  // firstPhotoChange
  const [firstPhotoChange, setFirstPhotoChange] = useState(false);

  // firebase info
  useEffect(() => {
    onAuthStateChanged(myAuth, () => {
      const info = myAuth.currentUser

      setMyName(info.displayName);
      setMyImgURL(info.photoURL);
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
    window.location.reload();
  }

  return (
    <ProfileStyle>
      <div className="profile">
        <Title />
        {/* USER INFO WRAP */}
        <div className="info-wrap">
          <img src={myImgURL} alt="myImg" />
          <div className="btns">   
            <button onClick={onEdit}>프로필 수정</button>
            <button onClick={onLogout}>로그아웃</button>
          </div>
          <div className="userInfo">
            <h3>{myName}</h3>
            <h3>{email}</h3>
            <h4>{joined.slice(0, 16)}</h4>
          </div>
        </div>

        {/* MODAL STATE */}
        {
          modalState && 
          <div className="modal">
            <Modal 
              setModalState={setModalState} 
              setMyName={setMyName} 
              setMyImgURL={setMyImgURL}
              firstPhotoChange={firstPhotoChange}
              setFirstPhotoChange={setFirstPhotoChange}
            />
          </div>
        }

    </div>
    </ProfileStyle>
  )
}