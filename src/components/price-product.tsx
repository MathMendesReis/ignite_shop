import Stripe from "stripe";
interface Props {
  price: Stripe.Price
}
export default function PriceProduct({ price }: Props) {
  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format((price.unit_amount ?? 0) / 100)
  return <p className=" text-emerald-500 text-2xl font-bold font-['Roboto'] leading-[33.60px]">{formattedPrice}
  </p>
}