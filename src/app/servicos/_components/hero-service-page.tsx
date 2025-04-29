import Container from "@/components/container";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ServiceBanner, ServiceBannerMobile } from "../../../../public/assets";

const HeroServicePage = () => {
  return (
    <section className="w-full  relative mt-10">
      <div className="w-full absolute z-10 top-5">
        <Container>
          <div className="flex lg:flex-row flex-col w-full h-[800px] lg:justify-end lg:items-center justify-end">
            <div className="flex flex-col gap-5 max-w-[600px]">
              <span className="text-zinc-500 lg:text-md text-sm font-semibold uppercase  font-(family-name:--font-sora)">
                Fale com um Representante Matupi
              </span>
              <h1 className="lg:text-[3.5em] text-[2em] leading-tight text-[#f30808]  font-(family-name:--font-sora)">
                Leve os sabores da Matupi para o seu negócio.
              </h1>

              <h2 className="lg:text-xl text-md text-[#f30808]">
                Escolha o canal ideal para entrar em contato com um
                representante e descubra como levar os sabores da Matupi para
                suas prateleiras.
              </h2>

              <Link
                href={"/servicos/#form"}
                className="group w-fit bg-transparent text-[#f30808] border-2  border-[#f30808] rounded-full flex flex-row gap-3 py-3 items-center text-xl 
              hover:bg-[#f30808] hover:text-white cursor-pointer px-10"
              >
                Saiba mais{" "}
              </Link>
            </div>
          </div>
        </Container>
      </div>
      <Image src={ServiceBanner} alt="Matupi" className="lg:flex hidden" />
      <Image
        src={ServiceBannerMobile}
        alt="Matupi"
        className="lg:hidden flex"
      />
    </section>
  );
};

export default HeroServicePage;
