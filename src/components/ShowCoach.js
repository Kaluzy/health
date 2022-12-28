import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useParams } from "react-router";
import coach from "../components/coach.jpeg";
import "../css.css";

function ShowCoach({ coachData }) {
  const [data, setData] = useState([]);
  var params = useParams();
  useEffect(() => {
    axios
      .get("http://localhost:3000/coaches")
      .then((res) => {
        let coachs = res.data.map((coach) => coach);
        let filteredCoach = coachs.filter(
          (coch) => coch["id"] === Number(params.id)
        );
        setData(...filteredCoach);
      })
      .catch((err) => err);
  }, [params.id]);
  //   console.log("param is : ", params.id);
  //   console.log("from show coach show", data);
  return (
    <Card
      className="cardAlign"
      //   className="text-center m-5 d-flex align-items-center justify-content-center"
    >
      <Card.Img variant="top" src={coach} />
      <Card.Body>
        <Card.Title>You are a Coach now!</Card.Title>
        <Card.Text>Your Coach Id is : {data.id}</Card.Text>
        <Button variant="primary">Login Now</Button>
      </Card.Body>
    </Card>
  );
}

export default ShowCoach;
