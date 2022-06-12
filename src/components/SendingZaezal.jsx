// react
import React, { useState, useEffect } from "react";

// react router
import { Link } from "react-router-dom";

// firebase
import { myAuth, DB, storage } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadString, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

// img
import basicImg from "../assets/basic.png";
import sendIcon from "../assets/send.svg";
import photoIcon from "../assets/photo.svg";

// style
import { SendingZaezalStyle } from "../styles/SendingZaezalStyle"; 

export default function SendingZaezal() {
  const info = myAuth.currentUser;
  
  // send msg
  const [zaezal, setZaezal] = useState("");

  // uploading img
  const [newFile, setNewFile] = useState("");

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
    
    if (!zaezal.trim()) {
      return alert("빈 값입니다.");
    }

    // uploading file
    let downloadFile = "";
    if (newFile !== "") {
      const fileRef = ref(storage, `${info.uid}/${uuidv4()}`);
      const res = await uploadString(fileRef, newFile, "data_url");
      downloadFile = await getDownloadURL(res.ref);
    }

    // sending msg info
    const zaezalZaezal = {
      text: zaezal,
      createdAt: Date.now(),
      creatorId: info.uid,
      photoURL: info.photoURL,
      userName: info.displayName,
      userEmail: info.email,
      downloadFile,
    }

    try {
      await addDoc(collection(DB, "zaezals"), zaezalZaezal);
    } catch (error) {
      console.log(error)
    }

    setZaezal("");
    setNewFile("");
  }

  // File
  const onFileChange = e => {
    const { target: { files }, } = e;
    const theFile = files[0];

    // using FileReader API
    const reader = new FileReader();
    reader.onloadend = finishedEvent => {
      const { currentTarget: { result } } = finishedEvent
      setNewFile(result);
    }
    reader.readAsDataURL(theFile);
  }

  // Clear img preview
  const onClearFileURL = () => {
    setNewFile("");
  }

  return (
    <SendingZaezalStyle>
      <div className="myZaezal">
        <Link className="goToProfile" to="/profile">
          <img src={myImgURL} alt="myImg" />
        </Link>

        {/* input */}
        <form onSubmit={onSend}>
          <textarea 
            className="inputZaezal" 
            type="text" 
            placeholder="무슨 생각을 하고 계신가요?" 
            value={zaezal} 
            onChange={e => setZaezal(e.target.value)} 
            maxLength={120} 
          />

          {/* img preview */}
          <div className="preview">
            {
              newFile && 
              <div>
                <img src={newFile} width="282px" height="auto" alt="preview"/>
                <button className="clear" onClick={onClearFileURL}>x</button>
              </div>
            }
          </div>

          {/* button */}
          <div className="btn">
            <label htmlFor="file-input">
              <img className="photo" src={photoIcon} alt="Addphoto" />
            </label>
            <input id="file-input" type="file" accept="image/*" onChange={onFileChange} />
            <button className="sendBtn">
              <img className="send" src={sendIcon} alt="send" />
            </button>
          </div>
        </form>

      </div>
    </SendingZaezalStyle>
  )
}
