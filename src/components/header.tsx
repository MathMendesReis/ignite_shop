import React from 'react'
import ButtonWithIconBag from './buttonWithIconBag'
import LogoComponent from './LogoComponent'

export default function Header() {
  return (
    <header className='flex items-center justify-between'>
      <LogoComponent/>
      <div>
        <ButtonWithIconBag bgColor='#00875F'/>
      </div>
    </header>
  )
}
