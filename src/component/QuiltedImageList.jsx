import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { AppContext } from "../App";
import { Fonts, colors } from "../common/theme.mjs";
import Img, { CloudimageProvider } from 'react-cloudimage-responsive-blur-hash';
import {Blurhash} from "react-blurhash";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Image from 'rc-image';
import LazyImage from "./LazyImage";

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows
            }&fit=crop&auto=format&dpr=2 2x`,
    };
}

const cloudimageConfig = {
    token: 'demo'
};

export default function QuiltedImageList() {
    const { isMobile } = React.useContext(AppContext);
    const { t } = useTranslation();
    return (
        <Stack spacing={3}>
            <Typography sx={{ fontFamily: Fonts.AppSemiBold, fontSize: isMobile ? '20px' : '30px', color: colors.black }}>
                {t('gallery')}
            </Typography>
            <ImageList
                sx={{ width: '100%', height: 'auto' }}
                variant="quilted"
                cols={4}
                gap={18}
                rowHeight={isMobile ? 121 : 221}
            >
                {itemData.map((item) => (
                        <LazyImage item={item}/>
                ))}
            </ImageList>
        </Stack>
    );
}

const itemData = [
    {
        img: 'gallery (1).jpg',
        title: 'Breakfast',
        rows: 2,
        cols: 2,
    },
    {
        img: 'gallery (2).jpg',
        title: 'Burger',
    },
    {
        img: 'gallery (3).jpg',
        title: 'Camera',
    },
    {
        img: 'gallery (4).jpg',
        title: 'Coffee',
        cols: 2,
    },
    {
        img: 'gallery (5).jpg',
        title: 'Hats',
        cols: 2,
    },
    {
        img: 'gallery (6).jpg',
        title: 'Honey',
        author: '@arwinneil',
        rows: 2,
        cols: 2,
    },
    {
        img: 'gallery (7).jpg',
        title: 'Basketball',
    },
    {
        img: 'gallery (10).jpg',
        title: 'Fern',
    },
    {
        img: 'gallery (12).jpg',
        title: 'Mushrooms',
        rows: 2,
        cols: 2,
    },
    {
        img: 'gallery (13).jpg',
        title: 'Tomato basil',
    },
    {
        img: 'gallery (15).jpg',
        title: 'Sea star',
    },
    {
        img: 'gallery (17).jpg',
        title: 'Bike',
        cols: 2,
    },
];