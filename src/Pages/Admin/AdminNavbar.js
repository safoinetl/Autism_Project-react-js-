import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="manageUser">manage User</Nav.Link>
            <Nav.Link href="managechildren">manage children</Nav.Link>
            <Nav.Link href="manageGroup">manage Groups</Nav.Link>
            <Nav.Link href="manageActivity">manage Activity</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/login" onClick={()=>{localStorage.removeItem("refresh_token")}}>Disconnect</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;