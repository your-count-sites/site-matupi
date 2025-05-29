import Container from "@/components/container";
import Image from "next/image";
import { Pimenta, Queijo, WaveWhite } from "../../../../public/assets";
import CarouselSwiper from "@/components/carousel-swiper";
import { getProducts } from "@/sanity/querys/products";

const Products = async () => {
  const products = await getProducts();

  return (
    <section className="w-full overflow-hidden relative py-52 bg-[#F30808]">
      <Image
        src={Pimenta}
        className="absolute -top-2 lg:w-[200px] w-[100px] lg:-left-10 -left-5 rotate-90 "
        alt="Tomate e folhas"
        quality={100}
        loading="lazy"
      />
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 480 480"
          className="absolute lg:w-[400px] w-[300px] -right-32 lg:top-[42em] -bottom-28 rotate-x-12"
        >
          <path
            d="M360 289.7c43.4 0 86.9-16.6 120-49.7a169.2 169.2 0 0 0-120-49.7 169.2 169.2 0 0 0 49.7-120c-46.9 0-89.3 19-120 49.7 0-43.4-16.6-86.9-49.7-120a169.2 169.2 0 0 0-49.7 120 169.2 169.2 0 0 0-120-49.7c0 46.8 19 89.3 49.7 120-43.4 0-86.9 16.6-120 49.7a169.2 169.2 0 0 0 120 49.7 169.2 169.2 0 0 0-49.7 120c46.8 0 89.3-19 120-49.7 0 43.4 16.6 86.9 49.7 120a169.2 169.2 0 0 0 49.7-120 169.2 169.2 0 0 0 120 49.7c0-46.9-19-89.3-49.7-120Z"
            fill="#FFF484 "
          ></path>
        </svg>
      </div>
      <Container>
        <div className="flex lg:flex-row flex-col gap-5 justify-between items-center">
          <div className="flex flex-col gap-3">
            <span className="text-[#fff484] font-semibold">
              Produtos especiais!
            </span>
            <div className="w-full flex flex-row justify-between items-center">
              <h1 className="lg:text-[3em] text-[2em] max-w-[600px] font-bold text-white">
                Conheça nossos produtos
              </h1>
            </div>
          </div>

          <div className="max-w-[600px]">
            <span className="text-white lg:text-right text-left font-medium text-xl flex">
              Temos uma linha completa de produtos feitos com carinho, qualidade
              e sabor para toda a sua família
            </span>
          </div>
        </div>
      </Container>
      <CarouselSwiper products={products} />
      <Image
        src={WaveWhite}
        className="absolute -bottom-2 w-full "
        alt="Matupi"
        quality={100}
        loading="lazy"
      />{" "}
    </section>
  );
};

export default Products;
