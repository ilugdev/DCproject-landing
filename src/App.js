import React from "react";

import HeaderSection from "sections/HeaderSection";
import HomeSection from "sections/HomeSection";
import ServicesSection from "sections/ServicesSection";
import AboutUsSection from "sections/AboutUsSection";
import MostUsedPrograms from "sections/MostUsedPrograms";
import GallerySection from "sections/GallerySection";

export default function App() {
  return (
    <>
      <HeaderSection />
      <HomeSection />
      <ServicesSection />
      <AboutUsSection />
      <MostUsedPrograms />
      <GallerySection />
    </>
  );
}
