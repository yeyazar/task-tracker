

const Button = ({ showClose, addTask }) => {
  return (
    <div>
      {addTask && <button onClick={() => showClose()}>Close Add Task Bar</button>}
      {!addTask && <button onClick={() => showClose()}>Show Add Task Bar</button>}
    </div>
  );
};

export default Button;
