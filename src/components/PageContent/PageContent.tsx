import React, { ChangeEvent, ChangeEventHandler } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Footer from "../Footer/Footer";
import CryptoList from "./components/CryptoList/CryptoList";
import { changeName, selectName } from "./components/CryptoList/cryptoSlice";

import './PageContent.scss';

interface PageContentProps {
  title:string;
  content:React.ReactElement;
}

const PageContent: Function = ({content, title}: PageContentProps) => {
  
  const name = useAppSelector(selectName);
  const dispatch = useAppDispatch();

  let updateName = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeName(event.currentTarget.value));
  };

  return (
    <div className="PageContent">
      <div className="Content">
        <h1>{title}</h1>
        {title === "recent" ?
        <>
          <CryptoList/>
          <Link to='/movements'>
            <button>Show all transactions</button>
          </Link>
        </>
        : 
        title === "settings" ?
          <>
            <label>
              Name:
              <input type="text" name="name" value={name} onChange={(e) => updateName(e)}/>
            </label>
          </>
        :
          content
        }
      </div>
      <Footer/>
    </div>
      
  );
}

export default PageContent;
