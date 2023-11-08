"use client"
import ButtonWithBag from "@/components/buttonWithBag";
import Logo from "@/components/logo";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-[1038px] pt-8 pb-8 flex items-center justify-between " >
      <Link href={'/'} className="cursor-pointer">
        <Logo />
      </Link>
      <ButtonWithBag />
    </header>
  )
}