import React from "react";

import FeaturedOpp from "../components/FeaturedOpp";
import GetHired from "../components/GetHired";
import HomeHero from "../components/HomeHero";
import LPM from "../components/LPM";
import Opportunities from "../components/Opportunities";
import Showcase from "../components/Showcase";
// import SlidingBrands from "../components/SlidingBrands";
import HeroHome from "../components/home/HeroHome";
import SlidingBrand from "../components/compete/SlidingBrand";
import CarouselCard from "../components/compete/CarouselCard";
import CommonCard from "../components/home/CommonCard";
import OpportunityCard from "../components/compete/OpportunityCard";
import OurNumbers from "../components/compete/OurNumbers";
import DownloadApp from "../components/home/DownloadApp";
import {
  explore_card,
  hired_section,
  number_section,
  opportunity_feature,
} from "../Shared/CompeteData";
import FeatureOpportunity from "../components/compete/FeatureOpportunity";

const Home = () => {
  return (
    <>
      {/* <HomeHero /> */}
      <HeroHome />

      {/* <SlidingBrands small={"Industry veterans"} title={"trust us:"} /> */}
      <div className="mt-10 sm:mt-[150px]">
        <SlidingBrand small={"Industry veterans "} title={"trust us:"} />
      </div>

      <Showcase type={"home"} />
      {/* <CarouselCard /> */}

      {/* <LPM /> */}
      <CommonCard />

      {/* <Opportunities /> */}
      <OpportunityCard text={explore_card} />

      {/* <GetHired /> */}
      <OpportunityCard text={hired_section} />

      {/* <FeaturedOpp type={"home"} /> */}
      <FeatureOpportunity text={opportunity_feature} />

      {/* <OurNumbers /> */}
      <OurNumbers text={number_section} />

      {/* <DownloadApp /> */}
      <DownloadApp />
    </>
  );
};

export default Home;
