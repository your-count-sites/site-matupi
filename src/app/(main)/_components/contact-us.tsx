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
    <section className="w-full overflow-hidden relative ">
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

      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 480 480"
        className="absolute lg:w-[400px] hidden -right-32 -top-52 rotate-x-12 z-20"
      >
        <path
          d="M360 289.7c43.4 0 86.9-16.6 120-49.7a169.2 169.2 0 0 0-120-49.7 169.2 169.2 0 0 0 49.7-120c-46.9 0-89.3 19-120 49.7 0-43.4-16.6-86.9-49.7-120a169.2 169.2 0 0 0-49.7 120 169.2 169.2 0 0 0-120-49.7c0 46.8 19 89.3 49.7 120-43.4 0-86.9 16.6-120 49.7a169.2 169.2 0 0 0 120 49.7 169.2 169.2 0 0 0-49.7 120c46.8 0 89.3-19 120-49.7 0 43.4 16.6 86.9 49.7 120a169.2 169.2 0 0 0 49.7-120 169.2 169.2 0 0 0 120 49.7c0-46.9-19-89.3-49.7-120Z"
          fill="#F30808 "
        ></path>
      </svg> */}

      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 480 480"
        className="absolute lg:w-[400px] w-[00px] -right-32 top-[10em] rotate-x-12"
      >
        <path
          d="M360 289.7c43.4 0 86.9-16.6 120-49.7a169.2 169.2 0 0 0-120-49.7 169.2 169.2 0 0 0 49.7-120c-46.9 0-89.3 19-120 49.7 0-43.4-16.6-86.9-49.7-120a169.2 169.2 0 0 0-49.7 120 169.2 169.2 0 0 0-120-49.7c0 46.8 19 89.3 49.7 120-43.4 0-86.9 16.6-120 49.7a169.2 169.2 0 0 0 120 49.7 169.2 169.2 0 0 0-49.7 120c46.8 0 89.3-19 120-49.7 0 43.4 16.6 86.9 49.7 120a169.2 169.2 0 0 0 49.7-120 169.2 169.2 0 0 0 120 49.7c0-46.9-19-89.3-49.7-120Z"
          fill="#F30808 "
        ></path>
      </svg> */}
    </section>
  );
};

export default ContactUs;
