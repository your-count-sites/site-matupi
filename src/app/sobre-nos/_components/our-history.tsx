import Container from "@/components/container";
import Image from "next/image";
import React from "react";
import { FabricaMatupi, WaveWhite } from "../../../../public/assets";

const OurHistory = () => {
  return (
    <section className="w-full overflow-hidden bg-[#f30808] pb-28 pt-20 relative">
      <Image
        src={WaveWhite}
        className="absolute -bottom-10 w-full  "
        alt="Receitas"
        quality={100}
        loading="lazy"
      />

      <Container>
        <div className="w-full flex flex-row justify-between">
          <div className="max-w-[500px] flex flex-col gap-5 text-white">
            <span className="text-lg"> Matupi</span>
            <h1 className="text-[2.5em] text-[#fff484] font-bold">
              Nossa História
            </h1>
            <p className="text-lg">
              A Matupi nasceu com um propósito claro: valorizar as raízes
              amazônicas e transformar o melhor da produção local em produtos
              que carregam identidade, qualidade e afeto.
            </p>

            <p className="text-lg">
              No coração da floresta, entre saberes tradicionais e inovação,
              crescemos com os pés firmes no chão vermelho e os olhos voltados
              para o futuro. Tudo começou com um sonho familiar, e hoje somos
              uma laticínios reconhecida pelo cuidado em cada etapa — do campo
              até a sua mesa.
            </p>
          </div>

          <div>
            <Image
              src={FabricaMatupi}
              width={600}
              height={400}
              quality={100}
              loading="lazy"
              alt="Sobre"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurHistory;
