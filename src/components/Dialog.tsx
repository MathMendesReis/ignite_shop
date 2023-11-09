"use client"

import useCartState from "@/context/cart/store"
import CartState from "@/context/cart/store"
import ModalState from "@/context/modal-cart/store"
import ClosedIcon from "@/icons/closedIcon"
import Image from "next/image"

type Props = {
  children: React.ReactNode,
}

export default function Dialog() {
  const { show, toggleShow } = ModalState()
  const { cartItems, removeCartItem,cartTotal } = useCartState()


  if (!show) {
    return null;
  }

  return (
    <dialog className="fixed top-0 left-[74%] h-[900px] w-[480px] bg-zinc-950 p-3 flex flex-col items-center justify-start gap-3">
      <div className="w-full flex items-center justify-center">
        <button
          className="ml-[80%]"
          onClick={toggleShow}
        >
          <ClosedIcon />
        </button>
      </div>
      <div>
        <h1 className="text-zinc-200 text-xl font-bold font-['Roboto'] leading-loose">Sacola de compras</h1>
      </div>
      <section className="w-full h-[700px] flex flex-col gap-2">
        {cartItems.map((item) => (
          <article key={item.id} className="w-96 h-[94px] flex items-center gap-5">
            <section className="w-[101.94px] h-[93px] px-[3.58px] bg-gradient-to-b from-teal-600 to-indigo-500 rounded-lg flex justify-center items-center">
              <div className="w-95 h-95">
                <Image width={95} height={95} src={item.images[0]} alt={""} />
              </div>
            </section>
            <section className="flex-grow flex-shrink flex-col justify-start items-start gap-2">
              <div className="h-[60px] flex flex-col justify-start items-start gap-0.5">
                <p className="text-stone-300 text-lg font-normal font-['Roboto'] leading-[28.80px]">Camiseta Beyond the Limits</p>
                <p className="text-zinc-200 text-lg font-bold font-['Roboto'] leading-[28.80px]">R$ 79,90</p>
              </div>
              <div className="flex justify-center items-center gap-2.5">
                <button
                  onClick={() => removeCartItem(item.id)}
                  className="mr-auto">
                  <p className="text-emerald-700 text-base font-bold font-['Roboto'] leading-relaxed">Remover</p>
                </button>
              </div>
            </section>
          </article>
        ))}
      </section>
      <table className="w-[384px] ">
        <tr>
          <td className="text-zinc-200 text-base font-normal font-['Roboto'] leading-relaxed">Quantidade</td>
          <td className="text-zinc-200 text-base font-normal font-['Roboto'] leading-relaxed">{cartItems.length}</td>
        </tr>
        <tr>
          <td className="text-zinc-200 text-base font-normal font-['Roboto'] leading-relaxed">Valor total</td>
          <td className="text-zinc-200 text-base font-normal font-['Roboto'] leading-relaxed">{cartTotal}</td>
        </tr>

      </table>
      <button className="w-96 h-[69px] px-8 py-5 bg-emerald-700 rounded-lg justify-center items-center gap-2.5 inline-flex">
        <p className="text-white text-lg font-bold font-['Roboto'] leading-[28.80px]">Finalizar compra</p>
      </button>
    </dialog>
  )
}
