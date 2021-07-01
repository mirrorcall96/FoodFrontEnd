import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
const NavList = () => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand as={Link} to="/">
      Food
    </Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/">
        Home
      </Nav.Link>
      <Nav.Link as={Link} to="/categories">
        Categories
      </Nav.Link>
      <Nav.Link as={Link} to="/ingredients">
        Ingredients
      </Nav.Link>
      <Nav.Link as={Link} to="/recipes">
        Recipes
      </Nav.Link>
    </Nav>
  </Navbar>
);
export default NavList;
