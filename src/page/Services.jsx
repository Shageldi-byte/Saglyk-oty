import PageTitle from "../component/PageTitle";
import React from "react";
import ServiceItem from "../component/ServiceItem";
import Spacer from "./../component/Spacer";
import { Stack } from "@mui/material";
import {useTranslation} from "react-i18next";
import {services} from "../common/data.mjs";

const Services = () => {
    const {t}=useTranslation();
    return (
        <div>
            <Spacer count={8} />
            <PageTitle title={t('our_services')} desc={t('about_services')} />
            <Spacer count={4} />
            <Stack spacing={3}>
                {
                    services.map((item,i) => {
                        return (
                            <ServiceItem item={item} key={`service-${i}`} />
                        )
                    })
                }
            </Stack>
            <Spacer count={4} />

        </div>
    )
}

export default Services