import { Link } from "react-router-dom";

import { useAppSelector } from '../../app/hooks';
import { selectTotal, selectName } from "../PageContent/components/CryptoList/cryptoSlice";
import './Header.scss';

const Header: Function = () => {
  const balance = useAppSelector(selectTotal);
  const name = useAppSelector(selectName);
  return (
    <div id="Header" data-testid="Header">
      <span className="center">
        <span data-testid='name'>Hi, {name}</span>
        <span>your balance</span>
        <span data-testid='balance'>$ {balance.toLocaleString('en')}</span>
        
      </span>
      <span className="notifications">
        <Link to="/notifications" data-testid='notifications'>
          <i className="k-icon-bell"/>
        </Link>
      </span>
    </div>
      
  );
}

export default Header;
