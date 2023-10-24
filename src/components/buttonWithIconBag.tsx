import IconBag from '@/icons/IconBag';
import React from 'react';

type Width = '24' | '32';
type Height = '24' | '32';
type FillColor = '#8D8D99' | '#FFFFFF';
type BgColor = '#202024' | '#00875F';

interface Props {
  bgColor?: BgColor;
  width?: Width;
  height?: Height;
  fillColor?: FillColor;
}

export default function ButtonWithIconBag({
  bgColor,
  width = '24',
  height = '24',
}: Props) {
  const buttonClass = `flex items-center justify-center p-3 bg-${bgColor}`;
  const fillColor = bgColor === '#202024'? '#8D8D99':'#FFFFFF'
  return (
    <button className={buttonClass}>
      <div>
        <IconBag fillColor={fillColor} height={height} width={width} />
      </div>
    </button>
  );
}
