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
import ImportMyZaezal from "../components/ImportMyZaezal";
// img 
import EditIMG from "../assets/setting.svg";
import LogoutIMG from "../assets/logout.svg";
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
          {/* USER IMG */}
          <img src={myImgURL} alt="myImg" />
          {/* BUTTONS */}
          <div className="btns">   
            <button className="editBtn" onClick={onEdit}>
              <img src={EditIMG} alt="Edit Profile" />
            </button>
            <button className="logoutBtn" onClick={onLogout}>
              <img src={LogoutIMG} alt="Logout" />
            </button>
          </div>
          {/* USER INFO */}
          <div className="userInfo">
            <h3 className="userName">{myName}</h3>
            <h3 className="userEmail">{email}</h3>
            <h4 className="userJoined">{`Joined: ${joined.slice(0, 16)}`}</h4>
          </div>
          <hr />
        </div>
        <ImportMyZaezal />
      </div>
            
      {/* MODAL STATE */}
      {
        modalState && 
        <div className="modal-wrap">
          <div className="background" onClick={() => setModalState(false)}></div>
          <div className="modal">
            <Modal 
              setModalState={setModalState} 
              setMyName={setMyName} 
              setMyImgURL={setMyImgURL}
              firstPhotoChange={firstPhotoChange}
              setFirstPhotoChange={setFirstPhotoChange}
            />
          </div>
        </div>
      }
    </ProfileStyle>
  )
}