import React, { useContext } from "react";
import { Grid, Stack, Typography } from "@mui/material";
import { AppContext } from "../App.js";
import { Fonts, colors } from "../common/theme.mjs";

const ServiceItem = (props) => {
    const { isMobile } = useContext(AppContext);
    return (
        <div key={props.key}>
            <Grid container spacing={0} alignItems={'center'} sx={{ bgcolor: colors.solid, borderRadius: '22px', cursor: 'pointer' }}>
                <Grid item xs={12} sm={12} md={3}>
                    <Stack sx={{ width: '100%', height: 'auto', pt: 10, pb: 10, pl: 5, pr: 5, bgcolor: colors.transparent, borderRadius: '22px' }} alignItems={'center'} justifyContent={'center'}>
                        <img src={'/images/service.svg'} alt={'service'} style={{ width: isMobile ? '30%' : '50%' }} />
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={12} md={9}>
                    <Stack spacing={1} sx={{ p: 3 }}>
                        <Typography sx={{ fontFamily: Fonts.AppSemiBold, fontSize: isMobile ? '16px' : '22px', color: colors.black }}>
                            Hyzmat ady
                        </Typography>
                        <Typography sx={{ fontFamily: Fonts.AppRegular, fontSize: isMobile ? '12px' : '14px', color: colors.black }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Typography>
                    </Stack>
                </Grid>
            </Grid>
        </div>
    )
}

export default ServiceItem