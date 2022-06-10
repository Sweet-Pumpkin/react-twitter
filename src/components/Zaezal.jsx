// react
import React from "react";

// firebase
import { myAuth } from "../firebase";

// style
import { ZaezalStyle } from "../styles/ZaezalStyle";

export default function Zaezal({ userEmail, ZaezalText }) {
  return (
    <ZaezalStyle>
      <div>{myAuth.currentUser.displayName}</div>
      <div className="email">{userEmail}</div>
      <div className="text">{ZaezalText}</div>
    </ZaezalStyle>
  )
}
