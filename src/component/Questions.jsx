import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import AppButton from "./Button";
import OwlCarousel from "react-owl-carousel";
import React, { useContext, useEffect, useState } from "react";
import Spacer from "./Spacer";
import { Card, CardActionArea, CardContent, Grid, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { AppContext } from "../App";
import { Fonts, colors } from "../common/theme.mjs";

const items = [
    {
        title: "question-1",
        answer: "answer-1",
    },
    {
        title: "question-2",
        answer: "answer-2",
    },
];

const QuestionItem = (props) => {
    const { t } = useTranslation();
    return (
        <Card sx={{ height: '250px', borderRadius: '22px' }} key={props.key} elevation={0} onClick={() => { alert(t(props.item.answer)) }}>
            <CardActionArea>
                <CardContent>
                    <Stack alignItems={'center'} justifyContent={'center'} spacing={2} sx={{ height: '250px' }}>
                        <Typography sx={{ textAlign: 'center', fontFamily: Fonts.AppSemiBold, fontSize: '20px' }}>
                            {t(props.item.title)}
                        </Typography>
                        <center>
                            {/* <AppButton title={"Jogabyny gör"} variant={'contained'} /> */}
                        </center>
                    </Stack>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

const Questions = (props) => {
    const { isMobile } = useContext(AppContext);
    const { t } = useTranslation();
    return (
        <Card sx={{ bgcolor: colors.solid, borderRadius: '22px' }} elevation={0}>
            <CardContent>
                <Spacer count={2} />
                <Grid container alignItems={'center'} spacing={2}>
                    <Grid item xs={12} sm={12} md={6}>
                        <Stack alignItems={isMobile ? 'center' : 'flex-start'} justifyContent={'center'} sx={{ width: '100%' }}>
                            <img src={'/images/question.svg'} alt={'medicine'} style={{ width: '70%' }} />
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <Stack>
                            <Typography sx={{
                                fontFamily: Fonts.AppBold,
                                fontSize: isMobile ? '20px' : '30px',
                                color: colors.black
                            }}>
                                {t('faq')}
                            </Typography>
                            <Spacer count={2} />
                            <OwlCarousel className='owl-theme' loop margin={10} dots={true} items={isMobile ? 1 : 2} autoplay>
                                {
                                    items.map((item, index) => {
                                        return (
                                            <QuestionItem item={item} className={'item'} key={`slider-${index}`} />
                                        )
                                    })
                                }
                            </OwlCarousel>
                        </Stack>
                    </Grid>
                </Grid>
                <Spacer count={2} />
            </CardContent>
        </Card>
    )
}

export default Questions;