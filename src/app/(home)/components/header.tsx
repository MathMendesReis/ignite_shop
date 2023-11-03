import Logo from "@/components/logo";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-[1038px] pt-8 pb-8 cursor-pointer" >
      <Link href={'/'}>
        <Logo />
      </Link>
    </header>
  )
}