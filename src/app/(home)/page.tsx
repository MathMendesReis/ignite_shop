import api from "@/service/api";
import CardProd from "./components/cardProd";
import Slide from "./components/slider";
import { Response } from "@/types/product";

async function getAllProducts(): Promise<Response> {
  const response = await api(`/api/products/featured`)
  const products: Response = await response.json()
  return products
}

export default async function Home() {
  const { products } = await getAllProducts()
  return (
    <div className="w-[1440px] min-h-[50rem] flex items-center justify-center ml-[13%]">
      <Slide>
        {products.map((item) => (
          <CardProd
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
          />
        ))}
      </Slide>
    </div>
  )
}