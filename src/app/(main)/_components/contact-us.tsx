import Image from "next/image";
import React from "react";
import {
  WaveRedUpsideDown,
  HistoriaBg,
  WaveRed,
  ContatoBg,
  ContatoBgMobile,
} from "../../../../public/assets";
import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const ContactUs = () => {
  return (
    <section className="w-full overflow-hidden relative py-32 ">
      <Image src={ContatoBg} alt="Matupi" className="lg:flex hidden" />
      <Image src={ContatoBgMobile} alt="Matupi" className="lg:hidden flex" />

      <div className="w-full absolute z-10 top-5 ">
        <Container>
          <div className="flex lg:flex-row flex-col w-full h-[700px] lg:justify-start lg:items-center justify-end">
            <div className="flex flex-col gap-5 max-w-[500px]">
              <span className="text-zinc-500 lg:text-md text-sm font-semibold uppercase  font-(family-name:--font-sora)">
                Fale com a gente!
              </span>

              <h1 className="lg:text-[3.5em] text-[2em] leading-tight text-[#f30808]  font-(family-name:--font-sora)">
                Estamos prontos para te ouvir
              </h1>

              <h2 className="lg:text-xl text-md text-[#f30808]">
                Se você tem dúvidas, sugestões, deseja fazer um pedido ou apenas
                bater um papo sobre nossos produtos, é só chamar! Nossa equipe
                está disponível para te atender com atenção, carinho e
                agilidade.
              </h2>

              <Link
                href={"/sobre-nos"}
                className="group w-fit bg-transparent text-[#f30808] border-2 border-[#f30808] rounded-full flex flex-row gap-3 items-center text-xl py-3 
              hover:bg-[#f30808] hover:text-white cursor-pointer px-10"
              >
                Saiba mais{" "}
                <ArrowRight className="group-hover:translate-x-2 transition-all ease-in-out duration-300 " />
              </Link>
            </div>
          </div>
        </Container>
      </div>
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

export default ContactUs;
