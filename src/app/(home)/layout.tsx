import Header from "./components/header"
import Dialog from "@/components/Dialog"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  async function onClose() {
    "use server"
    console.log("Modal has closed")
}

async function onOk() {
    "use server"
    console.log("Ok was clicked")
}
  return (
    <body>
      <Header />
      <main>
        {children}
        <Dialog/>
      </main>
    </body>
  )
}
