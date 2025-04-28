"use client";
import Container from "@/components/container";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ContatoBg, ServiceBanner } from "../../../public/assets";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().min(1, "Insira seu nome"),
  email: z.string().min(1, "Insira o seu e-mail"),
  phone: z.string().min(1, "Insira seu telefone"),
});

export type ContactSchema = z.infer<typeof contactSchema>;

const Servicos = () => {
  const [isLoading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactSchema) => {
    try {
      setLoading(true);
      await axios
        .post("/api", {
          name: data.name,
          email: data.email,
          phone: data.phone,
        })
        .then((response) => {
          return response.data;
        });
      reset();
      toast(
        "Obrigado por nos enviar seu contato. Entraremos em contato o mais breve possível"
      );
      setLoading(false);
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
              <div className="w-full flex flex-row justify-between py-32">
                <div className="flex flex-col gap-5 w-[40%]">
                  <span className="text-lg text-zinc-800">SOMOS MATUPI</span>
                  <h1 className="text-4xl font-semibold text-[#f30808]">
                    Seja um Parceiro Matupi
                  </h1>
                  <span className="text-lg text-zinc-600">
                    Preencha o formulário abaixo e nossa equipe comercial
                    entrará em contato para apresentar nossas linhas de
                    laticínios e condições especiais para parceiros. Estamos
                    ansiosos para crescer junto com o seu negócio!
                  </span>

                  <div className="flex flex-col gap-5 mt-8">
                    <h1 className="text-xl font-normal">
                      Ou entre em contato pelas redes:
                    </h1>
                    <div className="flex flex-row gap-5">
                      <Link href={"/"} className="p-2 bg-[#f30808] rounded-lg">
                        <FaWhatsapp size={25} color="#fff" />
                      </Link>

                      <Link
                        href={"https://www.instagram.com/grupomatupi/"}
                        className="p-2 bg-[#f30808] rounded-lg"
                      >
                        <FaInstagram size={25} color="#fff" />
                      </Link>

                      <Link
                        href={
                          "https://www.facebook.com/grupomatupi?locale=pt_BR"
                        }
                        className="p-2 bg-[#f30808] rounded-lg"
                      >
                        <FaFacebookF size={25} color="#fff" />
                      </Link>
                    </div>
                  </div>
                </div>

                <form
                  className="w-[500px] flex flex-col gap-8"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="flex flex-col gap-2">
                    <label htmlFor="" className="text-zinc-600">
                      NOME COMPLETO *
                    </label>
                    <input
                      type="text"
                      className="rounded-md p-3 border border-zinc-600 outline-none w-full"
                      {...register("name")}
                    />
                    <span className="text-red-700 p-3">
                      {errors.name?.message}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="" className="text-zinc-600">
                      E-MAIL*
                    </label>
                    <input
                      type="email"
                      className="rounded-md p-3 border border-zinc-600 outline-none w-full"
                      {...register("email")}
                    />
                    <span className="text-red-700 p-3">
                      {errors.email?.message}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="" className="text-zinc-600">
                      TELEFONE *
                    </label>
                    <input
                      type="tel"
                      className="rounded-md p-3 border border-zinc-600 outline-none w-full"
                      {...register("phone")}
                    />
                    <span className="text-red-700 p-3">
                      {errors.phone?.message}
                    </span>
                  </div>

                  <Button className="py-8 hover:opacity-80" type="submit">
                    <span className="text-white text-xl font-semibold ">
                      {isLoading ? <div className="loader"></div> : "Salvar"}
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
