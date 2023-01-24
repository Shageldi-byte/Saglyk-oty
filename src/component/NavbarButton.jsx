import React, { useContext, useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../App.js";
import { Fonts, colors } from "../common/theme.mjs";
import {useTranslation} from "react-i18next";

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
    const { setLoading } = useContext(AppContext);

    const {t} = useTranslation();

    useEffect(() => {
        setActive(location.pathname === props.link);
        window.scrollTo(0, 0);
    }, [location]);
    const navigator = useNavigate();
    return (
        <Button sx={{ ...isActive ? active : passive }} onClick={() => navigator(props.link)}>
            {t(props.label)}
        </Button>
    )
}

export default NavbarButton;