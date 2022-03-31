import React from "react";
import { useLocation, Link } from "react-router-dom";

import './Header.scss';

const Header: Function = () => {
  const location: string = useLocation().pathname;

  return (
    <div className="Header">
    Header
    </div>
      
  );
}

export default Header;
