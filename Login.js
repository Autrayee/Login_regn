import React, {useState} from "react"
import "./Login.css"
import axios from "axios"
import { useHistory } from "react-router-dom"
import {Link} from 'react-router-dom'

const Login = ({ setLoginUser}) => {

    const history = useHistory()

    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:9002/login", user)
        .then(res => {
            alert(res.data.message)
           // setLoginUser(res.data.user)
            history.push("/")
        })
    }

    return (
      <div>
          <header>
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#mynavbar"
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to='/' class="navbar-brand">Pure Feel</Link>
          </div>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to='/register' class=""
                  ><span class="glyphicon glyphicon-user">SignUp</span></Link
                >
              </li>
              <li>
                <Link to='/login'
                  ><span class="glyphicon glyphicon-log-in">Login</span></Link
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <main>
      <div className="container">
        <div className="row row_style">
          <div className="col-xs-5 col-lg-offset-2">
            <form>
        <div className="loginMain" >
          
            <h1 className="heading">Login</h1>
            <p>Login to make a purchase</p>
            <input type="text"  class="form-control" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password"  class="form-control" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            <div className="btn btn-primary" onClick={login}>Login</div>
            <div className="hint-text" >
                Don't have an account? <Link to='/register'>Register</Link>
              </div>
        
        
        </div>
        </form>
        </div>
        </div>
      </div>
    </main>
        
        <footer>
      <div className="container">
        <center>Copyright © Pure Feel Store. All Rights Reserved</center>
      </div>
    </footer>
        </div>
    )
}

export default Login
