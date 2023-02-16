import React, { useContext } from "react";
import { Controls, Player } from "@lottiefiles/react-lottie-player";
import { Grid, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { AppContext } from "../App.js";
import { Fonts, colors } from "../common/theme.mjs";

const ServiceItem = (props) => {
    const { isMobile } = useContext(AppContext);
    const { t } = useTranslation();
    return (
        <div key={props.key}>
            <Grid container spacing={0} alignItems={'center'} sx={{ bgcolor: colors.solid, borderRadius: '22px', cursor: 'pointer' }}>
                <Grid item xs={12} sm={12} md={3}>
                    <Stack sx={{ width: '100%', height: 'auto', pt: 10, pb: 10, pl: 5, pr: 5, bgcolor: colors.transparent, borderRadius: '22px' }} alignItems={'center'} justifyContent={'center'}>
                        <img src={props.item.icon} alt={'service'} style={{ width: isMobile ? '50%' : '70%' }} />
                        {/* <Player
                            autoplay
                            loop={true}
                            src={'/images/drug.json'}
                            style={{ width: isMobile ? '100%' : '100%', height: isMobile ? '50px' : '100px' }}
                        >
                        </Player> */}
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={12} md={9}>
                    <Stack spacing={1} sx={{ p: 3 }}>
                        <Typography sx={{ fontFamily: Fonts.AppSemiBold, fontSize: isMobile ? '16px' : '22px', color: colors.black }}>
                            {t(props.item.title)}
                        </Typography>
                        <Typography sx={{ fontFamily: Fonts.AppRegular, fontSize: isMobile ? '12px' : '14px', color: colors.black }}>
                            {t(props.item.desc)}
                        </Typography>
                    </Stack>
                </Grid>
            </Grid>
        </div>
    )
}

export default ServiceItem