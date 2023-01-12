import ContactUsItem from "../component/ContactUsItem";
import PageTitle from "./../component/PageTitle";
import React from "react";
import Spacer from "./../component/Spacer";

const ContactUs = () => {
    return (
        <div>
            <Spacer count={8} />
            <PageTitle title={'Biz bilen habarlaşmak'} desc={"Hat ugradanda emailyňyzy dogry ýazmagyňyzy soraýarys\nHatyňyza jogap görkezilen email salgysyna iberilýär"} />
            <Spacer count={4} />
            <ContactUsItem />
            <Spacer count={4} />
        </div>
    )
}

export default ContactUs