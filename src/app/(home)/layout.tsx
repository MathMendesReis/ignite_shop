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
        <Dialog title="Example Modal" onClose={onClose} onOk={onOk}>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eligendi odio ipsa nostrum dolores voluptas architecto tempore nulla voluptatibus vel, placeat explicabo exercitationem id officia laborum doloremque blanditiis earum accusamus.</p>
        </Dialog>
      </main>
    </body>
  )
}
