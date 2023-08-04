import React from "react";
import CompeteHero from "../components/compete/competeHero";
import SlidingBrands from "../components/compete/SlidingBrand";
import CardCarousel from "../components/compete/CarouselCard";
import OpportunityCard from "../components/compete/OpportunityCard";
import { explore_card, mentors_section, number_section, opportunity_card, opportunity_feature, trending_opportunity } from "../Shared/CompeteData";
import Launching from "../components/compete/Launching";
import FeatureOpportunity from "../components/compete/FeatureOpportunity";
import Mentors from "../components/compete/Mentors";
import WorkBanner from "../components/compete/WorkBanner";
import OurNumbers from "../components/compete/OurNumbers";
import TrendingOpportunity from "../components/compete/TrendingOpportunity";



const Compete = () => {
  return (
    <>
    <CompeteHero />
    <SlidingBrands
        small={"Compete & Join"}
        title={"Dream Companies:"}
      />
      <CardCarousel />

      <OpportunityCard text={opportunity_card} />
     <TrendingOpportunity text={trending_opportunity} />
      <OpportunityCard text={explore_card} />
      <Launching/>
      <FeatureOpportunity text={opportunity_feature} />
     <Mentors text={mentors_section} />
     <WorkBanner />
     <OurNumbers text={number_section} />
    </>
  );
};

export default Compete;
