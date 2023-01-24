import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CallIcon from "@mui/icons-material/Call";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import MobileDrawer from "./MobileDrawer";
import NavbarButton, { active } from "./NavbarButton";
import React, { useContext, useEffect, useState } from "react";
import { Button, Container, IconButton, Paper, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { AppContext } from "../App";
import { contact } from "../common/data.mjs";
import { Fonts, colors } from "../common/theme.mjs";

export const NavItems = (props) => {
    const { isMobile } = useContext(AppContext);
    return (
        <Stack direction={isMobile ? 'column' : 'row'} alignItems={'center'} justifyContent={'space-between'} spacing={2}>
            <NavbarButton link={'/'} label={'home_page'} />
            <NavbarButton link={'/service'} label={'services'} />
            <NavbarButton link={'/about'} label={'about_us'} />
            <NavbarButton link={'/contact'} label={'contact_us'} />
            <NavbarButton link={'/medicine'} label={'medicine'} />
        </Stack>
    )
}

const Navbar = (props) => {
    const { isMobile } = useContext(AppContext);
    const { t } = useTranslation();
    return (
        <Paper elevation={2} sx={{
            borderRadius: 0,
            boxShadow: `0px 4px 3px -3px rgba(0, 0, 0, 0.25)`,
            position: 'fixed',
            width: '100%', top: 0, zIndex: 9,
            backdropFilter: 'blur(20px)',
            backgroundColor: 'rgba(255, 255, 255, 0.4)'
        }}>
            <Container fixed>
                <Stack direction={'row'} alignItems={'center'} justifyContent={'flex-end'} spacing={2} sx={{ pt: 2 }}>
                    <Stack direction={'row'} alignItems={'center'}>
                        <AccessTimeIcon color={'primary'} sx={{ fontSize: '18px' }} />
                        <Typography sx={{ fontFamily: Fonts.AppMedium, fontSize: isMobile ? '10px' : '14px', color: colors.black }}>
                            {t('work_time')}
                        </Typography>
                    </Stack>
                    <Stack direction={'row'} alignItems={'center'}>
                        <CallIcon color={'primary'} sx={{ fontSize: '18px' }} />
                        <Typography sx={{ fontFamily: Fonts.AppMedium, fontSize: isMobile ? '10px' : '14px', color: colors.black }}>
                            {contact.phone[0]}
                        </Typography>
                    </Stack>
                </Stack>
                <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} spacing={2} sx={{ pt: 2, pb: 2 }}>
                    <img src={'/images/my_logo.png'} alt={'logo'} style={{ height: isMobile ? '60px' : '80px' }} />
                    {
                        isMobile ? <div></div> : <NavItems />
                    }
                    <Button startIcon={<LanguageIcon />} sx={{ color: 'primary.main', fontFamily: Fonts.AppBold, fontSize: '16px' }} variant={'outlined'}>
                        TM
                    </Button>

                    {
                        isMobile ? <MobileDrawer /> : null
                    }


                </Stack>
            </Container>
        </Paper>
    )
}

export default Navbar;