import {
  CircleAlert,
  CircleCheck,
  Clock,
  Flame,
  ForkKnife,
} from "lucide-react";
import Image from "next/image";
import React, { Suspense } from "react";
import {
  BandeijaComTampa,
  Cheeses,
  EasyIcon,
  Frigideira,
  HardIcon,
  MediumIcon,
  Saleiro,
  Tomato,
} from "../../../../../public/assets";
import { urlFor } from "@/sanity/lib/image";
import Container from "@/components/container";

const HeroRecipe = ({ recipe }: { recipe: IRecipe }) => {
  return (
    <section className="w-full overflow-hidden ">
      <Image
        src={Saleiro}
        className="absolute top-14 lg:w-[200px] w-[100px] left-8 "
        alt="Tomate e folhas"
        quality={100}
        loading="lazy"
      />

      <Image
        src={Frigideira}
        className="absolute lg:w-[200px] w-[100px] right-8 "
        alt="Queijos"
        quality={100}
        loading="lazy"
      />

      <Container>
        <div className="w-full flex lg:flex-row flex-col gap-20 items-center justify-between py-10 ">
          <Image
            src={BandeijaComTampa}
            className="absolute w-[150px] left-200 bottom-50 -rotate-20"
            alt="Queijos"
            quality={100}
            loading="lazy"
          />
          <div className="flex flex-col gap-8 max-w-[600px]">
            <span className="px-8 py-2 bg-red-500 text-white rounded-full w-fit font-bold text-lg">
              {recipe.category}
            </span>
            <h1 className="lg:text-[3.2em] text-[2em] font-medium font-(family-name:--font-sora) text-red-600 ">
              {recipe.title}
            </h1>

            <p className="text-xl text-zinc-500 text-medium font-(family-name:--font-sora)">
              {recipe.description}
            </p>

            <div className="flex lg:flex-row flex-col gap-8 lg:items-center">
              <span className="flex flex-row gap-2 text-xl font-semibold text-zinc-600 ">
                <Clock color="red" />
                {recipe.prepTime}
              </span>

              <span className="flex flex-row gap-2 text-xl font-semibold text-zinc-600">
                <ForkKnife color="red" />
                {recipe.servings}
              </span>
              <span className="flex flex-row gap-2 text-xl font-semibold text-zinc-600 items-center">
                <DifficultyIcon difficult={recipe.difficult} />
                {recipe.difficult}
              </span>
            </div>
          </div>

          <div className="relative h-[500px] w-[600px] flex items-center justify-center">
            <div className=" absolute top-14 right-0 h-full w-full rounded-2xl ">
              <figure className="mx-auto w-full max-w-[600px] h-[400px] overflow-hidden rounded-4xl">
                <Suspense fallback={<h1 className="text-black">Loading...</h1>}>
                  <Image
                    src={urlFor(recipe.mainImage).url()}
                    width={900}
                    height={500}
                    className="rounded-2xl w-full object-cover h-full"
                    alt={recipe.title}
                  />
                </Suspense>
              </figure>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 480 480"
              className="absolute w-[700px] h-[800px] -z-10"
            >
              <path
                d="M409.7 409.7c33.2-33.2 23.8-100.2-17.9-169.7 41.7-69.6 51.1-136.5 18-169.7C376.4 37 309.4 46.5 240 88.2 170.4 46.5 103.5 37 70.3 70.2 37 103.6 46.5 170.5 88.2 240c-41.7 69.5-51.1 136.5-18 169.7 33.3 33.2 100.2 23.8 169.8-17.9 69.5 41.7 136.5 51.1 169.7 18Z"
                fill="#f33c3c"
              ></path>
            </svg>
          </div>
        </div>
      </Container>
    </section>
  );
};

const DifficultyIcon = ({ difficult }: { difficult: string }) => {
  const getIcon = () => {
    switch (difficult.toLowerCase().trim()) {
      case "fácil":
        return <Image src={EasyIcon} alt="easy" width={60} />;
      case "média":
        return <Image src={MediumIcon} alt="medium" width={60} />;
      case "difícil":
        return <Image src={HardIcon} alt="medium" width={60} />;
    }
  };

  return <div>{getIcon()}</div>;
};

export default HeroRecipe;
