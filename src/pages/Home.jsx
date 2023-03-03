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
    <div className="text-center p-5 bg-warning d-flex justify-content-center">
      <div className="p-5 border border-primary d-flex flex-column w-50">
        <Header />
        <Button showClose={showClose} addTask={addTask} />
        {addTask && <AddTask />}
        <Tasks />
      </div>
    </div>
  );
};

export default Home;
