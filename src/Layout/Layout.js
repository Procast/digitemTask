import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector, useDispatch } from "react-redux";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Outlet, Link } from "react-router-dom";
import "./layout.css";
import { searchTerm } from "../Reducers/HomePhotos";

function Layout() {
  const dispatch = useDispatch();
  const [term, setTerm] = useState("");

  const addSearchTerm = () => {
    dispatch(searchTerm(term));
  };

  return (
    <>
      <Navbar bg="white" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="brand">
              Postara
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link to="/" className="link">
                Home
              </Link>
              <Link to="/search" className="link">
                Search
              </Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e) => setTerm(e.target.value)}
              />
              <Button variant="outline-success" onClick={addSearchTerm}>
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet className="my-4" />
    </>
  );
}

export default Layout;
