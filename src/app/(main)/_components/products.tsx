import Container from "@/components/container";
import Image from "next/image";
import { Pimenta, Queijo } from "../../../../public/assets";
import CarouselSwiper from "@/components/carousel-swiper";
import { getProducts } from "@/sanity/querys/products";

const Products = async () => {
  const products = await getProducts();

  console.log(products);

  return (
    <section className="w-full overflow-hidden relative py-10 bg-[#F30808]">
      <Image
        src={Pimenta}
        className="absolute -top-2 w-[200px] rotate-12 "
        alt="Tomate e folhas"
        quality={100}
        loading="lazy"
      />
      <Image
        src={Queijo}
        className="absolute w-[150px] right-32 top-10 z-20 "
        alt="Queijos"
        quality={100}
        loading="lazy"
      />

      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 480 480"
          className="absolute w-[400px] -right-32 top-[47em] rotate-x-12"
        >
          <path
            d="M360 289.7c43.4 0 86.9-16.6 120-49.7a169.2 169.2 0 0 0-120-49.7 169.2 169.2 0 0 0 49.7-120c-46.9 0-89.3 19-120 49.7 0-43.4-16.6-86.9-49.7-120a169.2 169.2 0 0 0-49.7 120 169.2 169.2 0 0 0-120-49.7c0 46.8 19 89.3 49.7 120-43.4 0-86.9 16.6-120 49.7a169.2 169.2 0 0 0 120 49.7 169.2 169.2 0 0 0-49.7 120c46.8 0 89.3-19 120-49.7 0 43.4 16.6 86.9 49.7 120a169.2 169.2 0 0 0 49.7-120 169.2 169.2 0 0 0 120 49.7c0-46.9-19-89.3-49.7-120Z"
            fill="#FFF484 "
          ></path>
        </svg>
      </div>

      <Container>
        <div className="w-full flex flex-row justify-between items-center">
          <h1 className="text-[4em] max-w-[500px] font-bold text-white">
            Conheça nossos produtos
          </h1>
        </div>
      </Container>

      <CarouselSwiper products={products} />

      <div className="w-full flex flex-row justify-center mt-20"></div>
    </section>
  );
};

export default Products;
