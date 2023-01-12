import React, {useState, useEffect, useContext} from 'react';
import {Card, CardActionArea, CardContent, Grid, Stack, Typography} from "@mui/material";
import {colors, Fonts} from "../common/theme.mjs";
import {AppContext} from "../App";
import Spacer from "./Spacer";
import AppButton from "./Button";

const HomeServiceItem = (props) => {
    const {isMobile}=useContext(AppContext);
    return(
        <Card sx={{borderRadius:'15px',bgcolor:colors.solid}}>
            <CardActionArea>
                <CardContent>
                    <Typography sx={{width:'100%',textAlign:'center',fontFamily:Fonts.AppSemiBold,fontSize:'18px'}}>{props.title}</Typography>
                    <center>
                        <Stack alignItems={'center'} justifyContent={'center'} sx={{mt:3,backgroundColor:colors.transparent,width:'80%',height:isMobile?'130px':'180px',marginBottom:'-50px',borderRadius:'50%'}}>
                            <img src={props.icon} alt={'service'} style={{width:'40%'}}/>
                        </Stack>
                    </center>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

const HomeService = (props) => {
    const {isMobile} = useContext(AppContext);
    return (
        <Stack>
            <Typography sx={{fontFamily: Fonts.AppSemiBold, fontSize: isMobile?'20px':'30px', color: colors.black}}>
                Biziň hyzmatlarymyz
            </Typography>
            <Spacer count={2}/>
           <Grid container spacing={2}>
               <Grid item xs={6} sm={6} md={3}>
                   <HomeServiceItem title={'Hyzmat ady'} icon={'/images/service.svg'}/>
               </Grid>
               <Grid item xs={6} sm={6} md={3}>
                   <HomeServiceItem title={'Hyzmat ady'} icon={'/images/service.svg'}/>
               </Grid>
               <Grid item xs={6} sm={6} md={3}>
                   <HomeServiceItem title={'Hyzmat ady'} icon={'/images/service.svg'}/>
               </Grid>
               <Grid item xs={6} sm={6} md={3}>
                   <HomeServiceItem title={'Hyzmat ady'} icon={'/images/service.svg'}/>
               </Grid>
               <Grid item xs={6} sm={6} md={3}>
                   <HomeServiceItem title={'Hyzmat ady'} icon={'/images/service.svg'}/>
               </Grid>
               <Grid item xs={6} sm={6} md={3}>
                   <HomeServiceItem title={'Hyzmat ady'} icon={'/images/service.svg'}/>
               </Grid>
               <Grid item xs={6} sm={6} md={3}>
                   <HomeServiceItem title={'Hyzmat ady'} icon={'/images/service.svg'}/>
               </Grid>
               <Grid item xs={6} sm={6} md={3}>
                   <HomeServiceItem title={'Hyzmat ady'} icon={'/images/service.svg'}/>
               </Grid>
           </Grid>
            <Spacer count={2}/>
            <Stack direction={'row'} justifyContent={'center'}>
                <AppButton title={"Giňişleýin"} variant={"contained"}/>
            </Stack>
        </Stack>
    )
}

export default HomeService;