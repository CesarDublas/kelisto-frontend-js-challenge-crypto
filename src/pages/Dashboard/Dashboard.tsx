import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import PageContent from "../../components/PageContent/PageContent";

interface DashboardProps {
    title: string;
    content:React.ReactElement;
}

const Dashboard: Function = ({title,content}:DashboardProps) => {
    return (
        <>
        <Header />
        <PageContent content={content}/>
        <Footer/>
        </>
    );
}

export default Dashboard;