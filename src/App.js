import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import CoachSignUp from "./components/CoachSignUp";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import ShowCoach from "./components/ShowCoach";
import addNewCoach from "./api";
function App() {
  const [coach, setCoach] = useState([
    {
      id: 0,
      name: "",
      password: "",
      gender: "",
      dateOfBirth: "",
      mobileNumber: "",
      speciality: "",
    },
  ]);

  const addCoach = async (coachs) => {
    const newCoach = await addNewCoach(coachs);
    setCoach(newCoach);
  };

  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route
            path="/CoachSignUp"
            element={<CoachSignUp onAddCoach={addCoach} />}
          />
          <Route
            path="/newCoach/:id"
            element={<ShowCoach coachData={coach} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
