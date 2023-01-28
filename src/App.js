import "./App.css";
import AboutUs from "./page/AboutUs";
import ContactUs from "./page/ContactUs";
import Home from "./page/Home";
import Index from "./page/Index";
import Loading from "./component/Loading";
import Medicine from "./page/Medicine";
import Services from "./page/Services";
import { ThemeProvider, useMediaQuery, useTheme } from "@mui/material";
import { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { theme } from "./common/theme.mjs";
import { Body } from "./component/component.mjs";
import i18n from "i18next";

export function useWidth() {
    const theme = useTheme();
    const keys = [...theme.breakpoints.keys].reverse();
    return (
        keys.reduce((output, key) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const matches = useMediaQuery(theme.breakpoints.up(key));
            return !output && matches ? key : output;
        }, null) || 'xs'
    );
}

export const AppContext = createContext({});

function App() {
    const wwidth = useWidth();
    const [loading, setLoading] = useState(true);
    const [appLanguage,setAppLanguage] = useState('ru');
    const checker = (w) => {
        return ["xs", "sm"].includes(w);
    }
    const [isMobile, setIsMobile] = useState(checker(wwidth));



    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem('lng',lng);
        setAppLanguage(lng);
    };

    useEffect(()=>{
        let lng=localStorage.getItem('lng');
        if(typeof lng!=='undefined' && lng!==null && lng!==''){
            changeLanguage(lng);
        } else {
            changeLanguage(appLanguage);
        }
    },[])

    useEffect(() => {
        setIsMobile(checker(wwidth))
    }, [wwidth])
    return (
        <AppContext.Provider value={{
            isMobile: isMobile,
            setLoading:setLoading,
            appLanguage:appLanguage,
            changeLanguage:changeLanguage
        }}>
            {
                loading ?
                    <Loading/>
                    :
                    <Body>
                        <ThemeProvider theme={theme}>
                            <BrowserRouter>
                                <Routes>
                                    <Route path="/" element={<Index/>}>
                                      <Route index element={<Home/>}/>
                                      <Route path="service" element={<Services/>}/>
                                      <Route path="about" element={<AboutUs/>}/>
                                      <Route path="contact" element={<ContactUs/>}/>
                                      <Route path="medicine" element={<Medicine/>}/>
                                    </Route>
                                </Routes>
                            </BrowserRouter>
                        </ThemeProvider>
                    </Body>

            }
        </AppContext.Provider>
    );
}

export default App;
