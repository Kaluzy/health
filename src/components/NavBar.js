import { Container, Navbar } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar bg="dark">
      <Container>
        <Navbar.Brand href="/home">
          <div style={{ color: "white" }}>
            <h4>WeCare</h4>
          </div>
        </Navbar.Brand>
        <div style={{ color: "white" }}>
          <h6>Call us: 080 2233447</h6>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;
