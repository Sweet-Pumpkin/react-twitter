// react
import React from "react";

// style
import { ZaezalStyle } from "../styles/ZaezalStyle";

export default function Zaezal({ photoURL, userName ,userEmail, ZaezalText, DownloadFile }) {

  return (
    <ZaezalStyle>
      <img src={photoURL} alt="img" />
      <div>{userName}</div>
      <div className="email">{userEmail}</div>
      <div className="text">{ZaezalText}</div>
      { DownloadFile && <img src={DownloadFile} width="350px" height="auto" alt="img" /> }
    </ZaezalStyle>
  )
}
