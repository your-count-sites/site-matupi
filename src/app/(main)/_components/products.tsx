import Container from "@/components/container";
import React from "react";

const Products = () => {
  return (
    <section className="w-full overflow-hidden mt-[100px]">
      <Container>
        <div className="w-full flex flex-row justify-between items-center">
          <h1 className="text-[4em] max-w-[500px] font-bold text-red-600">
            Conheça nossos produtos
          </h1>

          <select className="border w-[20%] rounded-lg p-3">
            <option value="">queijos</option>
          </select>
        </div>

        <div className="grid grid-cols-3 gap-10 mt-[50px]">
          {Array.from({ length: 9 }).map((_, index) => (
            <div className="flex flex-col gap-3">
              <div className="bg-gray-300 w-full h-[200px]" />
              <span>Test {index + 1}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Products;
