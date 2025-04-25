import Container from "@/components/container";
import Image from "next/image";
import React from "react";
import { HeroSobre, ImageEmploye, WaveRed } from "../../../../public/assets";

const EmployeSection = () => {
  return (
    <section className="w-full overflow-hidden bg-white pb-42 pt-20 relative ">
      <Container>
        <div className="w-full flex flex-row justify-between items-center">
          <div>
            <Image
              src={ImageEmploye}
              width={500}
              height={400}
              quality={100}
              loading="lazy"
              alt="Sobre"
            />
          </div>
          <div className="max-w-[600px] flex flex-col gap-3">
            <span className="text-[#f30808] text-lg">Nosso time</span>
            <h1 className="text-[3.5rem] text-[#f30808]">Quem faz a Matupi</h1>
            <p className="text-lg">
              Uma empresa é feita de pessoas. Aqui, quem está no campo, na
              fábrica ou no atendimento carrega o mesmo compromisso: entregar um
              produto que orgulha.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default EmployeSection;
