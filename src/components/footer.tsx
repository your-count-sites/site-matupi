"use client";

import React from "react";
import Container from "./container";
import Image from "next/image";
import { Logo, WaveRed, WaveYellow } from "../../public/assets";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <footer
      className={`w-full relative py-10 bg-[#F40808] mt-[100px] ${pathname.includes("receitas") ? "mt-[100px]" : "mt-0"}`}
    >
      <Image
        src={WaveRed}
        className="absolute -top-10 w-full "
        alt="Footer"
        quality={100}
        loading="lazy"
      />
      <Container>
        <div className="w-full flex flex-col">
          <div className="flex flex-row justify-between py-10">
            <div className="flex flex-col gap-5 text-white">
              <h1 className="text-2xl font-bold">Institucional</h1>
              {NAV_LINKS.map((link, index) => (
                <Link href={link.href} key={index}>
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-5 text-white">
              <h1 className="text-2xl font-bold">Entre em contato</h1>
              <span className="">contato@laticiniomatupi.com.br</span>
              <span>(69) 9936-0370</span>
            </div>
          </div>

          <div className="w-full py-3 border-t-[0.5px] border-b-[0.5px] border-white">
            <Image src={Logo} width={200} height={200} alt="Matupi" />
          </div>

          <div className="py-3">
            <div className="flex flex-col gap-3">
              <span className="text-white font-semibold">
                Rodovia Br 230 Transamazonica, 3600 VILA DE MATUPI – MANICORE –
                AM
              </span>
              <span className="text-white font-semibold">
                Copyright©2024 | Grupo Matupi | Todos os direitos reservados
              </span>
            </div>

            <div></div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
