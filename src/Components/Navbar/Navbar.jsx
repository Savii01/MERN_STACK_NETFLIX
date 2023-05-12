//0613B7


import React from 'react'
import './Navbar.scss'
import Logo from '../../images/MovieLogo.svg'
import { useState, useEffect } from 'react'
import {Notifications, Search, ArrowDropDown } from '@material-ui/icons'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const[show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll", null)
        };
    }, []);
  return (
    <div className={`navbar ${show && 'nav_black'}`}>
      <div className="container">
        <div className="left">
            <img className="logo" src={Logo} alt = 'logo'/>
            <Link to ='/' className='links'><span className="navbarList">Home</span></Link>
            <Link to ='/series' className='links'><span className="navbarList">Series</span></Link>
            <Link to = '/movies' className='links'><span className="navbarList">Movies</span></Link>
            <span className="navbarList">New</span>
            <span className="navbarList">Playlist</span>
        </div>
        <div className="right">
            <Search className ='Icon'/>
            <span className="kid">KID</span>
            <Notifications className ="Icon"/>
            <img src='https://images.pexels.com/photos/5082976/pexels-photo-5082976.jpeg?auto=compress&cs=tinysrgb&w=600' 
            alt="" 
            className="avatar" 
            />
            <div className="profile">
            <ArrowDropDown className = 'Icon'/>
            <div className="options">
                <span>Settings</span>
                <span>Logout</span>   
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
