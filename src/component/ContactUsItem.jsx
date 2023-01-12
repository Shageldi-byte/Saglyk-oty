import React, { useContext } from "react";
import { Button, Grid, Stack, TextField, Typography } from "@mui/material";
import { AppContext } from "../App";
import { Fonts, colors } from "../common/theme.mjs";

const ContactUsItem = () => {
    const { isMobile } = useContext(AppContext);
    return (
        <div>
            <Grid container spacing={isMobile ? 4 : 0}>
                <Grid item xs={12} sm={12} md={6}>
                    <img src={'/gallery/gallery (1).jpg'} alt={'about'} style={{ width: isMobile ? '100%' : '80%', objectFit: 'cover', borderRadius: '22px', height: isMobile ? '200px' : '520px' }} />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Stack spacing={4} sx={{ p: 5, borderRadius: '22px', backgroundColor: 'white', boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)` }}>
                        <Typography sx={{ fontFamily: Fonts.AppSemiBold, fontSize: isMobile ? '18px' : '25px', color: colors.black }}>
                            Bize hat ugradyň
                        </Typography>
                        <TextField label={'Doly adyňyz...'} fullWidth sx={{ width: '100%' }} type={'text'} />
                        <TextField label={'Email...'} fullWidth sx={{ width: '100%' }} type={'email'} />
                        <TextField label={'Hatyňyzy giriziň...'} fullWidth sx={{ width: '100%' }} type={'text'} rows={4} multiline={true} />
                        <Button variant="contained" sx={{ color: 'white', fontFamily: Fonts.AppSemiBold, textTransform: 'none', fontSize: '18px' }}>
                            Ugrat
                        </Button>
                    </Stack>
                </Grid>
            </Grid>
        </div>
    )
}

export default ContactUsItem