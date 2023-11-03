import api from "@/service/api"
import { Product } from "@/types/product"
import z from "zod"

interface ProductProps {
  params: {
    id: string
  }
}

export interface Response {
  products: Product
}

async function getProduct(id: string): Promise<Response> {
  const response = await api(`api/products/${id}`)
  const res = await response.json()
  return res
}
export default async function PageProduct({ params }: ProductProps) {
  const number = parseInt(params.id);
  const res = await getProduct(params.id)

  return (
    <div>
      <h1></h1>
    </div>
  )
}