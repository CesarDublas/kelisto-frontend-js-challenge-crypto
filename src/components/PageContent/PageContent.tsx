import React from "react";

import './PageContent.scss';

interface PageContentProps {
content:React.ReactElement
}

const PageContent: Function = ({content}: PageContentProps) => {

  return (
    <div className="PageContent">
    {content}
    </div>
      
  );
}

export default PageContent;
