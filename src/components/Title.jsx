import React from "react"
import { TitleStyle } from "../styles/TitleStyle";
import { Link } from "react-router-dom";

export default function Title() {
  return (
    <TitleStyle>
      <Link to="/" >
        <h2>ZAEZAL . .</h2>
      </Link>
    </TitleStyle>
  )
}
