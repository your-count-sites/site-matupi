import Container from "@/components/container";
import React from "react";
import Market from "@/components/svg/market";
import Bakery from "@/components/svg/bakery";
import Restaurant from "@/components/svg/restaurant";
import Supermarket from "@/components/svg/supermarket";
import Emporium from "@/components/svg/emporium";

const BUSINESS = [
  { name: "Mercado", icon: <Market /> },
  { name: "Padaria", icon: <Bakery /> },
  { name: "Restaurante", icon: <Restaurant /> },
  { name: "Supermercado", icon: <Supermarket /> },
  { name: "Empório", icon: <Emporium /> },
];

const BusinessSection = () => {
  return (
    <section className="w-full overflow-hidden mt-[100px] py-26 ">
      <Container>
        <div className="w-full flex flex-col gap-20">
          <h1 className="lg:text-[3em] text-xl max-w-[800px] text-[#f30808]">
            Os produtos Matupi são perfeitos para o seu negócio
          </h1>
          <div className="w-full flex lg:flex-row flex-col gap-14 justify-between">
            {BUSINESS.map((item, index) => (
              <div className="flex flex-col items-center gap-5" key={index}>
                {item.icon}
                <h2 className="text-lg font-normal text-zinc-600 uppercase">
                  {item.name}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BusinessSection;
