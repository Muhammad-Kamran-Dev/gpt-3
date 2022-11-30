import React, { useState } from 'react'
import logo from "../../assets/logo.svg";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import "./navbar.css";

// BEM conventions
const Navbar = () => {
  const [toggleMenu, settoggleMenu] = useState(false);
  const Menu = () => (
    <>
      <p> <a href="#home">Home</a></p>
      <p> <a href="#wgpt3">WhatIsGpt3?</a></p>
      <p> <a href="#possibility">OpenAI</a></p>
      <p> <a href="#features">CaseStudies</a></p>
      <p> <a href="#blog">Library</a></p >
    </>
  )
  return (
    <div className='gpt3__navbar'>
      <div className="gpt__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div >
      </div >
      <div className="gpt3__navbar-sign">
        <p>Sign In</p>
        <button type='button'>Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? <RiCloseLine color='#fff' size={27} onClick={() => settoggleMenu(false)} /> : <RiMenu3Line color='#fff' size={27} onClick={() => settoggleMenu(true)} />}

        {toggleMenu && <div className='gpt3__navbar-menu__container scale-up-center'>
          <div className="gpt3__navbar-menu_container-links">
            <Menu />
            <div className="gpt3__navbar-menu_container-links-sign">
              <p>Sign In</p>
              <button type='button'>Sign up</button>
            </div>
          </div>
        </div>}
      </div>
    </div >
  )
}

export default Navbar