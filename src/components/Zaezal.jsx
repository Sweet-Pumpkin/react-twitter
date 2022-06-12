// react
import React from "react";

// firebase
import { DB, storage } from '../firebase';
import { doc, deleteDoc, } from 'firebase/firestore';
import { ref, deleteObject } from "firebase/storage"

// img
import settingBtn from "../assets/setting.svg";
import deleteBtn from "../assets/delete.svg";

// style
import { ZaezalStyle } from "../styles/ZaezalStyle";

export default function Zaezal({ 
    userId, 
    createdAt,
    photoURL, 
    userName ,
    userEmail, 
    ZaezalText, 
    DownloadFile,
    isOwner,
  }) {

  // import DB zaezals
  const zaeZalTextRef = doc(DB, "zaezals", userId);

  // delete zaezal
  const onDeleteClick = async (e) => {
    e.preventDefault();
    const ok = window.confirm("삭제하시겠습니까?");

    if (ok) {
      await deleteDoc(zaeZalTextRef);
      await deleteObject(ref(storage, DownloadFile));
    }

  }

  // createdAt
  const timestamp = new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(createdAt);

  return (
    <ZaezalStyle>
      <div className="zaezal">
        <div className="userInfo">
          <img src={photoURL} alt="img" />
          <div className="textInfo">
            <div className="userName">{userName}</div>
            <div className="email">{userEmail}</div>
            <div className="time">{timestamp}</div>
          </div>
        </div>
        <div className="text">{ZaezalText}</div>
        { DownloadFile && <img src={DownloadFile} className="zaezalImg" alt="img" /> }
        <div className="option">
          { isOwner &&
            <>
              <button className="setting">
                <img src={settingBtn} alt="img" />
              </button>
              <button onClick={onDeleteClick} className="delete">
                <img src={deleteBtn} alt="img" />
              </button>
            </>
          }
        </div>
      </div>
    </ZaezalStyle>
  )
}
