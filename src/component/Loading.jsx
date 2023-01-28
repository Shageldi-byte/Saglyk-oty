import React from "react";
import { Controls, Player } from "@lottiefiles/react-lottie-player";
import {Box, CircularProgress, Stack, Typography} from "@mui/material";


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
            {/*<CircularProgress/>*/}
            <Player
                autoplay
                loop={true}
                src={'/images/load.json'}
                style={{ height: '750px', width: '750px' }}
            >
            </Player>
        </Stack>
    )
}

export default Loading