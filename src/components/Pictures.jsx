import React from "react";
import "../styles/global.scss";
import "../styles/Pictures.scss";
import { Picture } from "./Picture";

const Pictures = () => {
  return (
    <main className="mainContainer">
      <div className="search">
        <input className="input" type="text" />
        <button className="button">SEARCH</button>
      </div>
      <section className="picturesContainer">
        <Picture></Picture>
        <Picture></Picture>
        <Picture></Picture>
      </section>
    </main>
  );
};

export { Pictures };
