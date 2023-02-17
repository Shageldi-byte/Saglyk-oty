import Image from "mui-image";
import MuiAlert from "@mui/material/Alert";
import React, { useContext, useState } from "react";
import { LoadingButton } from "@mui/lab";
import { Button, Grid, Snackbar, Stack, TextField, Typography } from "@mui/material";
import { Blurhash } from "react-blurhash";
import { useTranslation } from "react-i18next";
import { AppContext } from "../App";
import { AxiosInstance } from "../common/AxiosInstance.mjs";
import { Fonts, colors } from "../common/theme.mjs";

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ContactUsItem = () => {
    const { isMobile } = useContext(AppContext);
    const { t } = useTranslation();
    const [loading, setLoading] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [snack, setSnack] = useState(t('sent'));
    const [snackType, setSnackType] = useState('success');



    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    function send() {
        if (name.trim() == '' || email.trim() == '' || message.trim() == '') {
            alert('Please enter full values');
        } else {
            setLoading(true);
            AxiosInstance.post('send-mail', {
                username: name,
                email: email,
                text: message
            }).then(response => {
                setLoading(false);
                setSnack(t('sent'));
                setSnackType('success');
                setName('');
                setEmail('');
                setMessage('');
                handleClick();
            }).catch(err => {
                setSnack(err.toString());
                setSnackType('error');
                handleClick();
                setLoading(false);
            })
        }
    }

    return (
        <div>
            <Grid container spacing={isMobile ? 4 : 0}>
                <Grid item xs={12} sm={12} md={6}>
                    <Image
                        showLoading={<Blurhash hash={'LaNKS3_N9FRi9YE0M{NGbtD%NGRj'} style={{ borderRadius: '12px', width: isMobile ? '100%' : '80%', height: isMobile ? '200px' : '520px' }} />}
                        wrapperStyle={{ width: '100%' }}
                        src={'/gallery/gallery (1).jpg'} alt={'about'} style={{ width: isMobile ? '100%' : '80%', objectFit: 'cover', borderRadius: '22px', height: isMobile ? '200px' : '520px' }} />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Stack spacing={4} sx={{ p: 5, borderRadius: '22px', backgroundColor: 'white', boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)` }}>
                        <Typography sx={{ fontFamily: Fonts.AppSemiBold, fontSize: isMobile ? '18px' : '25px', color: colors.black }}>
                            {t('send_paper')}
                        </Typography>
                        <TextField onChange={e => setName(e.target.value)} value={name} label={t('your_full_name')} fullWidth sx={{ width: '100%' }} type={'text'} />
                        <TextField onChange={e => setEmail(e.target.value)} value={email} label={t('your_email')} fullWidth sx={{ width: '100%' }} type={'email'} />
                        <TextField onChange={e => setMessage(e.target.value)} value={message} label={t('your_message')} fullWidth sx={{ width: '100%' }} type={'text'} rows={4} multiline={true} />
                        <LoadingButton loading={loading} onClick={() => send()} variant="contained" sx={{ color: 'white', fontFamily: Fonts.AppSemiBold, textTransform: 'none', fontSize: '18px' }}>
                            {t('send')}
                        </LoadingButton>
                    </Stack>
                </Grid>
            </Grid>

            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={snackType} sx={{ width: '100%' }}>
                    {snack}
                </Alert>
            </Snackbar>
        </div>
    )
}

export default ContactUsItem