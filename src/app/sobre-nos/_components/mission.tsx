import Container from "@/components/container";
import { Compass, Divide, Eye, TargetIcon } from "lucide-react";
import React from "react";

export const PROPOSALS = [
  {
    title: "Missão",
    description:
      "Produzir laticínios com qualidade, confiança e cuidado em cada etapa, valorizando colaboradores e satisfazendo clientes e parceiros.",
    icon: <TargetIcon size={24} />,
  },
  {
    title: "Visão",
    description:
      "Ser reconhecida nacionalmente como referência no setor de alimentos, com entregas consistentes pautadas na inovação, agilidade, responsabilidade e ética. ",
    icon: <Eye size={24} />,
  },
  {
    title: "Valores",
    description:
      "Trabalhamos com respeito, transparência e responsabilidade, guiados pela paciência no processo e pela persistência em crescer com qualidade.",
    icon: <Compass size={24} />,
  },
];

const Mission = () => {
  return (
    <section className="w-full overflow-hidden py-24">
      <Container>
        <div className="w-full flex flex-col gap-8">
          <h1 className="text-[#f30808] text-[2.5em] max-w-[450px] font-semibold">
            Propósito alinhado com o futuro
          </h1>
          <div className="w-full flex flex-row gap-5">
            {PROPOSALS.map((item, index) => (
              <div
                key={index}
                className="flex flex-col border justify-between overflow-hidden relative h-[260px] w-full bg-white rounded-lg shadow-md text-[#f30808]"
              >
                <div className="flex flex-col gap-1 p-5 ">
                  {item.icon}
                  <h1 className="text-[1.1em] font-semibold mt-5">
                    {item.title}
                  </h1>
                  <span className="text-md text-zinc-600">
                    {item.description}
                  </span>
                </div>

                <div className="w-20 h-20 bg-[#f30808] rounded-full absolute -bottom-10 -left-8" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Mission;
