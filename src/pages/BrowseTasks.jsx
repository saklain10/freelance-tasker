import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const BrowseTasks = () => {
  const [taskList, setTaskList] = useState([])

  useEffect(() => {
  fetch('http://localhost:3000/tasks')
    .then(res => res.json())
    .then(data => {
      setTaskList(data);
      console.log("Fetched tasks:", data); 
    });
}, []);
  return (
    <div className="max-w-5xl mx-auto p-4 mt-15">
      <h2 className="text-2xl font-bold mb-6">Browse Tasks!</h2>
      <div className="space-y-4">
        {taskList.map(task => (
          <div key={task.id} className="p-4 border rounded">
            <h3 className="text-lg font-semibold">{task.title}</h3>
            <p>Category: {task.category}</p>
            <p>Budget: ${task.budget} | Deadline: {task.deadline}</p>
            <Link to={`/tasks/${task._id}`} className="text-blue-600 hover:underline">See Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseTasks;
