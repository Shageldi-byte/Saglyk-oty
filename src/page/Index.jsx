import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

const Index = (props) => {
    return (
        <div>
            <Navbar />
            <Container fixed sx={{ mt: 5 }}>
                <Outlet />
            </Container>
            <Footer />
        </div>
    )
}

export default Index;