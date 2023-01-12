import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { Fonts, colors } from "../common/theme.mjs";

export const active = {
    color: 'primary.main',
    fontSize: '18px',
    fontFamily: Fonts.AppBold,
    textTransform: 'none'
}

export const passive = {
    color: colors.black,
    fontSize: '18px',
    fontFamily: Fonts.AppMedium,
    textTransform: 'none'
}

const NavbarButton = (props) => {
    const location = useLocation();
    const [isActive, setActive] = useState(true);

    useEffect(() => {
        setActive(location.pathname === props.link);
    }, [location]);
    const navigator = useNavigate();
    return (
        <Button sx={{ ...isActive ? active : passive }} onClick={() => navigator(props.link)}>
            {props.label}
        </Button>
    )
}

export default NavbarButton;