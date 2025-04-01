import Container from "@/components/container";
import React from "react";

const Services = () => {
  return (
    <section className="w-full overflow-hidden mt-[100px]">
      <Container>
        <div className="w-full flex flex-col items-center justify-center gap-5">
          <h1 className="text-[4em] font-bold">Serviços</h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            tenetur saepe aliquid at sed accusantium minima ducimus
          </p>
        </div>

        <div className="w-full grid grid-cols-2 gap-10 mt-[50px]">
          <div className="w-full border rounded-xl p-32">
            <h1 className="text-[3em] font-bold flex flex-col justify-center items-center">
              Parceiros
            </h1>
          </div>
          <div className="w-full border rounded-xl p-32">
            <h1 className="text-[3em] font-bold flex flex-col justify-center items-center">
              Trabalhe Conosco
            </h1>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Services;
