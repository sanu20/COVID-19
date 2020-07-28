import React from 'react';
import logo from "./Images/logo.png";
import SearchIcon from '@material-ui/icons/Search';

const Header = () => {

    return (
        <div className="header">
            <img src={logo} alt="logo" width='90' height='70'/>
            <h1>COVID-19</h1>
              <SearchIcon />
            
        </div>
    );
};

export default Header;
