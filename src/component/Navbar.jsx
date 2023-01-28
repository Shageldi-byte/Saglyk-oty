import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CallIcon from "@mui/icons-material/Call";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import MobileDrawer from "./MobileDrawer";
import NavbarButton, { active } from "./NavbarButton";
import React, { useContext, useEffect, useState } from "react";
import {Button, Container, IconButton, Menu, MenuItem, Paper, Skeleton, Stack, Typography} from "@mui/material";
import { useTranslation } from "react-i18next";
import { AppContext } from "../App";
import { contact } from "../common/data.mjs";
import { Fonts, colors } from "../common/theme.mjs";
import Image from "mui-image";

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
    const { isMobile, appLanguage,changeLanguage } = useContext(AppContext);
    const { t } = useTranslation();

    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);


    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    function changeLan(str){
        handleClose()
        changeLanguage(str);
    }


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
                {
                    offset>50?null:
                        <Stack direction={'row'} alignItems={'center'} justifyContent={'flex-end'} spacing={2} sx={{ pt: 2 }}>
                            <Stack direction={'row'} alignItems={'center'}>
                                <AccessTimeIcon color={'primary'} sx={{ fontSize: '18px' }} />
                                <Typography sx={{ fontFamily: Fonts.AppMedium, fontSize: isMobile ? '14px' : '14px', color: colors.black }}>
                                    {t('work_time')}
                                </Typography>
                            </Stack>
                            <Stack direction={'row'} alignItems={'center'}>
                                <CallIcon color={'primary'} sx={{ fontSize: '18px' }} />
                                <Typography sx={{ fontFamily: Fonts.AppMedium, fontSize: isMobile ? '14px' : '14px', color: colors.black }}>
                                    {contact.phone[0]}
                                </Typography>
                            </Stack>
                        </Stack>
                }
                <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} spacing={2} sx={{ pt: 2, pb: 2 }}>
                    <Image
                        showLoading={<Skeleton sx={{width:'150px',height: '60px'}} variant={'rounded'}/>}
                        wrapperStyle={{width:'240px',marginLeft:'-30px'}}
                        src={'/images/my_logo.png'} alt={'logo'} style={{ height: isMobile ? '70px' : '80px' }} fit={'contain'} />
                    {
                        isMobile ? <div></div> : <NavItems />
                    }
                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        startIcon={<LanguageIcon />} sx={{ color: 'primary.main', fontFamily: Fonts.AppBold, fontSize: '16px' }} variant={'outlined'}>
                        {
                            appLanguage
                        }
                    </Button>

                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        disableScrollLock={true}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={()=>changeLan('ru')} sx={{textTransform:'uppercase'}}>русский</MenuItem>
                        <MenuItem onClick={()=>changeLan('tm')} sx={{textTransform:'uppercase'}}>Türkmençe</MenuItem>
                        <MenuItem onClick={()=>changeLan('en')} sx={{textTransform:'uppercase'}}>English</MenuItem>
                    </Menu>

                    {
                        isMobile ? <MobileDrawer /> : null
                    }


                </Stack>
            </Container>
        </Paper>
    )
}

export default Navbar;