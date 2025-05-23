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
    
    <div className="max-w-5xl mx-auto p-4 mt-30">
  <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-600">Browse Tasks!</h2>
  <div className="space-y-4">
    {taskList.map(task => (
      <div
        key={task.id}
        className="p-5 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-sm"
      >
        <h3 className="text-lg font-semibold mb-1">{task.title}</h3>
        <p className="mb-1">Category: {task.category}</p>
        <p className="mb-2">Budget: ${task.budget} | Deadline: {task.deadline}</p>
        <Link
          to={`/tasks/${task._id}`}
          className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
        >
          See Details
        </Link>
      </div>
    ))}
  </div>
</div>

  );
};

export default BrowseTasks;
