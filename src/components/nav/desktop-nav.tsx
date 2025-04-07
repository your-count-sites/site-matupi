import React from "react";
import Container from "../container";
import Image from "next/image";
import { Logo } from "../../../public/assets";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";

const DesktopNav = () => {
  return (
    <nav className="">
      <Container>
        <div className="w-full flex flex-row justify-between items-center py-4 ">
          <Link href={"/"}>
            <Image src={Logo} width={200} height={50} alt="Matupi" />
          </Link>

          <div className="w-full flex flex-row gap-10 ">
            <ul className="w-full flex flex-row items-center gap-10 uppercase font-extrabold text-sm text-red-500 justify-end">
              {NAV_LINKS.map((item, index) => (
                <Link key={index} href={item.href}>
                  {item.name}
                </Link>
              ))}
            </ul>
            <Link
              href={"/"}
              className="bg-red-500 text-white p-3 rounded-xl w-[20%] flex flex-row justify-center font-bold hover:scale-105 trasnsition-all ease-out duration-300"
            >
              Compre Agora
            </Link>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default DesktopNav;
