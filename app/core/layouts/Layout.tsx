import { ReactNode } from "react"
import { Head } from "blitz"
import { Container } from "react-bootstrap"
import { NavbarBase } from "app/carb-ui/NavbarBase"
import "bootstrap/dist/css/bootstrap.min.css"

type LayoutProps = {
  title?: string
  children: ReactNode
}

const Layout = ({ title, children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title || "carbs"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavbarBase />
      <Container>{children}</Container>
    </>
  )
}

export default Layout
