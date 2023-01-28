import React, {useContext, useState} from "react";
import { Controls, Player } from "@lottiefiles/react-lottie-player";
import {Box, CircularProgress, Stack, Typography} from "@mui/material";
import {useEffect} from "react";
import {AppContext} from "../App";


const Loading = () => {
    const {setLoading} = useContext(AppContext);
    const [ready,setReady]=useState(false);
    function start(){
        setTimeout(() => setLoading(false), 4500)
    }
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
            {
                ready?null:<CircularProgress/>
            }
            <Player
                autoplay
                onEvent={event => {
                    if(event==='load'){
                        setReady(true);
                        start();
                    }
                }}
                loop={true}
                src={'/images/load.json'}
                style={{ height: '750px', width: '750px' }}
            >
            </Player>
        </Stack>
    )
}

export default Loading