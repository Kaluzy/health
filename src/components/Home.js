import "bootstrap/dist/css/bootstrap.min.css";
import coach from "./coach.jpeg";
import user from "./user.png";
import { useNavigate } from "react-router";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="text-center m-5">
        <h1>We are at the heart of appropriate care</h1>
      </div>
      <Container>
        <Row>
          <Col>
            <Card bg="dark" style={{ marginLeft: "1px", width: "18rem" }}>
              <Card.Img variant="top" src={coach} />
              <Card.Body>
                <Button variant="info pe-2 ms-5 mb-2">Login as a Coach</Button>

                <Button
                  variant="info pe-2 ms-5 ps-4"
                  onClick={() => navigate("/CoachSignUp")}
                >
                  Join as a Coach
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card bg="dark" style={{ marginLeft: "15px", width: "18rem" }}>
              <Card.Img className="" variant="top" src={user} />
              <Card.Body>
                <Button variant="info  pe-2 ms-5 mb-2">Login as a User</Button>

                <Button variant="info pe-2 ms-5 ps-4">Join as a User</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
