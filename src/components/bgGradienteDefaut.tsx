import Link from "next/link"

interface Props {
  children: React.ReactNode
  id?: string
  href?: string
}
export default function BgGradienteDefault({ children, id, href = '' }: Props) {
  return (
    <Link href={href} className="keen-slider__slide  shadow-[0px_0px_48px_0px_rgba(0,0,0,0.90)] rounded-lg 
    bg-[linear-gradient(180deg,_#1EA483_0%,_#7465D4_100%)] flex items-center flex-col  p-1 justify-end " >
      <div>
        {children}
      </div>
    </Link>
  )
}