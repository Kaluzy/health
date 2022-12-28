import axios from "axios";

const addNewCoach = async (coach) => {
  const addNewCoach = await axios.post("http://localhost:3000/coaches", coach);
  return addNewCoach;
};
export default addNewCoach;
