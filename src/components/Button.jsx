const Button = ({ showClose, addTask }) => {
  return (
    <div>
      {addTask && (
        <button className="btn btn-danger" onClick={() => showClose()}>
          Close Add Task Bar
        </button>
      )}
      {!addTask && (
        <button className="btn btn-danger" onClick={() => showClose()}>
          Show Add Task Bar
        </button>
      )}
    </div>
  );
};

export default Button;
