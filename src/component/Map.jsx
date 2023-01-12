import React, { useContext } from "react";
import Spacer from "./Spacer.jsx";
import { Stack, Typography } from "@mui/material";
import { AppContext } from "../App.js";
import { Fonts } from "../common/theme.mjs";
import { ItemsContainer, SocialMediaContainer } from "./Footer";

const Map = () => {
    const { isMobile } = useContext(AppContext);
    return (
        <div>
            <Stack
                justifyContent={'space-between'}
                sx={{ bgcolor: 'primary.main', position: isMobile ? 'relative' : 'absolute', height: '450px', p: 3, borderRadius: '22px' }}>
                <Typography sx={{ color: 'white', fontFamily: Fonts.AppSemiBold, fontSize: '25px', mt: 3 }}>Kontakt</Typography>
                <ItemsContainer />
                <SocialMediaContainer isOut={true} />
            </Stack>
            <Spacer count={isMobile ? 3 : 0} />
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2712.2624270994074!2d58.39598956154583!3d37.929015187770005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f6ffdc1766226a9%3A0xdf276e532b5501c!2sGREESHOP!5e0!3m2!1sen!2s!4v1673379976901!5m2!1sen!2s"
                title='Map'
                style={{ border: 0, width: '100%', borderRadius: '22px', height: '450px' }}
                allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}

export default Map