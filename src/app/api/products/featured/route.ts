import data from '@/app/api/data.json'

export async function GET() {
  const featuredProducts = data.products;
  return Response.json(featuredProducts);
}