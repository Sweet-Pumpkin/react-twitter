// react
import React, { useState, useEffect } from "react";

// react router
import { Link } from "react-router-dom";

// firebase
import { myAuth } from "../firebase.js";
import { signInWithEmailAndPassword, } from "firebase/auth";

// components
import LoginGoogle from "../components/LoginGoogle.jsx";

// style
import { AuthStyle } from "../styles/AuthStyle.js";

export default function Auth() {
  // email, pw
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  // login disabled
  const [btnDisable, setBtnDisable] = useState(true);

  useEffect(() => {
    if (email !== "") {
      setBtnDisable(false);
    } else {
      setBtnDisable(true);
    }
  }, [email]);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(
        myAuth, email, pw
      );
    } catch (error) {
      window.alert("error")
    }
  }

  return (
    <AuthStyle>
      <div className="loginMain">
        <div className="login">
          <h2>ZAEZAL . .</h2>
          <form className="form" onSubmit={onSubmit}>
            <input className="email" type="email" placeholder="이메일" onChange={e => setEmail(e.target.value)} value={email} />
            <input className="password" type="password" placeholder="비밀번호" onChange={e => setPw(e.target.value)} value={pw} />
            <input className="loginbtn" type="submit" value="로그인" disabled={btnDisable} />
          </form>
            <LoginGoogle />
        </div>
        <div className="register">
          <div className="nav">
            <span>님계없?</span>
            <Link className="goTo" to="/register">회원가입하기</Link>
          </div>
        </div>
      </div>
    </AuthStyle>
  )
}
