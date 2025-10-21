import React from "react";
import "./MainHeader.sass";
import MyLink from "../UI/MyLink/MyLink";

export default function MainHeader() {
  return (
    <div className="main-header">
      <div className="main-header__container">
        <nav>
          <ul>
            <li><MyLink href="/weather">Wheather</MyLink></li>
            <li><MyLink href="/timer">Timer</MyLink></li>
            <li><MyLink href="/notes">Notes</MyLink></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
