import CardProd from "./components/cardProd";
import Slide from "./components/slider";

export default function Home() {
  return (
    <div className="w-[1440px] min-h-[50rem] flex items-center justify-center ml-[13%]">
      <Slide>
        <CardProd />
        <CardProd />
        <CardProd />
        <CardProd />
      </Slide>
    </div>
  )
}