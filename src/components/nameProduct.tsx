import Stripe from "stripe";
interface Props {
  title: string
}
export default function NameProduct({ title }: Props) {
  return <p className="text-zinc-200 text-lg font-bold font-['Roboto'] leading-loose">{title}</p>
}