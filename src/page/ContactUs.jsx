import ContactUsItem from "../component/ContactUsItem";
import PageTitle from "./../component/PageTitle";
import React from "react";
import Spacer from "./../component/Spacer";
import {useTranslation} from "react-i18next";

const ContactUs = () => {
    const {t}=useTranslation();
    return (
        <div>
            <Spacer count={8} />
            <PageTitle title={t('contact_us_title')} desc={t("contact_us_desc")} />
            <Spacer count={4} />
            <ContactUsItem />
            <Spacer count={4} />
        </div>
    )
}

export default ContactUs