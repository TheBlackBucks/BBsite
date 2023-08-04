import React from "react";
import MentorHero from "../components/mentorship/MentorHero";
import SlidingBrands from "../components/compete/SlidingBrand";
import MentorWorkBanner from "../components/mentorship/MentorWorkBanner";

const Mentorship = () => {
  return (
    <>
      <MentorHero />
      <SlidingBrands
        className="mt-11"
        small={"Mentors from"}
        title={"Top Companies:"}
      />
      <MentorWorkBanner />
    </>
  );
};

export default Mentorship;
