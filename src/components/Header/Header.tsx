import React from "react";
import { Link } from "react-router-dom";

import { useAppSelector } from '../../app/hooks';
import { selectTotal, selectName } from "../PageContent/components/CryptoList/cryptoSlice";
import './Header.scss';

const Header: Function = () => {
  const balance = useAppSelector(selectTotal);
  const name = useAppSelector(selectName);
  return (
    <div className="Header">
      <span className="center">
        <span>Hi, {name}</span>
        <span>your balance</span>
        <span>$ {balance.toLocaleString('en')}</span>
        
      </span>
      <span className="notifications">
        <Link to="/notifications">
          <i className="k-icon-bell"/>
        </Link>
      </span>
    </div>
      
  );
}

export default Header;
