const AddTask = () => {
  return (
    <div>
      <form className="form-group">
        <div className="form-group text-left">
          <label for="addTask">Task</label>
          <select
            className="form-control"
            id="addTask"
          >
            <option hidden>Add Task</option>
            <option>Work Out</option>
            <option>Study Project</option>
            <option>Cook Food</option>
          </select>
        </div>
        <div className="form-group text-left">
          <label for="dayTime">
            Day & Time
          </label>
          <select
            className="form-control"
            id="dayTime"
          >
            <option hidden>Add Day & Time</option>
            <option>Mar 5th at 15:30</option>
            <option>Mar 7th at 21:30</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary mt-2 w-100">Save Task</button>
      </form>
    </div>
  );
};

export default AddTask;
