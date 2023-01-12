import MedicineItem from "../component/MedicineItem";
import PageTitle from "./../component/PageTitle";
import React, { useEffect, useState } from "react";
import Spacer from "./../component/Spacer";
import { Button, Grid } from "@mui/material";
import { Fonts, colors } from "../common/theme.mjs";
import { DataMedicine } from "../common/utils.mjs";

const activeButton = {
    color: 'white',
    textTransform: 'none',
    fontFamily: Fonts.AppSemiBold,
    fontSize: '16px',
    m: 1
}

const passiveButton = {
    color: colors.black,
    textTransform: 'none',
    fontFamily: Fonts.AppRegular,
    fontSize: '16px',
    m: 1
}

const Medicine = () => {
    const [categories, setCategories] = useState([{ tm: "Ählisi", en: "All", ru: "Все" }]);
    useEffect(() => {
        let temp_tm = [];
        let temp_en = [];
        let temp_ru = [];
        DataMedicine.forEach((item, i) => {
            if (!temp_tm.includes(item.cat_tm)) {
                temp_tm.push(item.cat_tm);
                temp_en.push(item.cat_en);
                temp_ru.push(item.cat_ru);
            }
        })
        setCategories([...categories, ...temp_tm.map((item, i) => {
            return { tm: item, en: temp_en[i], ru: temp_ru[i] }
        })])
    }, [])
    useEffect(() => {
        console.log(categories);
    }, [categories])
    return (
        <div>
            <Spacer count={8} />
            <PageTitle title={'Dermanlar'} desc={"Saglyk oty dermanhanasy"} />
            <Spacer count={4} />
            <div style={{
                display: 'flex',
                flexWrap: 'wrap'
            }}>
                {
                    categories.map((item, i) => {
                        return (
                            <Button variant={i === 0 ? 'contained' : 'outlined'} sx={{ ...i === 0 ? activeButton : passiveButton }}>
                                {item.tm}
                            </Button>
                        )
                    })
                }
            </div>
            <Spacer count={2} />
            <Grid container spacing={3}>

                {
                    DataMedicine.map((item, i) => {
                        return (
                            <Grid item xs={6} sm={6} md={4} key={`medicine-${i}`}>
                                <MedicineItem item={item} />
                            </Grid>
                        )
                    })
                }

            </Grid>

            <Spacer count={4} />
        </div>
    )
}

export default Medicine