import React from "react"
import { Navbar, Nav } from "react-bootstrap"

export function NavbarBase() {
  return (
    <Navbar className="p-4" collapseOnSelect expand="md" bg="dark" variant="dark">
      <Navbar.Brand className="ml-4" href="/">
        CARB BLITZ
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="px-3 ml-auto justify-content-end">
          <Nav.Item className="mx-2">
            <Nav.Link eventKey="link-1">Pricing</Nav.Link>
          </Nav.Item>
          <Nav.Item className="mx-2">
            <Nav.Link>About</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
