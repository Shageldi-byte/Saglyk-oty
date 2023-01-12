import HomeMedicine from "../component/HomeMedicine";
import HomeService from "../component/HomeService";
import InfoSection from "../component/InfoSection";
import Map from "../component/Map";
import Questions from "../component/Questions";
import QuiltedImageList from "./../component/QuiltedImageList";
import React, { useEffect, useState } from "react";
import Slider from "../component/Slider";
import Spacer from "../component/Spacer";

const Home = (props) => {
    return (
        <div>
            <Spacer count={8} />
            <Slider />
            <Spacer count={4} />
            <HomeMedicine />
            <Spacer count={4} />
            <HomeService />
            <Spacer count={4} />
            <Questions />
            <Spacer count={4} />
            <InfoSection />
            <Spacer count={4} />
            <Map />
            <Spacer count={4} />
            <QuiltedImageList />
            <Spacer count={4} />

        </div>
    )
}

export default Home;