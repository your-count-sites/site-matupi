import Container from "@/components/container";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { products } from "@/constants";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Background2 } from "../../../../public/assets";
import Image from "next/image";

const Products = () => {
  return (
    <section className="w-full overflow-hidden relative py-52 ">
      <Container>
        <div className="w-full flex flex-row justify-between items-center">
          <h1 className="text-[4em] max-w-[500px] font-bold text-white">
            Conheça nossos produtos
          </h1>

          <Select>
            <SelectTrigger className="w-[300px] ">
              <SelectValue placeholder="Selecione a categoria" />
            </SelectTrigger>
            <SelectContent className="bg-white ">
              <SelectItem value="queijos">Queijos</SelectItem>
              <SelectItem value="manteigas">Manteigas</SelectItem>
              <SelectItem value="requeijoes">Requeijões</SelectItem>
              <SelectItem value="doce-de-leite">Doce de Leite</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-3 gap-10 mt-[50px]">
          {products.map((item, index) => (
            <div className="flex flex-col gap-3" key={index}>
              <div className="bg-gray-300 w-full h-[200px]" />
              <span>{item.title}</span>
            </div>
          ))}
        </div>

        <div className="w-full flex flex-row justify-center mt-20">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </Container>
    </section>
  );
};

export default Products;
