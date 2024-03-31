import Reac, { ChangeEvent, ChangeEventHandler, FC, useState } from "react";
import "./App.css";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [day, setDay] = useState<number>(0);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDay(Number(event.target.value));
    }

    console.log(task, day);
  };
  return (
    <div className="App">
      <div>
        <input
          type="text"
          placeholder="Task Gir"
          value={task}
          name="task"
          onChange={handleChange}
        ></input>
        <input
          type="number"
          placeholder="Kaç Gün"
          value={day}
          name="day"
          onChange={handleChange}
        ></input>
        <button> Ekle</button>
      </div>
    </div>
  );
};

export default App;
