import React from 'react'
type Width = '24' | '32'
type Height = '24' | '32'
type FillColor = '#8D8D99' | '#FFFFFF'
interface Props {
  width:Width
  height:Height
  fillColor:FillColor
}
export default function IconBag({width,height,fillColor}:Props) {
  return (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.42488 5.625H19.5749V6.75L19.5802 5.62501C20.0381 5.62716 20.4796 5.79601 20.8221 6.1C21.1646 6.40398 21.3847 6.82229 21.4413 7.27675L21.443 7.29158L22.774 19.289C22.774 19.2896 22.7741 19.2901 22.7742 19.2906C22.8035 19.5515 22.7777 19.8156 22.6985 20.0659C22.6191 20.3167 22.4878 20.548 22.3132 20.7447C22.1385 20.9415 21.9245 21.0992 21.6848 21.2078C21.4453 21.3164 21.1855 21.3734 20.9224 21.375L20.9155 21.375H3.07734C2.81428 21.3734 2.55451 21.3164 2.31491 21.2078C2.07531 21.0992 1.86124 20.9415 1.68661 20.7447C1.51198 20.548 1.3807 20.3167 1.3013 20.0659C1.22208 19.8157 1.19628 19.5516 1.22559 19.2907C1.22565 19.2902 1.22571 19.2896 1.22577 19.289L2.55674 7.29158L2.55849 7.27675C2.61502 6.82229 2.83511 6.40398 3.17763 6.1C3.52015 5.79601 3.96164 5.62716 4.4196 5.62501L4.42488 5.625ZM19.2439 7.875H4.75582L3.50777 19.125H20.492L19.2439 7.875Z" fill={fillColor}/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4.125C11.3038 4.125 10.6361 4.40156 10.1438 4.89384C9.65156 5.38613 9.375 6.05381 9.375 6.75V9.75C9.375 10.3713 8.87132 10.875 8.25 10.875C7.62868 10.875 7.125 10.3713 7.125 9.75V6.75C7.125 5.45707 7.63861 4.21709 8.55285 3.30285C9.46709 2.38861 10.7071 1.875 12 1.875C13.2929 1.875 14.5329 2.38861 15.4471 3.30285C16.3614 4.21709 16.875 5.45707 16.875 6.75V9.75C16.875 10.3713 16.3713 10.875 15.75 10.875C15.1287 10.875 14.625 10.3713 14.625 9.75V6.75C14.625 6.05381 14.3484 5.38613 13.8562 4.89384C13.3639 4.40156 12.6962 4.125 12 4.125Z" fill={fillColor}/>
  </svg>
  )
}
