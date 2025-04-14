import Image from "next/image";
import React from "react";
import {
  WaveRedUpsideDown,
  HistoriaBg,
  WaveRed,
} from "../../../../public/assets";
import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HistorySection = () => {
  return (
    <section className="w-full overflow-hidden relative">
      <Image src={HistoriaBg} alt="Matupi" />

      <div className="w-full absolute z-10 top-32 ">
        <Container>
          <div className="flex flex-row w-full justify-end">
            <div className="flex flex-col gap-5 max-w-[500px]">
              <span className="text-[#FFF484] text-md font-semibold uppercase  font-(family-name:--font-sora)">
                A Matupi
              </span>

              <h1 className="text-[3.5em] leading-tight text-white  font-(family-name:--font-sora)">
                Conheça a tradição
              </h1>

              <h2 className="text-xl text-white">
                Com raízes profundas na tradição familiar e na paixão pela
                produção artesanal, a Matupi Laticínios nasceu com o propósito
                de levar à sua mesa produtos frescos, saborosos e cheios de
                carinho.
              </h2>

              <Button
                className="bg-transparent text-white border-2 border-white w-fit rounded-full text-xl py-5 
              hover:bg-white hover:text-[#F30808] cursor-pointer"
                variant={"outline"}
              >
                Saiba mais <ArrowRight />
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default HistorySection;
