import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function UserNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="profile">Profile</Nav.Link>
            <Nav.Link href="groups">Groups</Nav.Link>
            <Nav.Link href="activity">Activity</Nav.Link>
            <Nav.Link href="child">Child</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/login" onClick={()=>{localStorage.removeItem("refresh_token")}}>Disconnect</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default UserNavbar;