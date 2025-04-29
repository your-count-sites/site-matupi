"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import Link from "next/link";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import Container from "@/components/container";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import { WaveRed } from "../../../../public/assets";

const contactSchema = z.object({
  name: z.string().min(1, "Insira seu nome"),
  email: z.string().min(1, "Insira o seu e-mail"),
  phone: z.string().min(1, "Insira seu telefone"),
  company: z.string().min(1, "Insira sua empresa"),
  privacyPolicy: z
    .boolean()
    .refine(
      (value) => value === true,
      "Você deve concordar com as políticas de privacidade"
    ),
});

export type ContactSchema = z.infer<typeof contactSchema>;

const ContactForm = () => {
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
    <section className="w-full overflow-hidden mt-10 relative py-20" id="form">
      <div className="w-full ">
        <Container>
          <div className="w-full flex lg:flex-row flex-col gap-14 justify-between pb-32">
            <div className="flex flex-col gap-5 lg:w-[40%] w-full">
              <span className="lg:text-lg text-sm text-zinc-800">
                SOMOS MATUPI
              </span>
              <h1 className="lg:text-4xl text-2xl font-semibold text-[#f30808]">
                Seja um Parceiro Matupi
              </h1>
              <span className="text-lg text-zinc-600">
                Preencha o formulário abaixo e nossa equipe comercial entrará em
                contato para apresentar nossas linhas de laticínios e condições
                especiais para parceiros. Estamos ansiosos para crescer junto
                com o seu negócio!
              </span>

              <div className="flex flex-col gap-5 mt-8">
                <h1 className="text-xl font-normal">
                  Ou entre em contato pelas redes:
                </h1>
                <div className="flex flex-row gap-5">
                  <Link
                    href={
                      "https://api.whatsapp.com/send/?phone=559292711900&text=Ol%C3%A1,%20gostaria%20de%20falar%20com%20um%20representante%20Matupi!&type=phone_number&app_absent=0"
                    }
                    className="p-2 bg-[#f30808] rounded-lg"
                  >
                    <FaWhatsapp size={25} color="#fff" />
                  </Link>

                  <Link
                    href={"https://www.instagram.com/grupomatupi/"}
                    className="p-2 bg-[#f30808] rounded-lg"
                  >
                    <FaInstagram size={25} color="#fff" />
                  </Link>

                  <Link
                    href={"https://www.facebook.com/grupomatupi?locale=pt_BR"}
                    className="p-2 bg-[#f30808] rounded-lg"
                  >
                    <FaFacebookF size={25} color="#fff" />
                  </Link>
                </div>
              </div>
            </div>

            <form
              className="lg:w-[500px] w-full flex flex-col gap-5"
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
                <span className="text-red-700 p-1">{errors.name?.message}</span>
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
                <span className="text-red-700 p-1">
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
                <span className="text-red-700 p-1">
                  {errors.phone?.message}
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-zinc-600">
                  EMPRESA *
                </label>
                <input
                  type="tel"
                  className="rounded-md p-3 border border-zinc-600 outline-none w-full"
                  {...register("company")}
                />
                <span className="text-red-700 p-1">
                  {errors.company?.message}
                </span>
              </div>

              <div className="flex flex-col ">
                <div className="flex flex-row gap-3">
                  <input type="checkbox" {...register("privacyPolicy")} />
                  <label htmlFor="">
                    Li e concordo com a{" "}
                    <Link
                      href={"/politica-de-privacidade"}
                      className="underline hover:text-[#f30808]"
                    >
                      Política de privacidade
                    </Link>
                  </label>
                </div>
                <span className="text-red-700 p-3">
                  {errors.privacyPolicy?.message}
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
      <Image
        src={WaveRed}
        className="absolute -bottom-2 w-full "
        alt="Receitas"
        quality={100}
        loading="lazy"
      />
    </section>
  );
};

export default ContactForm;
