import AppButton from "./Button";
import MedicineInfo from "./MedicineInfo";
import React, { useContext } from "react";
import {Card, Skeleton, Stack, Typography} from "@mui/material";
import { AppContext } from "../App";
import { Fonts, colors } from "../common/theme.mjs";
import CyrillicToLatin from 'cyrillic-to-latin';
import Image from "mui-image";

const MedicineItem = (props) => {
    const { isMobile,appLanguage } = useContext(AppContext);
    return (
        <Card sx={{ borderRadius: '22px' }}>
            <Image
                wrapperStyle={{width:'100%'}}
                showLoading={<Skeleton sx={{width:'100%',height: isMobile ? '120px' : '250px'}} variant={'rounded'}/>}
                src={props.item.image} alt={'medicine'} style={{ width: '100%', height: isMobile ? '120px' : '250px', borderRadius: '22px', objectFit: 'contain' }} />
            <Stack sx={{ p: 2 }} spacing={2} alignItems={'center'} justifyContent={'center'}>
                <Typography className={isMobile?'lines-2':'lines-3'} sx={{ fontFamily: Fonts.AppSemiBold, fontSize: isMobile ? '18px' : '22px', color: colors.black,height:isMobile?'60px':'60px',textAlign:'center',textTransform:'uppercase' }}>
                    {
                        appLanguage==='ru'?props.item.name_ru:CyrillicToLatin(props.item[`name_${appLanguage}`])
                    }
                </Typography>
                {
                    isMobile?null:
                        <Typography className={isMobile?'lines-2':'lines-3'} sx={{ fontFamily: Fonts.AppMedium, fontSize: isMobile ? '12px' : '14px', color: colors.black, width: isMobile ? '90%' : '70%', height:isMobile?'40px':'100px', textAlign: 'center' }}>
                            {props.item[`desc_${appLanguage}`]}
                        </Typography>
                }
                <MedicineInfo item={props.item}/>
            </Stack>
        </Card>
    )
}

export default MedicineItem