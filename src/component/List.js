
import logo from "../assets/logo.svg"
import { NavLink } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person3';
import loginPhoto from "../assets/login-photo.jpg"
import CloseIcon from '@mui/icons-material/Close';
import "../css/liststyle.css"
import { useState } from "react";
const MainBody = document.querySelector('.main-body')



const List = () => {

    const [isActive,setActive] = useState(true)

     const handleLogin = () => {
        setActive(!isActive)
        MainBody.classList.add("overflow-hidden")
    }

    const handleClose = () => {
        setActive(!isActive)
        MainBody.classList.remove("overflow-hidden")
    }

    return (

        <header>
            <div className="container container2" id="top">
                <div >
                    <NavLink to="/"><img src={logo} alt="" className="logo" /></NavLink>
                </div>
                <nav>
                    <div className="list">
                        <NavLink to="/" className="listitem">Home</NavLink>
                        <NavLink to="/albums" className="listitem">Albums</NavLink>
                        <NavLink to="/team" className="listitem">Our Team</NavLink>
                        <NavLink to="/services" className="listitem">Services</NavLink>
                    </div>
                </nav>
                <div className="icons">

                    <button className="login" onClick={handleLogin}><PersonIcon></PersonIcon>  Login</button>

                </div>
            </div>

            <div className={`${isActive ? "show-login" : "shardul"}`}>
            <div className="login-form">
                <div className="loginphoto-container">
                    <img src={loginPhoto} alt="" />
                </div>
                <div className="login-now">
                    <h1>Login</h1>
                    <input type="email" placeholder="example@mail.com" className="email" />
                    <input type="password" placeholder="Password" className="email" />
                    <p className="remember-me"><input type="checkbox" id="remember" />Remember me?</p>
                    <p className="login-register"><button className="login">Sign In</button> <button className="login">Register</button></p>
                    
                    
                    <p className="forget">Forgot Password? <a href="#1" className="click-here">Click Here</a></p>
                </div>
                <CloseIcon  onClick={handleClose} className="login-close"/>
            </div>
            </div>
        </header>

    );
}

export default List;