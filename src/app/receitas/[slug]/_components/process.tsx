import Container from "@/components/container";

export const Process = ({ recipe }: { recipe: IRecipe }) => {
  return (
    <section className="w-full overflow-hidden lg:mt-[100px] mt-[0px]">
      <Container>
        <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-20">
          <div className="flex flex-col gap-8 ">
            <h1 className="text-red-500 uppercase text-md font-semibold font-(family-name:--font-sora)">
              Ingredientes
            </h1>

            <ul className="flex flex-col gap-5 list-disc ml-5">
              {recipe.ingredients.map((item, index) => (
                <li key={item._key} className="text-xl text-zinc-500">
                  {item.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-8 ">
            <h1 className="text-red-500 uppercase text-md font-semibold font-(family-name:--font-sora)">
              Modo de preparo
            </h1>

            <ul className="flex flex-col gap-5">
              {recipe.instructions.map((item, index) => (
                <li
                  key={item._key}
                  className="text-xl flex flex-row gap-5 items-center text-zinc-500"
                >
                  <span className="text-sm font-bold h-fit w-fit py-2 px-4 bg-red-500 text-white rounded-full">
                    {index + 1}
                  </span>
                  {item.step}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};
