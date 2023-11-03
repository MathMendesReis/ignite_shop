import BgGradienteDefault from "@/components/bgGradienteDefaut";
import ImageProduct from "@/components/imageProduct";
import NameProduct from "@/components/nameProduct";
import PriceProduct from "@/components/price-product";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";

interface Product {
  id: string;
  title: string;
  price: Stripe.Price;
  image: string;
}
export default function CardProd({
  id,
  title,
  price,
  image,
}: Product) {

  return (
    <BgGradienteDefault id={id} href={`/product/${id}`}>
      <ImageProduct image={image} width={520} height={480} />
      <footer className="w-full h-[6.125rem] pl-8 pr-10 py-8 bg-neutral-800 bg-opacity-90 rounded-md justify-between items-center inline-flex">
        <NameProduct title={title} />
        <PriceProduct price={price} />
      </footer>
    </BgGradienteDefault>

  )
}
