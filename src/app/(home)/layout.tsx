import Header from "./components/header"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <body>
      <Header />
      <main>
        {children}
      </main>
    </body>
  )
}
