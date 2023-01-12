import React from "react";
import { Controls, Player } from "@lottiefiles/react-lottie-player";
import { Box, Stack, Typography } from "@mui/material";


const Loading = () => {
    return (
        <Stack
            alignItems={'center'}
            justifyContent={'center'}
            sx={{
                backgroundColor: 'white',
                height: '100vh',
                width: '100%',
                position: 'fixed',
                zIndex: 10
            }}>
            <Player
                autoplay
                loop
                src={'/images/loading.json'}
                style={{ height: '150px', width: '150px' }}
            >
            </Player>
            <Typography>Biraz garaşyň...</Typography>
        </Stack>
    )
}

export default Loading