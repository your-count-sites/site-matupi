import Container from "@/components/container";
import { Compass, Divide, Eye, TargetIcon } from "lucide-react";
import React from "react";

export const PROPOSALS = [
  {
    title: "Missão",
    description:
      "Oferecer ao mercado produto de qualidade, fornecendo serviço com elevando padrão percebido por todos, com os colaboradores bem-motivados para buscar uma satisfação e confiabilidade aos nossos clientes e fornecedores.",
    icon: <TargetIcon size={24} />,
  },
  {
    title: "Visão",
    description:
      "Ser referência no mercado em destruição de produtos alimentícios, buscando a inovação e qualidade nos processos e serviços oferecidos, ética e agilidade juntos aos seus clientes. ",
    icon: <Eye size={24} />,
  },
  {
    title: "Valores",
    description:
      "Para que nossos objetivos sejam alcançados, nossos professionais se baseiam em pilares: Respeito, transparência, responsabilidade, paciência, persistência.",
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
                className="flex flex-col border justify-between overflow-hidden relative h-[310px] w-full bg-white rounded-lg shadow-md text-[#f30808]"
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
