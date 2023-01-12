import PageTitle from "../component/PageTitle";
import React from "react";
import ServiceItem from "../component/ServiceItem";
import Spacer from "./../component/Spacer";
import { Stack } from "@mui/material";

const Services = () => {
    return (
        <div>
            <Spacer count={8} />
            <PageTitle title={'Biziň hyzmatlarymyz'} desc={"Hyzmatlar bölüminiň telefon belgisi +99362737222 "} />
            <Spacer count={4} />
            <Stack spacing={3}>
                {
                    new Array(20).fill(0).map(i => {
                        return (
                            <ServiceItem key={`service-${i}`} />
                        )
                    })
                }
            </Stack>
            <Spacer count={4} />

        </div>
    )
}

export default Services