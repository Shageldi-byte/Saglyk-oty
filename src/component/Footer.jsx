import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import React, { useContext, useEffect, useState } from "react";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import Spacer from "./Spacer";
import { Box, Button, Container, Divider, Grid, IconButton, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { AppContext } from "../App";
import { contact } from "../common/data.mjs";
import { Fonts, colors } from "../common/theme.mjs";

export const FooterItem = (props) => {
    const { isMobile } = useContext(AppContext);
    return (
        <Stack direction={'row'} spacing={2} alignItems={'center'} sx={{ cursor: 'pointer' }}>
            {/*<IconButton>*/}
            {props.icon}
            {/*</IconButton>*/}
            <Stack>
                <Typography sx={{ color: 'white', fontSize: isMobile ? '14px' : '18px', fontFamily: Fonts.AppSemiBold }}>{props.title}</Typography>
                <Typography sx={{ color: 'white', fontSize: isMobile ? '12px' : '14px', fontFamily: Fonts.AppMedium, width: '50%' }}>{props.desc}</Typography>
            </Stack>
        </Stack>
    )
}

const FooterButton = (props) => {
    return (
        <Typography sx={{
            fontSize: '16px',
            fontFamily: Fonts.AppRegular,
            textTransform: 'none',
            color: colors.white,
            cursor: 'pointer'
        }}>
            {props.title}
        </Typography>
    )
}

export const ItemsContainer = () => {
    const { isMobile } = useContext(AppContext);
    const { t } = useTranslation();
    return (
        <Stack spacing={3} sx={{ mt: isMobile ? 3 : 0 }}>
            <FooterItem icon={<PhoneInTalkIcon sx={{ color: 'white', fontSize: '30px' }} />} title={t("phone")} desc={contact.phone.join('\n')} />
            <FooterItem icon={<MailOutlinedIcon sx={{ color: 'white', fontSize: '30px' }} />} title={t("email")} desc={contact.email} />
            <FooterItem icon={<RoomOutlinedIcon sx={{ color: 'white', fontSize: '30px' }} />} title={t("address")} desc={t(contact.address)} />

        </Stack>
    )
}

export const SocialMediaContainer = (props) => {
    const { isMobile } = useContext(AppContext);
    return (
        <Stack direction={'row'} justifyContent={isMobile ? 'center' : props.isOut ? 'center' : 'flex-end'}>
            <IconButton size={'small'} onClick={()=>{
                window.location.href=contact.instagram;
            }}>
                <img src={'/images/instagram.svg'} alt={'instagram'} />
            </IconButton>
            <IconButton size={'small'} onClick={()=>{
                window.location.href=`${contact.icq}`;
            }}>
                <img src={'/images/icq.svg'} alt={'youtube'} style={{width:'45px',height:'45px'}}/>
            </IconButton>
            <IconButton size={'small'} onClick={()=>{
                window.location.href=`tel:${contact.imo}`;
            }}>
                <img src={'/images/imo.svg'} alt={'tiktok'} style={{width:'45px',height:'45px'}}/>
            </IconButton>
        </Stack>
    )
}

const Footer = (props) => {
    const { isMobile } = useContext(AppContext);
    const { t } = useTranslation();
    return (
        <Box sx={{ bgcolor: colors.black, pt: 4, pb: 4 }}>
            <Container fixed>
                <Grid container>
                    <Grid item xs={12} sm={12} md={4}>
                        <img src={'/images/WhiteLogo.svg'} alt={'white-logo'} style={{ width: isMobile ? '120px' : '200px' }} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={5}>
                        <ItemsContainer />
                    </Grid>
                    <Grid item xs={12} sm={12} md={3}>
                        {
                            isMobile ? null :
                                <Stack spacing={3} sx={{ mt: isMobile ? 3 : 0 }}>
                                    <FooterButton title={t("home_page")} />
                                    <FooterButton title={t("services")} />
                                    <FooterButton title={t("about_us")} />
                                    <FooterButton title={t("contact_us")} />
                                    <FooterButton title={t("medicine")} />
                                </Stack>
                        }
                    </Grid>
                </Grid>
            </Container>
            <Spacer count={2} />
            <Divider color={'white'} />
            <Spacer count={1} />
            <Container>
                <Grid container spacing={3} alignItems={'center'} justifyContent={'space-between'}>
                    <Grid item xs={12} sm={12} md={8}>
                        <Typography sx={{ color: 'white', fontFamily: Fonts.AppLight, fontSize: '14px' }}>© {new Date().getFullYear()-1} - {new Date().getFullYear()} {t('all_rights')}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <SocialMediaContainer />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Footer;