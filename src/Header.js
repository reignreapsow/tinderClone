import React from 'react';
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link, useHistory } from "react-router-dom";
/*  NOTES
    # ALWAYS USE CONST unless LET
*/


// ES6 ARROW function
// const Header = () => {}

function Header ({ backButton }) {
    const history = useHistory();
    return(
        //BEM
        <div className="header">
            {/*//# BACK BUTTON  if back BTN ?(do this) : (otherwise do this)*/}
            {backButton ? (
                <IconButton onClick={() => history.replace(backButton)}>
                    <ArrowBackIosIcon fontSize="large" className="header__icon" />
                </IconButton>
            ):(
                <IconButton>
                    <PersonIcon 
                        className="header__icon" fontSize="large"/>
                </IconButton>
            )}

            <Link to="/">
                <img 
                    className="header__logo"
                    src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
                    alt="tinder logo"
                />
            </Link>

            <Link to="/chat">
                <IconButton>
                    <ForumIcon 
                        className="header__icon" fontSize="large" />
                </IconButton>
            </Link>
        </div>
    )
}

export default Header;