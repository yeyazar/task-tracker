import { useState } from "react";
import AddTask from "../components/AddTask";
import Button from "../components/Button";
import Header from "../components/Header";
import Tasks from "../components/Tasks";

const Home = () => {
  const [addTask, setAddTask] = useState(false);

  const showClose = () => {
    setAddTask(!addTask);
  };

  return (
    <div className="d-flex">
      <Header />
      <Button showClose={showClose} addTask={addTask} />
      {addTask && <AddTask />}
      <Tasks />
    </div>
  );
};

export default Home;
