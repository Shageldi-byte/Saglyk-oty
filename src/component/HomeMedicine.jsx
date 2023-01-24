import AppButton from "./Button";
import React, { useContext, useEffect, useState } from "react";
import { Button, Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../App";
import { Fonts, colors } from "../common/theme.mjs";

const HomeMedicine = (props) => {
    const { isMobile } = useContext(AppContext);
    const { t } = useTranslation();
    const navigate = useNavigate();
    return (
        <Card sx={{ bgcolor: colors.solid, borderRadius: '22px' }} elevation={0}>
            <CardContent>
                <Grid container alignItems={'center'}>
                    <Grid item xs={12} sm={12} md={6}>
                        <Stack alignItems={'center'} justifyContent={'center'} sx={{ width: '100%' }}>
                            <img src={'/images/medicine.png'} alt={'medicine'} style={{ width: '60%' }} />
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <Stack spacing={3} justifyContent={'center'}>
                            <Typography sx={{
                                fontFamily: Fonts.AppSemiBold,
                                fontSize: isMobile ? '20px' : '30px',
                                color: colors.black
                            }}>
                                {t('about_medicine')}
                            </Typography>
                            <Typography sx={{
                                fontFamily: Fonts.AppLight,
                                fontSize: isMobile ? '12px' : '16px',
                                color: colors.black,
                            }}>
                                {t('about_medicine_desc')}
                            </Typography>
                            <AppButton onClick={() => navigate('medicine')} title={"Giňişleýin"} variant={'outlined'} />
                        </Stack>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default HomeMedicine;