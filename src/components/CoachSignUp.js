import axios from "axios";
import "bulma/css/bulma.css";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router";

function CoachSignUp({ onAddCoach }) {
  const navigate = useNavigate();
  let count = 0;
  const [coachs, setCoach] = useState({
    id: count,
    name: "",
    password: "",
    gender: "",
    dateOfBirth: "",
    mobileNumber: "",
    speciality: "",
  });
  useEffect(() => {
    axios
      .get("http://localhost:3000/coaches")
      .then((res) => {
        let returnData = res.data.map((coach) => coach);
        // eslint-disable-next-line
        count = returnData.length;
      })
      .catch((err) => err);
  });
  const handleChange = (event) => {
    var name = event.target.name;
    var value = event.target.value;
    setCoach({ ...coachs, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    coachs.id = (await count) + 1;
    onAddCoach(coachs);
    navigate(`/newCoach/${coachs.id}`);
    console.log("This is from CoachSignup", coachs.id);
    // setCoach("");
  };
  return (
    <div className="mt-5 m-2 p-5 align-item-center ">
      <Form
        onSubmit={handleSubmit}
        className="m-3 p-3 bg-dark text-white"
        style={{ borderRadius: "8px" }}
      >
        <h3 className="text-center mb-3">Life Coach Profile</h3>
        <Row className="mb-3">
          <Col>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={coachs.name}
              onChange={handleChange}
            />
          </Col>
          <Col>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={coachs.password}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" as={Col}>
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                type="date"
                name="dateOfBirth"
                value={coachs.dateOfBirth}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Gender</Form.Label>
              <Row>
                <Col>
                  {/* <label>Male</label> */}
                  <Form.Check
                    type="radio"
                    name="gender"
                    id="gender1"
                    label="Male"
                    value="M"
                    checked={coachs.gender}
                    onChange={handleChange}
                  />
                </Col>

                <Col>
                  <Form.Check
                    type="radio"
                    name="gender"
                    id="gender2"
                    label="Female"
                    value="F"
                    defaultChecked
                    onChange={handleChange}
                  />
                </Col>
              </Row>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              type="text"
              name="mobileNumber"
              value={coachs.mobileNumber}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Speciality</Form.Label>
            <Form.Control
              type="text"
              name="speciality"
              value={coachs.speciality}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>
        <div className="text-center d-flex justify-content-center">
          <Button variant="info" type="submit" onSubmit={handleSubmit}>
            Register
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default CoachSignUp;
