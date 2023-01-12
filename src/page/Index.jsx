import React, {useState, useEffect} from 'react';
import Navbar from "../component/Navbar";
import {Container} from "@mui/material";
import Footer from "../component/Footer";
import {Outlet} from 'react-router-dom';

const Index = (props) => {
    return (
        <div>
            <Navbar/>
            <Container fixed>
                <Outlet/>
            </Container>
            <Footer/>
        </div>
    )
}

export default Index;