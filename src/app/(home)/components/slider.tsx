'use client'
import * as React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import CardProd from "./cardProd"

export default function Slide() {
  const [ref] = useKeenSlider<HTMLDivElement>({
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 2, spacing: 10 },
      },
    },
    slides: { perView: 1 },
  })
  return (
    <div ref={ref} className="keen-slider">
      <CardProd />
      <CardProd />
      <CardProd />
      <CardProd />
      <CardProd />
      <CardProd />
    </div>
  )
}
// width: 696px;
// height: 656px;
// border-radius: 8px;
// background: linear-gradient(180deg, #1EA483 0%, #7465D4 100%);
// box-shadow: 0px 0px 48px 0px rgba(0, 0, 0, 0.90);