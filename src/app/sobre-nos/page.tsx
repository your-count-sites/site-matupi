import ContactUs from "../(main)/_components/contact-us";
import EmployesSection from "./_components/employes-section";
import HeroAboutUs from "./_components/hero-about-us";
import Mission from "./_components/mission";
import OurHistory from "./_components/our-history";
import ProposalSection from "./_components/proposal";

export default function AboutUs() {
  return (
    <>
      <HeroAboutUs />
      <OurHistory />
      <Mission />
      <ProposalSection />
      <EmployesSection />
      <ContactUs />
    </>
  );
}
