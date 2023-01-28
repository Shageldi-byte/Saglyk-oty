import AboutItem from "../component/AboutItem";
import PageTitle from "./../component/PageTitle";
import QuiltedImageList from "../component/QuiltedImageList";
import React from "react";
import Spacer from "./../component/Spacer";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
    const { t } = useTranslation();
    return (
        <div>
            <Spacer count={8} />
            <PageTitle title={t('about_us')} desc={t("about_apteka")} />
            <Spacer count={4} />
            <AboutItem />
            <Spacer count={4} />
            <QuiltedImageList />
            <Spacer count={4} />

        </div>
    )
}

export default AboutUs