// react
import React, { useState, useEffect } from "react";

// react router
import { Link, useNavigate } from "react-router-dom";

// firebase
import { myAuth } from "../firebase.js";
import { createUserWithEmailAndPassword, } from "firebase/auth";

// components
import LoginGoogle from "../components/LoginGoogle";
import Title from "../components/Title";

// style
import { RegisterStyle } from "../styles/RegisterStyle";

export default function Auth() {
  const navigate = useNavigate();

  // email, name, pw, pw확인
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pw, setPw] = useState("");
  const [pwConfirm, setPwConfirm] = useState("");

  // login disabled & message
  const [btnDisable, setBtnDisable] = useState(true);
  const [msg, setMsg] = useState("")

  useEffect(() => {
    if (email === "" || name === "" || pw === "" || pwConfirm === "") {
      setBtnDisable(true);
    } else if (email.search(/\s/) !== -1 || name.search(/\s/) !== -1 || pw.search(/\s/) !== -1) {
      console.log(setName)
      setBtnDisable(true);
      setMsg("공백은 사용할 수 없습니다.");
      setTimeout(() => {setMsg("")}, 3000);
    } else if (pw !== pwConfirm) {
      setBtnDisable(true);
      setMsg("비밀번호가 일치하지 않습니다.");
      setTimeout(() => {setMsg("")}, 3000);
    } else {
      setBtnDisable(false);
      setMsg("");
    }
  }, [email, name, pw, pwConfirm]);

  // submit
  const onSubmit = async (e) => {
    e.preventDefault();
    // 회원가입
    try {
      // email & pw로 회원가입
      await createUserWithEmailAndPassword(myAuth, email, pw)
      .then(() => {
        // displayname 적용
        const res = myAuth.currentUser;
        res.displayName = name;
      })
      navigate("/");
    } catch (error) {
      alert("입력된 값이 올바르지 않습니다.")
    }
  }

  return (
    <RegisterStyle>
      <div className="loginMain">
        <div className="login">
          <Title />
          <LoginGoogle />
          <hr />
          <form className="form" onSubmit={onSubmit}>
            <input className="email" type="email" placeholder="이메일" onChange={e => setEmail(e.target.value)} value={email} />
            <input className="name" type="text" placeholder="성명" onChange={e => setName(e.target.value)} value={name} />
            <input className="password" type="password" placeholder="비밀번호" onChange={e => setPw(e.target.value)} value={pw} />
            <input className="passwordConfirm" type="password" placeholder="비밀번호 확인" onChange={e => setPwConfirm(e.target.value)} value={pwConfirm} />
            <span>{msg}</span>
            <input className="loginbtn" type="submit" value="회원가입" disabled={btnDisable} />
          </form>
            
        </div>
        <div className="register">
          <div className="nav">
            <span>님계있?</span>
            <Link className="goTo" to="/">로그인</Link>
          </div>
        </div>
      </div>
    </RegisterStyle>
  )
}
