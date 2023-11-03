import { stripe } from "@/lib/stripe";
import CardProd from "./components/cardProd";
import Slide from "./components/slider";
import Stripe from "stripe";

async function getAllProducts(): Promise<Stripe.Response<Stripe.ApiList<Stripe.Product>>> {
  const products = await stripe.products.list({
    expand: ['data.default_price'],
  });
  return products
}

export default async function Home() {
  const { data } = await getAllProducts()
  return (
    <div className="w-[1440px] min-h-[50rem] flex items-center justify-center ml-[13%]">
      <Slide>
        {data.map((item) => {
          const price = item.default_price as Stripe.Price

          return (
            <CardProd
              key={item.id}
              id={item.id}
              title={item.name}
              price={price}
              image={item.images[0]}
            />
          );
        })}
      </Slide>
    </div>
  )
}