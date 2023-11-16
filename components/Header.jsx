import React from "react";

function Header() {
  const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Sans-Serif",
  }
  return (
    <header className="flex items-center justify-between">

      <h1 className="text-3xl font-bold">SIMPLE / BEAUTIFUL LANDING PAGE</h1>
      {/* <h1 style={{backgroundColor:"lightblue"}}>Improvise</h1> */}
      <h2 style={myStyle}></h2>
      <nav className="flex space-x-4">
        <a href="#">HOME</a>
        <a href="#">ABOUT</a>
        <a href="#">SERVICES</a>
        <a href="#">CONTACT</a>
      </nav>
    </header>
  );
}

export default Header;
