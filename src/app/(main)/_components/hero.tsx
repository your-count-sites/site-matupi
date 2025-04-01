import Container from "@/components/container";
import React from "react";

const Hero = () => {
  return (
    <section className="w-full overflow-hidden bg-gray-300 py-52 ">
      <Container>
        <div className="max-w-[700px]">
          <h1 className="text-[3em] font-black">
            Queijo de verdade, tradição e qualidade em cada pedaço.
          </h1>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
