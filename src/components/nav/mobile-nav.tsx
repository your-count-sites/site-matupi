"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

import { ChevronRight, CircleX, Menu, Search } from "lucide-react";

import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { Logo } from "../../../public/assets";
import { NAV_LINKS } from "@/constants";
import Container from "../container";

const NavBarMobile = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const [search, setSearch] = useState("");

  const router = useRouter();

  return (
    <div className="w-full ">
      <Container>
        <nav className="w-full lg:hidden flex flex-row justify-between items-center py-2">
          <div className="flex flex-row gap-5 items-center">
            <Link href="/">
              <Image
                src={Logo}
                alt="icon-portal-da-massa"
                width={120}
                height={60}
              />
            </Link>

            <div
              className={` ${
                toggleNav
                  ? " lg:hidden fixed z-30 bg-[#f30808] backdrop-blur-lg text-white text-3xl top-0 left-0 w-[100%] min-h-screen py-5 max-w-[1320px] mx-auto px-6 flex flex-col ease-in duration-100 "
                  : "lg:hidden fixed z-30 bg-[#f30808] backdrop-blur-lg text-white text-3xl -left-[100%] top-0 w-full min-h-screen py-5 max-w-[1320px] mx-auto px-6  flex flex-col  ease-in duration-100"
              }  `}
            >
              <div className="flex flex-row justify-between items-center">
                <Link href="/">
                  <Image
                    src={Logo}
                    alt="icon-portal-da-massa"
                    width={80}
                    height={80}
                  />
                </Link>

                <button onClick={() => setToggleNav((prev) => !prev)}>
                  <CircleX size={40} />
                </button>
              </div>

              <ul className="mt-5 ml-3 flex flex-col text-[0.6em] font-bold  text-white">
                {NAV_LINKS.map((item, index) => (
                  <Link
                    href={item.href}
                    className="border-b py-3 flex felex-row justify-between items-center"
                    onClick={() => setToggleNav((prev) => !prev)}
                    key={index}
                  >
                    <span>{item.name}</span> <ChevronRight />
                  </Link>
                ))}
              </ul>
            </div>
          </div>

          <button onClick={() => setToggleNav((prev) => !prev)}>
            <Menu size={50} color="#f30808" />
          </button>
        </nav>
      </Container>
    </div>
  );
};

export default NavBarMobile;
