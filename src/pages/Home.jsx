import React from "react";
import AddTask from "../components/AddTask";
import Header from "../components/Header";
import Tasks from "../components/Tasks";

const Home = () => {
  return (
    <div className="container text-center">
      Home
      <Header />
      <AddTask />
      <Tasks />
    </div>
  );
};

export default Home;
