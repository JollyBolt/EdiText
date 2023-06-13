// import React from 'react'

import { useState } from "react"
import moon from '../assets/img/moon-svgrepo-com.svg'
import sun from '../assets/img/sun-svgrepo-com.svg'
import { NavLink } from "react-router-dom"

export default function Navbar(props) {

    const [btnImg,setBtnImg] = useState(moon)

    const changeTheme=()=>{
        let darkBtn = document.querySelector("#dark-mode-btn")
        let nav = document.querySelector(".navbar")
        if (document.documentElement.getAttribute('data-bs-theme') === 'dark') {
            document.documentElement.setAttribute('data-bs-theme','light')
            darkBtn.classList.toggle("btn-light")
            darkBtn.classList.toggle("btn-tertiary")
            setBtnImg(moon)
        }
        else {
            document.documentElement.setAttribute('data-bs-theme','dark')
            darkBtn.classList.toggle("btn-light")
            darkBtn.classList.toggle("btn-tertiary")
            setBtnImg(sun)
        }
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary " >
                <div className="container-fluid mx-5">
                    <a className="navbar-brand fs-2 fw-bolder" href="/">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
                            </li>
                        </ul>
                        <button id='dark-mode-btn' className="btn btn-light my-2" onClick={changeTheme}><img src={btnImg} style={{width:"30px"}} alt="" /></button>
                    </div>
                </div>
            </nav>
        </>
    )
}