import AppButton from "./Button";
import React, { useContext, useEffect, useState } from "react";
import Spacer from "./Spacer";
import { Card, CardActionArea, CardContent, Grid, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../App";
import { services } from "../common/data.mjs";
import { Fonts, colors } from "../common/theme.mjs";

const HomeServiceItem = (props) => {
    const { isMobile } = useContext(AppContext);
    const { t } = useTranslation();
    return (
        <Card sx={{ borderRadius: '15px', bgcolor: colors.solid }}>
            <CardActionArea>
                <CardContent>
                    <Typography sx={{ width: '100%', textAlign: 'center', fontFamily: Fonts.AppSemiBold, fontSize: '18px', height: isMobile ? '60px' : '100px' }} className='lines-3'>{t(props.title)}</Typography>
                    <center>
                        <Stack alignItems={'center'} justifyContent={'center'} sx={{ mt: 3, backgroundColor: colors.transparent, width: '80%', height: isMobile ? '130px' : '180px', marginBottom: '-50px', borderRadius: '50%' }}>
                            <img src={props.icon} alt={'service'} style={{ width: '40%' }} />
                        </Stack>
                    </center>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

const HomeService = (props) => {
    const { isMobile } = useContext(AppContext);
    const { t } = useTranslation();
    const navigate = useNavigate();
    return (
        <Stack>
            <Typography sx={{ fontFamily: Fonts.AppSemiBold, fontSize: isMobile ? '20px' : '30px', color: colors.black }}>
                {t('our_services')}
            </Typography>
            <Spacer count={2} />
            <Grid container spacing={2}>
                {
                    services.map((item, i) => {
                        return (
                            <Grid item xs={6} sm={6} md={3} key={`service-${i}`}>
                                <HomeServiceItem title={item.title} icon={item.icon} />
                            </Grid>
                        )
                    })
                }
            </Grid>
            <Spacer count={2} />
            <Stack direction={'row'} justifyContent={'center'}>
                <AppButton title={"Giňişleýin"} onClick={() => navigate('service')} variant={"contained"} />
            </Stack>
        </Stack>
    )
}

export default HomeService;