import Image from "next/image";
import React from "react";
import {
  BannerProposito,
  ConteudosBg,
  WaveRed,
  WaveRedUpsideDown,
  WaveWhite,
} from "../../../../public/assets";
import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ProposalSection = () => {
  return (
    <section className="w-full overflow-hidden relative mb-10">
      <Image
        src={WaveWhite}
        className="w-full absolute -top-2 left-0 rotate-180"
        alt="matupi"
        loading="lazy"
      />
      <Image
        src={WaveWhite}
        className="w-full absolute -bottom-10 left-0"
        alt="matupi"
        loading="lazy"
      />
      <Image src={BannerProposito} alt="Matupi" className="" />

      <div className="w-full absolute z-10 top-32 ">
        <Container>
          <div className="w-full h-[500px] flex flex-col justify-center items-center gap-5 ">
            <span className="text-white text-md font-semibold uppercase  font-(family-name:--font-sora) bg-[#f30808] p-3 rounded-full px-8">
              Propósito
            </span>

            <h1 className="text-[5em] leading-tight text-white text-center  font-(family-name:--font-sora)">
              Levar o sabor da Amazônia para a sua mesa com qualidade
            </h1>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default ProposalSection;
