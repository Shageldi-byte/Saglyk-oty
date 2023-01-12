import React, { useContext } from "react";
import { Stack, Typography } from "@mui/material";
import { AppContext } from "../App.js";
import { Fonts, colors } from "../common/theme.mjs";

const PageTitle = (props) => {
    const { isMobile } = useContext(AppContext);
    return (
        <Stack alignItems={'center'} justifyContent={'center'} spacing={1}>
            <Typography sx={{ fontFamily: Fonts.AppSemiBold, fontSize: isMobile ? '20px' : '30px', color: colors.black }}>
                {props.title}
            </Typography>
            <Typography sx={{ fontFamily: Fonts.AppMedium, fontSize: isMobile ? '12px' : '16px', color: colors.black, width: isMobile ? '90%' : '50%', textAlign: 'center' }}>
                {props.desc}
            </Typography>
        </Stack>
    )
}

export default PageTitle