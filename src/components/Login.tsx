import React from 'react'
import logo from '../img/logo.svg'
import {Link} from 'react-router-dom'


const Login = (): any => {

  return (
    
    <div className="content-form">
      <form action="#">
        <Link to='/students'>Students</Link>
        <img src={logo} alt="logo" />
      </form>
    </div>

  )

}

export default Login