// react
import React, { useState, useEffect } from "react";

// react router
import { Link } from "react-router-dom";

// firebase
import { myAuth, DB } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";

// img
import basicImg from "../assets/basic.png";
import sendIcon from "../assets/send.svg";
import photoIcon from "../assets/photo.svg";

// style
import { SendingZaezalStyle } from "../styles/SendingZaezalStyle"; 

export default function SendingZaezal() {
  // send msg
  const [zaezal, setZaezal] = useState("");

  // imgURL
  const [myImgURL ,setMyImgURL] = useState("")
  
  useEffect(() => {
    onAuthStateChanged(myAuth, () => {
      const info = myAuth.currentUser

      if (info.photoURL === null) {
        setMyImgURL(basicImg)
      } else {
        setMyImgURL(info.photoURL);
      }
    })
  }, [])

  const onSend = async e => {
    e.preventDefault();
    
    // sending msg info
    const zaezalZaezal = {
      text: zaezal,
      createdAt: Date.now(),
      creatorId: myAuth.currentUser.uid,
      photoURL: myAuth.currentUser.photoURL,
      userName: myAuth.currentUser.displayName,
      userEmail: myAuth.currentUser.email,
    }

    try {
      await addDoc(collection(DB, "zaezals"), zaezalZaezal);
    } catch (error) {
      console.log(error)
    }

    setZaezal("");

  }

  return (
    <SendingZaezalStyle>
      <div className="myZaezal">
        <Link className="goToProfile" to="/profile">
          <img src={myImgURL} alt="myImg" />
        </Link>
        <form onSubmit={onSend}>
          <input className="inputZaezal" type="text" placeholder="무슨 생각을 하고 계신가요?" value={zaezal} onChange={e => setZaezal(e.target.value)} maxLength={120} />
          <div className="btn">
            <label htmlFor="file-input">
              <img className="photo" src={photoIcon} alt="Addphoto" />
            </label>
            <input id="file-input" type="file" accept="image/*"/>
            <button className="sendBtn">
              <img className="send" src={sendIcon} alt="send" />
            </button>
          </div>
        </form>

      </div>
    </SendingZaezalStyle>
  )
}
