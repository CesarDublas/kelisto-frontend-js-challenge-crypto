import { Crypto } from "./Crypto";
import { useAppSelector } from '../../../../app/hooks';

import './CryptoList.scss';
import { selectList } from "./cryptoSlice";

const CryptoList: Function = () => {
  const cryptos: Crypto[] = useAppSelector(selectList);

  return (
    <div className="CryptoList">
      {cryptos.map(crypto =>
        <div className="crypto" key={crypto.id}>
          <span className="logo"></span>
          <div className="data">
            <div className="top">
              <p>{crypto.name}</p>
              <p className="value">{crypto.stock.toLocaleString('en')}</p>
            </div>
            <div className="bottom">
              <p>{crypto.sku}</p>
              <p className={crypto.variant > 0 ? 'green' : 'red'}>{crypto.variant}</p>
            </div>
          </div>
          
        </div>
        
      )}
    </div>
      
  );
}

export default CryptoList;
