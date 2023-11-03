import Image from "next/image";

interface Props {
  image: string
  width: number
  height: number
}
export default function ImageProduct({ image, height, width }: Props) {
  return <Image src={image} alt="" quality={100} width={520} height={480} />
}