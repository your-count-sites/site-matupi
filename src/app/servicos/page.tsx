"use client";

import React, { useState } from "react";

import HeroServicePage from "./_components/hero-service-page";
import BusinessSection from "./_components/business-section";
import ContactForm from "./_components/contact-form";

const Servicos = () => {
  return (
    <>
      <HeroServicePage />
      <BusinessSection />
      <ContactForm />
    </>
  );
};
export default Servicos;
