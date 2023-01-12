import React, {useState, useEffect, useContext} from 'react';
import {colors, Fonts} from "../common/theme.mjs";
import {Card, CardActionArea, CardContent, Grid, Stack, Typography} from "@mui/material";
import {AppContext} from "../App";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import AppButton from "./Button";
import Spacer from "./Spacer";

const items = [
    {
        title_tm:"Daşary ýurtdan nädip derman getirdip bolýar?",
        title_en:"Daşary ýurtdan nädip derman getirdip bolýar?",
        title_ru:"Daşary ýurtdan nädip derman getirdip bolýar?",
        answer_tm:"Daşary ýurtdan nädip derman getirdip bolýar?",
        answer_en:"Daşary ýurtdan nädip derman getirdip bolýar?",
        answer_ru:"Daşary ýurtdan nädip derman getirdip bolýar?"
    },
    {
        title_tm:"Daşary ýurtdan nädip derman getirdip bolýar?",
        title_en:"Daşary ýurtdan nädip derman getirdip bolýar?",
        title_ru:"Daşary ýurtdan nädip derman getirdip bolýar?",
        answer_tm:"Daşary ýurtdan nädip derman getirdip bolýar?",
        answer_en:"Daşary ýurtdan nädip derman getirdip bolýar?",
        answer_ru:"Daşary ýurtdan nädip derman getirdip bolýar?"
    },
    {
        title_tm:"Daşary ýurtdan nädip derman getirdip bolýar?",
        title_en:"Daşary ýurtdan nädip derman getirdip bolýar?",
        title_ru:"Daşary ýurtdan nädip derman getirdip bolýar?",
        answer_tm:"Daşary ýurtdan nädip derman getirdip bolýar?",
        answer_en:"Daşary ýurtdan nädip derman getirdip bolýar?",
        answer_ru:"Daşary ýurtdan nädip derman getirdip bolýar?"
    },
    {
        title_tm:"Daşary ýurtdan nädip derman getirdip bolýar?",
        title_en:"Daşary ýurtdan nädip derman getirdip bolýar?",
        title_ru:"Daşary ýurtdan nädip derman getirdip bolýar?",
        answer_tm:"Daşary ýurtdan nädip derman getirdip bolýar?",
        answer_en:"Daşary ýurtdan nädip derman getirdip bolýar?",
        answer_ru:"Daşary ýurtdan nädip derman getirdip bolýar?"
    }
];

const QuestionItem = (props) => {
    return(
        <Card sx={{height:'250px',borderRadius:'22px'}} key={props.key} elevation={0}>
            <CardActionArea>
                <CardContent>
                    <Stack alignItems={'center'} justifyContent={'center'} spacing={2} sx={{height:'250px'}}>
                        <Typography sx={{textAlign:'center',fontFamily:Fonts.AppSemiBold,fontSize:'20px'}}>
                            {props.item.title_tm}
                        </Typography>
                        <center>
                            <AppButton title={"Jogabyny gör"} variant={'contained'}/>
                        </center>
                    </Stack>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

const Questions = (props) => {
    const {isMobile} = useContext(AppContext);
    return (
        <Card sx={{bgcolor:colors.solid,borderRadius:'22px'}} elevation={0}>
            <CardContent>
                <Spacer count={2}/>
                <Grid container alignItems={'center'} spacing={2}>
                    <Grid item xs={12} sm={12} md={6}>
                        <Stack alignItems={isMobile?'center':'flex-start'} justifyContent={'center'} sx={{width:'100%'}}>
                            <img src={'/images/question.svg'} alt={'medicine'} style={{width:'70%'}}/>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <Stack>
                            <Typography sx={{
                                fontFamily:Fonts.AppBold,
                                fontSize: isMobile?'20px':'30px',
                                color:colors.black
                            }}>
                                Köp soralýan soraglar
                            </Typography>
                            <Spacer count={2}/>
                            <OwlCarousel className='owl-theme' loop margin={10} dots={true} items={isMobile?1:2}>
                                {
                                    items.map((item,index)=>{
                                        return(
                                            <QuestionItem item={item} className={'item'} key={`slider-${index}`}/>
                                        )
                                    })
                                }
                            </OwlCarousel>
                        </Stack>
                    </Grid>
                </Grid>
                <Spacer count={2}/>
            </CardContent>
        </Card>
    )
}

export default Questions;