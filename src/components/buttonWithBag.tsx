"use client"
import ModalState from "@/context/modal-cart/store";
import { BagSimple } from "@phosphor-icons/react/dist/ssr";



export default function ButtonWithBag() {
  const {toggleShow} = ModalState()
  return (
    <button onClick={toggleShow} className="bg-[#202024] p-3 rounded-md">
      <BagSimple size={32} color="#8D8D99" />
    </button>
  )
}