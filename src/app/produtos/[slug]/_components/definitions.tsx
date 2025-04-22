import { IProduct } from "@/@types/IProduct";
import Container from "@/components/container";
import React from "react";

const Definitions = ({ ingredients }: IProduct) => {
  return (
    <section className="w-full overflow-hidden py-20 ">
      <Container>
        <div className="w-full flex justify-between gap-20">
          <div className="flex flex-col gap-3">
            <h1 className="text-xl font-bold text-[#f30808]">Ingredientes</h1>
            <div className="flex flex-col gap-5">
              <span className="text-zinc-600">
                {ingredients ? ingredients : "Não disponível"}
              </span>
            </div>
          </div>

          <div>
            <h1 className="text-xl font-bold text-[#f30808]">
              Modo de Conservação
            </h1>
            <div className="flex flex-col gap-5">
              <span className="text-zinc-600">
                {ingredients ? ingredients : "Não disponível"}
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Definitions;
