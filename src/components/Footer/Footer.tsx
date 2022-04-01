import React from "react";
import { Link, useLocation } from "react-router-dom";
import {  useAppDispatch } from '../../app/hooks';
import { calculateTotals, refreshList } from "../PageContent/components/CryptoList/cryptoSlice";
import './Footer.scss';

interface LinkProps {
  label?: string;
  icon?: string;
}

const Footer: Function = () => {
  const location: string = useLocation().pathname;
  const dispatch = useAppDispatch();
  const refresh = () => {
    dispatch(refreshList());
    dispatch(calculateTotals());
  };
  const actions: LinkProps[] = [
    {
      icon: 'k-icon-dashboard',
      label: 'dashboard',
    },
    {
      icon: 'k-icon-card',
      label: 'wallet',
    },
    {
      icon: 'k-icon-refresh',
      label: 'refresh',
    },
    {
      icon: 'k-icon-settings',
      label: 'settings',
    },
  ];
  return (
    <div className="Footer">
    {actions.map(action =>
    action.label ==='refresh' ?
    <button key={action.label} className="inactive" onClick={refresh}><i className={action.icon}/></button>
    :
      <Link to={'/' + action.label} key={action.label}>
        <button
          className={location === '/' + action.label ? 'active' : 'inactive'}

          >
            <i className={action.icon}/>
          </button>
      </Link>
          
      )}
    </div>
      
  );
}

export default Footer;
