import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styles from './navoffcanvas.module.css';

const NavOffCanvas = () => {
  const expand = false;
  return (
    <>
        <Navbar key={expand} expand={expand}  className={`mb-3 ${styles.navBg}`}  fixed="top">
          <Container fluid>
            <Navbar.Toggle placement="start" aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} />
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/">Home</Nav.Link>
                  <NavDropdown
                    title="Categorias"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="/#">
                      Listagem
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/categoria-cadastro">
                      Cadastro
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="Produtos"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="/produtos">
                      Listagem
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/produto-cadastro">
                      Cadastro
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
  );
}

export default NavOffCanvas;