import Image from "next/image";
import React from "react";
import { HeroImage, WaveRed } from "../../../../public/assets";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Container from "@/components/container";

const Hero = () => {
  return (
    <section className="w-full overflow-hidden bg-white pb-32 pt-22 relative">
      <Container>
        <div className="w-full flex lg:flex-row gap-20 flex-col justify-between">
          <div className="max-w-[600px] flex flex-col gap-3">
            <span className="font-semibold uppercase text-md text-zinc-500">
              Laticínos Matupi
            </span>
            <h1 className="text-[3em] font-normal text-red-500 font-(family-name:--font-sora) leading-tight ">
              Do campo para a sua mesa, <br />
              com carinho e qualidade.
            </h1>
            <p className="text-xl mt-3 font-light text-gray-600">
              Tradição que valoriza cada detalhe da produção artesanal, unindo o
              cuidado com o campo à paixão por levar qualidade e sabor até a sua
              mesa.{" "}
            </p>

            <Link href={"/sobre-nos"}>
              <Button
                className="border-2 bg-transparent text-red-500 border-red-500 hover:bg-red-500 hover:text-white py-6 font-semibold 
            text-xl w-[40%] mt-5 rounded-2xl cursor-pointer "
              >
                Saiba mais
              </Button>
            </Link>
          </div>
          <Image
            src={HeroImage}
            width={600}
            height={600}
            alt="Matupi"
            loading="lazy"
          />
        </div>
      </Container>
      <Image
        src={WaveRed}
        className="absolute -bottom-2 w-full "
        alt="Receitas"
        quality={100}
        loading="lazy"
      />
    </section>
  );
};

export default Hero;
