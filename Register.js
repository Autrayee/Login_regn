import React, { useState } from "react"
import "./register.css"
import axios from "axios"
import { useHistory } from "react-router-dom"
import {Link} from 'react-router-dom'

const Register = () => {

    const history = useHistory()

    const [ user, setUser] = useState({
        name: "",
        email:"",
        password:"",
        contact:"",
        city:"",
        address:""
       
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, password, contact, city, address } = user
        if( name && email && password && contact && city && address){
            axios.post("http://localhost:9002/register", user)
            .then( res => {
                alert(res.data.message)
                history.push("/login")
            })
        } else {
            alert("invlid input")
        }
        
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
                  ><span className="glyphicon glyphicon-log-in">Login</span></Link
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
        <div>
            {console.log("User", user)}
            <h1>SIGN UP</h1>
            <input type="text"  class="form-control" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input>
            <input type="text"  class="form-control" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
            <input type="password"  class="form-control" name="password" value={user.password} placeholder="Password" onChange={ handleChange }></input>
            <input type="text"  class="form-control" name="contact" value={user.contact} placeholder="Contact" onChange={ handleChange }></input>
            <input type="text"  class="form-control" name="city" value={user.city} placeholder="City" onChange={ handleChange }></input>
            <input type="text"  class="form-control" name="address" value={user.address} placeholder="Address" onChange={ handleChange }></input>
            <div className="btn btn-primary" onClick={register} >Submit</div>
            <div className="hint-text">
                Already have an account? <Link to='/login'>Login here</Link>
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

export default Register