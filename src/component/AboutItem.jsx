import React, { useContext } from "react";
import Spacer from "./Spacer";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { AppContext } from "../App";
import { Fonts, colors } from "../common/theme.mjs";

const AboutItem = () => {
    const { isMobile } = useContext(AppContext);
    return (
        <div>
            <Grid container alignItems={'center'} direction={isMobile ? 'column-reverse' : 'row'}>
                <Grid item xs={12} sm={12} md={7}>
                    <Stack spacing={2}>
                        <Spacer count={isMobile ? 4 : 0} />
                        <Typography sx={{ fontFamily: Fonts.AppSemiBold, fontSize: isMobile ? '20px' : '30px', color: colors.black }}>
                            Dermanhana barada
                        </Typography>
                        <Typography sx={{ fontFamily: Fonts.AppMedium, fontSize: isMobile ? '12px' : '16px', color: colors.black }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={12} md={5}>
                    <Stack alignItems={'center'} justifyContent={'center'} sx={{ width: '100%' }}>
                        <div style={{ width: '250px', height: '300px', zIndex: -1, marginLeft: '100px', transform: 'rotate(13deg)', borderRadius: '22px', backgroundColor: colors.transparent, position: 'absolute' }}></div>
                        <img src={'/gallery/gallery (2).jpg'} alt={'about'} style={{ width: '60%', height: '300px', borderRadius: '22px', objectFit: 'cover' }} />
                    </Stack>
                </Grid>
            </Grid>
        </div>
    )
}

export default AboutItem