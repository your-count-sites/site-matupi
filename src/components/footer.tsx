"use client";

import React from "react";
import Container from "./container";
import Image from "next/image";
import { Logo, WaveRed, WaveYellow } from "../../public/assets";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Instagram, Youtube } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

export const SOCIAL_MEDIA = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/grupomatupi/",
    icon: <FaInstagram size={25} />,
  },
  {
    name: "Youtube",
    href: "https://www.youtube.com/@GrupoMatupi",
    icon: <FaYoutube size={25} />,
  },
  {
    name: "Whatsapp",
    href: "https://api.whatsapp.com/send/?phone=559292711900&text=Ol%C3%A1,%20gostaria%20de%20falar%20com%20um%20representante%20Matupi!&type=phone_number&app_absent=0",
    icon: <FaWhatsapp size={25} />,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/grupomatupi?locale=pt_BR",
    icon: <FaFacebookF size={25} />,
  },
];

const Footer = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <footer
      className={`w-full  relative py-10 bg-[#Fff484] ${pathname.includes("receitas") ? "mt-0" : "mt-0"}`}
    >
      <Image
        src={WaveYellow}
        className="absolute lg:-top-10 md:-top-10 -top-3  w-full "
        alt="Footer"
        quality={100}
        loading="lazy"
      />
      <Container>
        <div className="w-full flex flex-col">
          <div className="flex lg:flex-row flex-col gap-20 justify-between py-10">
            <div className="flex flex-col gap-5 text-[#F30808]">
              <h1 className="text-2xl font-bold">Institucional</h1>

              <div className="grid lg:grid-rows-1 lg:grid-cols-4 grid-cols-1 gap-6">
                {NAV_LINKS.map((link, index) => (
                  <Link href={link.href} key={index}>
                    {link.name}
                  </Link>
                )).slice(0, 4)}
              </div>
            </div>
            <div className="flex flex-col gap-5 text-[#F30808]">
              <h1 className="text-2xl font-bold">Entre em contato</h1>
              <span className="">contato@laticiniomatupi.com.br</span>
              <span>(92) 99271 1900</span>
              <Link href={"/fale-conosco"}>Fale conosco</Link>
            </div>
          </div>

          <div className="w-full flex lg:flex-row flex-col justify-between lg:items-center items-start gap-5 py-3 border-t-[0.5px] border-b-[0.5px] border-[#F30808]">
            <Image src={Logo} width={200} height={200} alt="Matupi" />

            <div className="lg:ml-0 ml-5 flex flex-row gap-5">
              {SOCIAL_MEDIA.map((item, index) => (
                <Link
                  href={item.href}
                  key={index}
                  className="bg-yellow-100 p-3 rounded-lg"
                  target="_blank"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>

          <div className="py-3 flex lg:flex-row flex-col justify-between lg:items-center items-start gap-5 text-sm">
            <div className="flex flex-col gap-3">
              <span className="text-[#f30808] font-normal lg:text-md text-sm">
                Rua do Igarapé, 70, Taruma-Açu – Manaus – AM, 69022-458
              </span>
              <span className="text-[#f30808]  font-normal lg:text-md text-sm">
                Copyright©2025 | Grupo Matupi | Todos os direitos reservados
              </span>
            </div>

            <div>
              <Link
                href={"/politica-de-privacidade"}
                className="underline text-[#f30808]"
              >
                Política de privacidade
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
