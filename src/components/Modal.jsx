// react
import React, { useState } from "react";

// firebase
import { myAuth, storage } from "../firebase";
import { updateProfile } from "firebase/auth";
import { ref, uploadString, getDownloadURL, deleteObject } from 'firebase/storage';
import { v4 as uuidv4 } from "uuid";

// style
import { ModalStyle } from "../styles/ModalStyle";

export default function Modal({ setModalState, setMyName, setMyImgURL, firstPhotoChange, setFirstPhotoChange }) {
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
      
      await updateProfile(info, {
        photoURL: downloadImg,
      })

      setFirstPhotoChange(true);
      setPrevPhotoURL(downloadImg);
      setMyImgURL(info.photoURL);
    }

    // update displayname
    if (info.displayName !== newName) {
      await updateProfile(info, {
        displayName: newName,
      });
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
      <div className="background">
        <div className="backgroundColor"></div>
        <div className="modal">
          <button onClick={onClose}>x</button>
          <form onSubmit={onSubmit}>
            <label htmlFor="file-input">
              <img className="photo" src={newPhoto} alt="Addphoto" />
            </label>
            <input id="file-input" type="file" accept="image/*" onChange={onFileChange} />
            <input type="text" value={newName} onChange={e => setNewName(e.target.value)}/>
            <input type="submit" value="변경" />
          </form>
        </div>
      </div>
    </ModalStyle>
  )
}
