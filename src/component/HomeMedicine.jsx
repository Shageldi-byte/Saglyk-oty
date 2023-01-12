import React, {useState, useEffect, useContext} from 'react';
import {Button, Card, CardContent, Grid, Stack, Typography} from "@mui/material";
import {colors, Fonts} from "../common/theme.mjs";
import AppButton from "./Button";
import {AppContext} from "../App";

const HomeMedicine = (props) => {
    const {isMobile} = useContext(AppContext);
    return (
        <Card sx={{bgcolor:colors.solid,borderRadius:'22px'}} elevation={0}>
            <CardContent>
                <Grid container alignItems={'center'}>
                    <Grid item xs={12} sm={12} md={6}>
                        <Stack alignItems={'center'} justifyContent={'center'} sx={{width:'100%'}}>
                            <img src={'/images/medicine.png'} alt={'medicine'} style={{width:'60%'}}/>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <Stack spacing={3} justifyContent={'center'}>
                            <Typography sx={{
                                fontFamily:Fonts.AppSemiBold,
                                fontSize: isMobile?'20px':'30px',
                                color:colors.black
                            }}>
                                Dermanlar barada
                            </Typography>
                            <Typography sx={{
                                fontFamily:Fonts.AppLight,
                                fontSize: isMobile?'12px':'16px',
                                color:colors.black,
                            }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                            </Typography>
                            <AppButton title={"Giňişleýin"} variant={'outlined'}/>
                        </Stack>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default HomeMedicine;