import AppButton from "./Button";
import React, { useContext } from "react";
import { Card, Stack, Typography } from "@mui/material";
import { AppContext } from "../App";
import { Fonts, colors } from "../common/theme.mjs";

const MedicineItem = (props) => {
    const { isMobile } = useContext(AppContext);
    return (
        <Card sx={{ borderRadius: '22px' }}>
            <img src={props.item.image} alt={'medicine'} style={{ width: '100%', height: isMobile ? '120px' : '200px', borderRadius: '22px', objectFit: 'cover' }} />
            <Stack sx={{ p: 2 }} spacing={2} alignItems={'center'} justifyContent={'center'}>
                <Typography sx={{ fontFamily: Fonts.AppSemiBold, fontSize: isMobile ? '18px' : '22px', color: colors.black }}>
                    {props.item.name_tm}
                </Typography>
                <Typography sx={{ fontFamily: Fonts.AppMedium, fontSize: isMobile ? '12px' : '14px', color: colors.black, width: isMobile ? '90%' : '70%', textAlign: 'center' }}>
                    {props.item.desc_tm}
                </Typography>
                <AppButton title={"Giňişleýin"} variant={'outlined'} />
            </Stack>
        </Card>
    )
}

export default MedicineItem