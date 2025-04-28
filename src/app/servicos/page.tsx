"use client";
import Container from "@/components/container";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ContatoBg, ServiceBanner } from "../../../public/assets";
import Link from "next/link";

const contactSchema = z.object({
  name: z.string().min(1, "Insira seu nome"),
  email: z.string().min(1, "Insira o seu e-mail"),
  phone: z.string().min(1, "Insira seu telefone"),
});

export type ContactSchema = z.infer<typeof contactSchema>;

const Servicos = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactSchema) => {
    try {
      await axios
        .post("/api", {
          name: data.name,
          email: data.email,
          phone: data.phone,
        })
        .then((response) => {
          return response.data;
        });
    } catch (error) {
      return error;
    }
  };

  return (
    <main className="w-full overflow-hidden  ">
      <section className="w-full overflow-hidden relative">
        <div className="w-full absolute z-10 top-5">
          <Container>
            <div className="w-full flex flex-row justify-end py-32">
              <div className="flex flex-col gap-5 max-w-[700px]">
                <span className="text-zinc-500 lg:text-md text-sm font-semibold uppercase  font-(family-name:--font-sora)">
                  Fale com um Representante Matupi
                </span>

                <h1 className="lg:text-[3.5em] text-[2em] leading-tight text-[#f30808]  font-(family-name:--font-sora)">
                  Conecte-se com Nossa Equipe Comercial
                </h1>

                <h2 className="lg:text-xl text-md text-[#f30808]">
                  Escolha o canal ideal para entrar em contato com um
                  representante e descubra como levar os sabores da Matupi para
                  o seu negócio.
                </h2>

                <Link
                  href={"/sobre-nos"}
                  className="group w-fit bg-transparent text-[#f30808] border-2  border-[#f30808] rounded-full flex flex-row gap-3 py-3 items-center text-xl 
              hover:bg-[#f30808] hover:text-white cursor-pointer px-10"
                >
                  Saiba mais{" "}
                </Link>
              </div>
            </div>
          </Container>
        </div>
        <Image src={ServiceBanner} alt="Matupi" className="lg:flex hidden" />
      </section>

      <section className="w-full overflow-hidden">
        <Container>
          <div className="w-full ">
            <Container>
              <div className="w-full flex flex-row justify-end py-32">
                <form
                  className="w-[500px] flex flex-col gap-8"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="flex flex-col gap-2">
                    <label htmlFor="" className="text-zinc-400">
                      NOME COMPLETO *
                    </label>
                    <input
                      type="text"
                      className="rounded-md p-3 border-2 outline-none w-full"
                      {...register("name")}
                    />
                    <span className="text-red-700 p-3">
                      {errors.name?.message}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="" className="text-zinc-400">
                      E-MAIL*
                    </label>
                    <input
                      type="email"
                      className="rounded-md p-3 border-2 outline-none w-full"
                      {...register("email")}
                    />
                    <span className="text-red-700 p-3">
                      {errors.email?.message}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="" className="text-zinc-400">
                      TELEFONE *
                    </label>
                    <input
                      type="tel"
                      className="rounded-md p-3 border-2 outline-none w-full"
                      {...register("phone")}
                    />
                    <span className="text-red-700 p-3">
                      {errors.phone?.message}
                    </span>
                  </div>

                  <Button className="py-8 hover:opacity-80" type="submit">
                    <span className="text-white text-xl font-semibold ">
                      Salvar
                    </span>
                  </Button>
                </form>
              </div>
            </Container>
          </div>
        </Container>
      </section>
    </main>
  );
};
export default Servicos;
