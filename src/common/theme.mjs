import {createTheme} from "@mui/material";

export const Fonts = {
    AppBold:"AppBold",
    AppExtraBold:"AppExtraBold",
    AppExtraLight:"AppExtraLight",
    AppLight:"AppLight",
    AppMedium:"AppMedium",
    AppRegular:"AppRegular",
    AppSemiBold:"AppSemiBold",
}

export const colors = {
    dark: "#012A4A",
    descriptionColor:"rgba(0, 0, 0, 0.6)",
    titleColor:"rgba(0, 0, 0, 0.87)",
    primary: "#21B926",
    white: "#FFFFFF",
    black: "#343434",
    passiveBg:"#F1F1F1",
    passiveText:'#8C8C8C',
    transparent: "#E0F1E1",
    solid: "#F5F4F4"
}


const theme = createTheme(
    {
        typography: {
            fontFamily: Fonts.AppRegular,
        },
        palette: {
            mode: "light",
            primary: {
                light: "#66ed5a",
                main: "#21B926",
                dark: "#008800"
            },
            secondary: {
                light: "#66ed5a",
                main: "#21B926",
                dark: "#008800"
            }
        }
    }
);

export {theme};