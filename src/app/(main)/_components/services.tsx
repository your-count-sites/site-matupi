import Container from "@/components/container";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const ServicesSection = () => {
  return (
    <div className="w-full overflow-hidden bg-[#f30808] py-10 pb-42">
      <Container>
        <div className="flex flex-col gap-8 ">
          <div className="flex flex-row w-full justify-center">
            <h1 className="text-[#fff] text-[3.5em] font-bold">Serviços</h1>
          </div>

          <div className="flex flex-col gap-8 w-full bg-[#fff] rounded-xl p-14 text-center items-center">
            <span className="max-w-[900px] text-[#f30808] font-semibold text-[1.2em]">
              {" "}
              Seja você cliente, consumidor, fornecedor ou representante
              comercial, este espaço foi pensado especialmente para facilitar o
              seu contato com a Matupi. Aqui, você encontra informações, suporte
              e oportunidades para se aproximar ainda mais da nossa marca.
            </span>

            <div className="flex flex-row w-full justify-center">
              <Link
                className="group w-[50%] flex flex-row justify-center items-center text-lg font-semibold bg-[#f30808] rounded-full border-[#f30808]  p-3 gap-5 border-2 text-[#fff] hover:scale-105 transition-all ease-in-out duration-300"
                href={"https://lp.matupi.com.br"}
              >
                Saiba mais{" "}
                <ArrowRight className="group-hover:translate-x-1.5 transition-all ease-in-out duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ServicesSection;
