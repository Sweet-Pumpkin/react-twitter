// react
import React, { useState } from "react";

// firebase
import { myAuth } from "../firebase";
import { updateProfile } from "firebase/auth";

export default function Modal({ setModalState, setMyName }) {
  // firebase info
  const info = myAuth.currentUser;
  const [newName, setNewName] = useState(info.displayName);

  // change
  const onSubmit = async (e) => {
    e.preventDefault();
    if (info.displayName !== newName) {
      await updateProfile(myAuth.currentUser, {displayName: newName});
      setMyName(info.displayName);
      setModalState(false);
    }
  }

  // close modal
  const onClose = () => {
    setModalState(false);
  }

  return (
    <div>
      <button onClick={onClose}>x</button>
      <form onSubmit={onSubmit}>
        <input type="text" value={newName} onChange={e => setNewName(e.target.value)}/>
        <input type="submit" value="변경" />
      </form>
    </div>
  )
}
