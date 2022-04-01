import React from "react";
import Header from "../../components/Header/Header";
import PageContent from "../../components/PageContent/PageContent";

interface DashboardProps {
    title: string;
    content:React.ReactElement;
}

const Dashboard: Function = ({title,content}:DashboardProps) => {
    return (
        <>
        <Header/>
        <PageContent content={content} title={title}/>
        </>
    );
}

export default Dashboard;