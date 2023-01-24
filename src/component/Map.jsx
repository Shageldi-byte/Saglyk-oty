import React, { useContext } from "react";
import Spacer from "./Spacer.jsx";
import { Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { AppContext } from "../App.js";
import { Fonts } from "../common/theme.mjs";
import { ItemsContainer, SocialMediaContainer } from "./Footer";

const Map = () => {
    const { isMobile } = useContext(AppContext);
    const { t } = useTranslation();
    return (
        <div>
            <Stack
                justifyContent={'space-between'}
                sx={{ bgcolor: 'primary.main', position: isMobile ? 'relative' : 'absolute', height: '450px', p: 3, borderRadius: '22px' }}>
                <Typography sx={{ color: 'white', fontFamily: Fonts.AppSemiBold, fontSize: '25px', mt: 3 }}>{t('contact')}</Typography>
                <ItemsContainer />
                <SocialMediaContainer isOut={true} />
            </Stack>
            <Spacer count={isMobile ? 3 : 0} />

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d696.6409976094026!2d58.35792333064521!3d37.917370800157016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f70031d539f37e3%3A0x4307575fc669e079!2sSaglyk%20oty!5e1!3m2!1sen!2sus!4v1674576732872!5m2!1sen!2sus"
                title='Map'
                style={{ border: 0, width: '100%', borderRadius: '22px', height: '450px' }}
                allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}

export default Map