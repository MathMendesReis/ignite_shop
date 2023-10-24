import { Metadata } from 'next'
import { ReactNode } from 'react'
 
export const metadata: Metadata = {
  title: 'Next.js',
}
 
export default function Page({children}:{children:ReactNode}) {
  return (
    <body>
      <main>
        {children}
      </main>
    </body>
  )
}