import React from 'react';
//import { Form } from 'react-bootstrap';
//import styled from "styled-components";
import logo from '../images/cart.jpg';
import './navbar.css';
import {useSelector} from 'react-redux';





const Navbar = () => {
    
    const count=useSelector(state=>state.count) ;

    return (
        <div className='Container'>
            <div className='Wrapper'>
                <div className='Left'><h1>E-commerce</h1></div>
                <div className='Right'>
                    <div className='LogoDiv'>
                        <img src={logo} style={{height:'30px',padding:'2px 5px'}} alt='img' />
                        <span><strong>{count}</strong></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
