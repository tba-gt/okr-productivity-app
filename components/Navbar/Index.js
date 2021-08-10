import React from "react";
import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
    return (
        <>
           <Nav>
            <NavLogo to="/">
                Macro to Micro
                
            </NavLogo>
            <Bars />

            <NavMenu>
                <NavLink to="/" activeStyle>
                    Home
                </NavLink>
                <NavLink to="/dashboard" activeStyle>
                    OKR Dashboard
                </NavLink>
                <NavLink to="/weeklyplan" activeStyle>
                    Weekly Plan
                </NavLink>
                <NavLink to="/signin" activeStyle>
                    Sign In
                </NavLink>
                <NavBtnLink to="/signup">Sign Up</NavBtnLink>      
            </NavMenu> 
           </Nav> 
        </>
    );
};
export default Navbar;
