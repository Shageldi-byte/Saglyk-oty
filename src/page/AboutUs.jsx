import AboutItem from "../component/AboutItem";
import PageTitle from "./../component/PageTitle";
import QuiltedImageList from "../component/QuiltedImageList";
import React from "react";
import Spacer from "./../component/Spacer";

const AboutUs = () => {
    return (
        <div>
            <Spacer count={8} />
            <PageTitle title={'Biz barada'} desc={"Saglyk oty dermanhanasy"} />
            <Spacer count={4} />
            <AboutItem />
            <Spacer count={4} />
            <QuiltedImageList />
            <Spacer count={4} />

        </div>
    )
}

export default AboutUs