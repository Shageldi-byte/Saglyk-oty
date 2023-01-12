import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import AppButton from "./Button.jsx";
import OwlCarousel from "react-owl-carousel";
import React, { useContext } from "react";
import Spacer from "./Spacer";
import { Card, CardActionArea, CardContent, Stack } from "@mui/material";
import { Typography } from "@mui/material";
import { AppContext } from "../App.js";
import { Fonts, colors } from "../common/theme.mjs";

const items = [
    {
        title_tm: "BOÝY ÖSDÜRMEGIŇ USULLARY BARADA PEÝDALY MASLAHATLAR",
        title_en: "BOÝY ÖSDÜRMEGIŇ USULLARY BARADA PEÝDALY MASLAHATLAR",
        title_ru: "BOÝY ÖSDÜRMEGIŇ USULLARY BARADA PEÝDALY MASLAHATLAR",
        desc_tm: "BOÝY ÖSDÜRMEGIŇ USULLARY BARADA PEÝDALY MASLAHATLAR",
        desc_en: "BOÝY ÖSDÜRMEGIŇ USULLARY BARADA PEÝDALY MASLAHATLAR",
        desc_ru: "BOÝY ÖSDÜRMEGIŇ USULLARY BARADA PEÝDALY MASLAHATLAR",
        img: "boy.png"
    }
]

const InfoItem = (props) => {
    return (
        <Stack alignItems={'center'} justifyContent={'center'}>
            <Stack alignItems={'center'} justifyContent={'center'} sx={{
                backgroundColor: colors.primary,
                borderRadius: '50%',
                width: '130px',
                padding: '5px',
                zIndex: 1,
            }}>
                <img src={`images/${props.item.img}`} alt="info"
                    style={{
                        width: '120px',
                        height: '120px',
                    }} />
            </Stack>
            <Card sx={{ height: '250px', marginTop: '-50px', zIndex: -1, position: 'relative', borderRadius: '22px', bgcolor: colors.solid }} key={props.key} elevation={0}>
                <CardActionArea>
                    <CardContent>
                        <Stack alignItems={'center'} justifyContent={'center'} spacing={2} sx={{ height: '250px' }}>
                            <Typography sx={{ textAlign: 'center', fontFamily: Fonts.AppSemiBold, fontSize: '16px' }}>
                                {props.item.title_tm}
                            </Typography>
                            <center>
                                <AppButton title={"Giňişleýin"} variant={'outlined'} />
                            </center>
                        </Stack>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Stack >
    )
}

const InfoSection = () => {
    const { isMobile } = useContext(AppContext);
    return (
        <Stack>
            <Typography sx={{ fontFamily: Fonts.AppSemiBold, fontSize: isMobile ? '20px' : '30px', color: colors.black }}>
                Saglyk barada peýdaly maslahatlar
            </Typography>
            <Spacer count={2} />
            <OwlCarousel className='owl-theme' loop autoplay={true} margin={10} dots={true} items={isMobile ? 1 : 3}>
                {
                    items.map((item, index) => {
                        return (
                            <InfoItem item={item} className={'item'} key={`info-${index}`} />
                        )
                    })
                }
            </OwlCarousel>
        </Stack>
    )
}

export default InfoSection