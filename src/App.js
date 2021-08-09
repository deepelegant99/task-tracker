import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "doctor is god",
      day: "Monday",
      reminder: true,
    },
    {
      id: 2,
      text: "doctor is suck",
      day: "Wednesday",
      reminder: true,
    },
    {
      id: 3,
      text: "Lawyer is good",
      day: "Friday",
      reminder: false,
    },
  ]);

  const deleteTask = (id) => {
    setTasks(
      tasks.filter((task) => {
        return task.id !== id;
      })
    );
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "Add a task, please!"
      )}
    </div>
  );
}

export default App;
