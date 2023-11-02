import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}
export default function CardProd({
  id,
  title,
  price,
  image,
}: Product) {
  return (
    <Link href={``} className="keen-slider__slide  shadow-[0px_0px_48px_0px_rgba(0,0,0,0.90)] rounded-lg 
    bg-[linear-gradient(180deg,_#1EA483_0%,_#7465D4_100%)] flex items-center flex-col  p-1 justify-end " >
      <Image src={'/Card2.png'} alt="" quality={100} width={520} height={480} className="m-auto" />
      <footer className="w-full h-[6.125rem] pl-8 pr-10 py-8 bg-neutral-800 bg-opacity-90 rounded-md justify-between items-center inline-flex">
        <p className="text-zinc-200 text-xl font-bold font-['Roboto'] leading-loose">{title}</p>
        <p className="text-right text-emerald-500 text-2xl font-bold font-['Roboto'] leading-[33.60px]">{price.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })}</p>
      </footer>
    </Link>

  )
}
