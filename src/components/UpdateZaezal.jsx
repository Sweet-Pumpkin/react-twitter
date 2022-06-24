// react
import React, { useState } from 'react'
// firebase
import { updateDoc } from 'firebase/firestore';
// img
import sendBtn from "../assets/send.svg";
import closeBtn from "../assets/close.svg";
// style
import { UpdateZaezalStyle } from '../styles/UpdateZaezalStyle';

export default function UpdateZaezal({ zaeZalTextRef, ZaezalText, setUpdateState }) {

  const [newZaezal, setNewZaezal] = useState(ZaezalText);

  const onUpdateBtn = async (e) => {
    e.preventDefault();
    await updateDoc(zaeZalTextRef, { text: newZaezal });
    setUpdateState(false);
  }

  return (
    <UpdateZaezalStyle>
      <textarea 
        className="text" 
        value={newZaezal} 
        onChange={(e) => setNewZaezal(e.target.value)}
      >
        {ZaezalText}
      </textarea> 
      <div className="btns">
        <button className="closeBtn" onClick={() => setUpdateState(false)}>
          <img src={closeBtn} alt="closeBtn" />
        </button>
        <button className="updateBtn" onClick={onUpdateBtn}>
          <img src={sendBtn} alt="sendBtn" />
        </button>
      </div>
    </UpdateZaezalStyle>
  )
}
