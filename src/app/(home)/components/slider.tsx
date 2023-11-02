'use client'
import * as React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import CardProd from "./cardProd"

interface Props {
  children: React.ReactNode
}
export default function Slide({ children }: Props) {
  const [ref] = useKeenSlider<HTMLDivElement>({
    breakpoints: {
      "(min-width: 696px)": {
        slides: {
          perView: 2,
          spacing: 5
        },
      },
      "(min-width: 1440px)": {
        slides: {
          perView: 3,
          spacing: 10,
        },
      },
    },
    slides: {
      perView: 1,
    },
    loop: true,


  })
  return (
    <div ref={ref} className="keen-slider">
      {children}
    </div>
  )
}
