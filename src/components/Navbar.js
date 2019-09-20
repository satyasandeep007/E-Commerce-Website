import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo2 from "../logo2.svg";
import styled from 'styled-components';
import {ButtonContainer} from './Button';

export default class Navbar extends Component {
    render() {
        return (
                <NavWrapper className="navbar navbar-expand-sm 
                 navbar-dark px-sm-5" >
                    <Link to="/"> 
                         <img src={logo2} width="40" height="40" class="d-inline-block align-top" alt="store" 
                         className="navbar-brand" />
                    </Link>
                    <ul className="navbar-nav  align-items-center">
                        <li className="nav-item ml-5">
                            <Link to="/" className="nav-link " > Products 
                            </Link>
                        </li>
                        <li className="nav-item ml-5">
                            <Link to="/" className="nav-link"> details
                            </Link>
                        </li>
                    </ul>
                    <Link to="/cart" className="ml-auto">
                        <ButtonContainer>
                            <span>
                            <i className="fas fa-cart-plus" />
                            </span>
                            my cart
                        </ButtonContainer>
                    </Link>
                </NavWrapper>    
       );
    }
}

const NavWrapper = styled.nav`
background: blue;
color:white !important;
font-size:1.3rem;
text-transform:capitalize !important;




`;