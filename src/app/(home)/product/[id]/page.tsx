import BgGradienteDefault from "@/components/bgGradienteDefaut"
import ButtonAddCart from "@/components/buttonAddCart"
import ImageProduct from "@/components/imageProduct"
import NameProduct from "@/components/nameProduct"
import PriceProduct from "@/components/price-product"
import useCartState from "@/context/cart/store"
import { stripe } from "@/lib/stripe"
import Stripe from "stripe"

interface ProductProps {
  params: {
    id: string
  }
}

async function getProduct(id: string): Promise<Stripe.Response<Stripe.Product>> {

  const response = await stripe.products.retrieve(id, {
    expand: ["default_price"],
  })
  return response
}
export default async function PageProduct({ params }: ProductProps) {
  const product = await getProduct(params.id)
  return (
    <div className="flex items-center justify-center min-h-[80vh]">
      <section className="w-[1038px] h-[550px]  grid grid-cols-2 grid-rows-1 gap-4">
        <BgGradienteDefault >
          <ImageProduct image={product.images[0]} height={200} width={480} />
        </BgGradienteDefault>
        <div className="flex flex-col gap-3">
          <NameProduct title={product.name} />
          <PriceProduct price={product.default_price as Stripe.Price} />
          <p className="text-[#C4C4CC] text-lg not-italic font-normal leading-[160%]">{product.description}</p>
          <div className="mt-auto">
            <ButtonAddCart product={product}/>
          </div>
        </div>
      </section>
    </div>
  )
}