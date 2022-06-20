// react
import React, { useState } from "react";
// firebase
import { myAuth, storage } from "../firebase";
import { updateProfile } from "firebase/auth";
import { ref, uploadString, getDownloadURL, deleteObject, } from 'firebase/storage';
import { v4 as uuidv4 } from "uuid";
// img
import CloseBtn from "../assets/close.svg";
import Camera from "../assets/photo_camera.svg";
// style
import { ModalStyle } from "../styles/ModalStyle";

export default function Modal(
  { 
    setModalState, 
    setMyName, 
    setMyImgURL, 
    firstPhotoChange, 
    setFirstPhotoChange,
     
  }
  ) {
  // firebase info
  const info = myAuth.currentUser;
  const [newName, setNewName] = useState(info.displayName);
  const [newPhoto, setNewPhoto] = useState(info.photoURL);

  // prev Photo URL
  const [prevPhotoURL, setPrevPhotoURL] = useState(info.photoURL);

  // change info
  const onSubmit = async (e) => {
    e.preventDefault();

    if (newPhoto !== info.photoURL) {
      
      if (firstPhotoChange) {
        await deleteObject(ref(storage, prevPhotoURL));
      }

      const fileRef = ref(storage, `${info.uid}/${uuidv4()}`);
      const res = await uploadString(fileRef, newPhoto, "data_url");
      const downloadImg = await getDownloadURL(res.ref);
      
      await updateProfile(info, {photoURL: downloadImg,})

      setFirstPhotoChange(true);
      setPrevPhotoURL(downloadImg);
      setMyImgURL(info.photoURL);
    }

    // update displayname
    if (info.displayName !== newName) {
      await updateProfile(info, {displayName: newName,});
      setMyName(info.displayName);
    }
    
    setModalState(false);
  }

  // File
  const onFileChange = e => {
    const { target: { files }, } = e;
    const theFile = files[0];

    // using FileReader API
    const reader = new FileReader();
    reader.onloadend = finishedEvent => {
      const { currentTarget: { result } } = finishedEvent
      setNewPhoto(result);
    }
    reader.readAsDataURL(theFile);
  }

  // close modal
  const onClose = () => {
    setModalState(false);
  }

  return (
    <ModalStyle>
      <div className="modal">
        {/* CLOSE BUTTON */}
        <button className="closeBtn" onClick={onClose}>
          <img className="close" src={CloseBtn} alt="closeBtn" />
        </button>
        {/* EDITING PROFILE IMG */}
        <form onSubmit={onSubmit}>
          <label htmlFor="file-input">
            <img className="photo" src={newPhoto} alt="Addphoto" />
            <div className="cameraBtn">
              <img className="camera" src={Camera} alt="camera" />
            </div>
          </label>
          <input id="file-input" type="file" accept="image/*" onChange={onFileChange} />
          {/* EDITING USER NAME */}
          <input className="editingUserName" type="text" value={newName} onChange={e => setNewName(e.target.value)}/>
          <input className="submitEdit" type="submit" value="프로필 변경" />
        </form>
      </div>
    </ModalStyle>
  )
}
