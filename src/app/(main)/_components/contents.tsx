import Image from "next/image";
import React from "react";
import {
  ConteudosBg,
  WaveRed,
  WaveRedUpsideDown,
} from "../../../../public/assets";
import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ContentsSection = () => {
  return (
    <section className="w-full overflow-hidden relative">
      <Image
        src={WaveRedUpsideDown}
        className="w-full absolute -top-5 left-0"
        alt="matupi"
        loading="lazy"
      />
      <Image
        src={WaveRed}
        className="w-full absolute -bottom-1 left-0"
        alt="matupi"
        loading="lazy"
      />
      <Image src={ConteudosBg} alt="Matupi" className="" />

      <div className="w-full absolute z-10 top-32 ">
        <Container>
          <div className="flex flex-col gap-10 max-w-[500px]">
            <span className="text-red-800 text-md font-semibold uppercase  font-(family-name:--font-sora)">
              Conteúdos Exclusivos
            </span>

            <h1 className="text-[3.5em] leading-tight text-red-950  font-(family-name:--font-sora)">
              Acompanhe a{" "}
              <span className="text-red-600 uppercase font-semibold">
                Matupi
              </span>{" "}
              nas redes e viva essa experiência com a gente
            </h1>

            <Button
              className="bg-transparent text-red-900 border-2 border-red-900 w-fit rounded-full text-xl py-5 
              hover:bg-red-900 hover:text-white cursor-pointer"
              variant={"outline"}
            >
              Saiba mais <ArrowRight />
            </Button>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default ContentsSection;
