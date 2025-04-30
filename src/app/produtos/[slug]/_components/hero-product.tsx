import Container from "@/components/container";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { IProduct } from "@/@types/IProduct";
import { Cheeses, Tomato } from "../../../../../public/assets";
import { IconPhoto } from "@tabler/icons-react";

const HeroProduct = ({
  title,
  nutritionFacts,
  mainImage,
  warnings,
}: IProduct) => {
  return (
    <section className="w-full overflow-hidden py-20 relative">
      <Container>
        <div className="w-full flex lg:flex-row flex-col gap-10 justify-between items-center">
          <div className="flex flex-col gap-8">
            <h1 className="lg:text-[4em] text-[2.5em] font-normal text-[#f30808] max-w-[600px]">
              {title}
            </h1>
            <Dialog>
              <DialogTrigger asChild>
                <button
                  className="group w-fit bg-transparent text-[#f30808] border-2 border-[#f30808] rounded-full flex flex-row gap-3 items-center text-md py-2 
              hover:bg-[#f30808] hover:text-white cursor-pointer px-5"
                >
                  Ver tabela nutricional
                  <ArrowRight className="group-hover:translate-x-2 transition-all ease-in-out duration-300 " />
                </button>
              </DialogTrigger>
              <DialogContent className="p-10">
                <VisuallyHidden>
                  <DialogTitle>Tabela nutricional</DialogTitle>
                </VisuallyHidden>
                {nutritionFacts ? (
                  <Image
                    src={urlFor(nutritionFacts).url()}
                    alt="alternative-text"
                    width={500}
                    height={200}
                  />
                ) : (
                  <p className="text-center text-lg">
                    Tabela nutricional não disponível
                  </p>
                )}
              </DialogContent>
            </Dialog>

            <div className="flex flex-col gap-3 text-xl text-zinc-600 uppercase">
              <h3>Alérgicos:</h3>

              {warnings.map((item) => (
                <span key={item._key}>{item.warnings}</span>
              ))}
            </div>
          </div>

          <div className="relative h-[500px] w-[600px] flex items-center justify-center">
            <div className=" absolute top-14 right-0 h-full w-full rounded-2xl ">
              <figure className="mx-auto w-full max-w-[500px] h-[400px] flex items-center justify-center overflow-hidden rounded-4xl bg-white border shadow-md">
                {mainImage ? (
                  <Image
                    src={urlFor(mainImage).url()}
                    alt="Tabela nutricional"
                    width={1000}
                    height={200}
                    className="w-[400px] h-[400px] object-cover"
                  />
                ) : (
                  <IconPhoto />
                )}
              </figure>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 480 480"
              className="lg:flex hidden absolute w-[550px] h-[800px] -z-10"
            >
              <path
                d="M437.3 158.3A99.5 99.5 0 0 0 321.6 42.8a99.5 99.5 0 0 0-163.4 0A99.5 99.5 0 0 0 42.7 158.3a99.5 99.5 0 0 0 0 163.4 99.5 99.5 0 0 0 115.6 115.6 99.5 99.5 0 0 0 163.4 0 99.5 99.5 0 0 0 115.5-115.6 99.5 99.5 0 0 0 0-163.4Z"
                fill="#f30808"
              ></path>
            </svg>
          </div>

          {/* <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 480 480"
              className="lg:flex hidden absolute -top-18 right-58 w-[620px] h-[800px] -z-10"
            >
              <path
                d="M437.3 158.3A99.5 99.5 0 0 0 321.6 42.8a99.5 99.5 0 0 0-163.4 0A99.5 99.5 0 0 0 42.7 158.3a99.5 99.5 0 0 0 0 163.4 99.5 99.5 0 0 0 115.6 115.6 99.5 99.5 0 0 0 163.4 0 99.5 99.5 0 0 0 115.5-115.6 99.5 99.5 0 0 0 0-163.4Z"
                fill="#f30808"
              ></path>
            </svg>
            <div className="lg:w-[450px] lg:h-[500px] md:w-[450px] md:h-[500px] w-[300px] h-[400px] shadow-lg rounded-[20px] flex flex-row justify-center items-center border bg-white">
              {mainImage ? (
                <Image
                  src={urlFor(mainImage).url()}
                  alt="Tabela nutricional"
                  width={600}
                  height={200}
                  className="w-[400px] h-[400px] object-cover"
                />
              ) : (
                <IconPhoto />
              )}
            </div>
          </div> */}
        </div>
      </Container>
    </section>
  );
};

export default HeroProduct;
