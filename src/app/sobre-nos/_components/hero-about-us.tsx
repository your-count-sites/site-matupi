import Container from "@/components/container";
import Image from "next/image";
import React from "react";
import { HeroSobre, WaveRed } from "../../../../public/assets";

const HeroAboutUs = () => {
  return (
    <section className="w-full overflow-hidden bg-white pb-42 pt-20 relative ">
      <Image
        src={WaveRed}
        className="absolute bottom-0 w-full  "
        alt="Receitas"
        quality={100}
        loading="lazy"
      />
      <Container>
        <div className="w-full flex flex-row justify-between items-center">
          <div className="max-w-[500px] flex flex-col gap-5">
            <span>Sobre a Matupi</span>
            <h1 className="text-[3.5rem] text-[#f30808]">
              Feito no coração a amazônia
            </h1>
            <p className="text-lg">
              Uma marca que nasce da terra, cresce com propósito e chega até
              você com alma regional e qualidade de excelência.
            </p>
          </div>

          <div>
            <Image
              src={HeroSobre}
              width={500}
              height={400}
              quality={100}
              loading="lazy"
              alt="Sobre"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroAboutUs;
