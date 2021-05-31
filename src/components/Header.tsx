import React from 'react'
import logo from '../img/logo.svg'
import './Header.scss'


function Header(props: any): any {
  return (

    <header className="header">
      <div className="container header-box">
        <img className="logo" src={logo} alt="logo"></img>
        <h1 className="heading"> <span className="heading--up" >Students</span> by </h1>
      </div>
    </header>
    
  )
}

export default Header