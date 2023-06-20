import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from 'react-bootstrap/Form';
import "./nav.css";

function NavHeader() {
  return (
    <Navbar
      className="navstyle sticky"
      collapseOnSelect
      expand="md"
      bg=""
      variant="dark"
    >
      <Container className="navPadding ">
        <Navbar.Brand className="logo" href="#home">
          African Market
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto  navigationbtns">
            <Nav.Link className="navText active" href="/">
              Home
            </Nav.Link>
            {/* <Nav.Link className="navText" href="#pricing">
              Express Order
            </Nav.Link> */}
            <Nav.Link className="navText" href="/all-products">
              All Products
            </Nav.Link>
            <NavDropdown
              className="navText"
              title="Categories"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item className="dropdownText" href="#action/3.1">
                Body Care
              </NavDropdown.Item>
              <NavDropdown.Item className="dropdownText" href="#action/3.2">
                Drinks
              </NavDropdown.Item>
              <NavDropdown.Item className="dropdownText" href="#action/3.3">
                Etnnic Delicasies
              </NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              <NavDropdown.Item className="dropdownText" href="#action/3.4">
                Fish & Seafoods
              </NavDropdown.Item>
              <NavDropdown.Item className="dropdownText" href="#action/3.4">
                Etnnic Delicasies
              </NavDropdown.Item>
              <NavDropdown.Item className="dropdownText" href="#action/3.4">
                Flour
              </NavDropdown.Item>
              <NavDropdown.Item className="dropdownText" href="#action/3.4">
                Fresh Produce
              </NavDropdown.Item>
              <NavDropdown.Item className="dropdownText" href="#action/3.4">
                Fruits & Vegetables
              </NavDropdown.Item>
              <NavDropdown.Item className="dropdownText" href="#action/3.4">
                Grains
              </NavDropdown.Item>
              <NavDropdown.Item className="dropdownText" href="#action/3.4">
                Household
              </NavDropdown.Item>
              <NavDropdown.Item className="dropdownText" href="#action/3.4">
                Oil
              </NavDropdown.Item>
              <NavDropdown.Item className="dropdownText" href="#action/3.4">
                Provisions
              </NavDropdown.Item>
              <NavDropdown.Item className="dropdownText" href="#action/3.4">
                Spices
              </NavDropdown.Item>
            </NavDropdown>
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search for products"
              className="search"
              aria-label="Search"
            />
          </Form>
          </Nav>
          
          <Nav className="onboarding form-inline">
            <Nav.Link className="login navText" href="/login">
              Login
            </Nav.Link>
            <Nav.Link className="signUp" eventKey={2} href="/register">
              Sign up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavHeader;
