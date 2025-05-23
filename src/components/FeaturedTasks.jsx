import React, { useEffect, useState } from "react";

const FeaturedTasks = () => {
  const [taskList, setTaskList] = useState([])

  useEffect(() => {
  fetch('http://localhost:3000/tasks?limit=6')
    .then(res => res.json())
    .then(data => {
      setTaskList(data);
      console.log("Fetched tasks:", data); 
    });
}, []);

  return (
    <div className="py-10 max-w-6xl mx-auto ">
      <h2 className="text-2xl font-bold mb-6">Featured Tasks</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {taskList.map(task => (
          <div key={task._id} className="p-4 border rounded-lg shadow">
            <h3 className="text-xl font-semibold">{task.title}</h3>
            <p>Category: {task.category}</p>
            <p>Deadline: {task.deadline}</p>
            <p>Budget: ${task.budget}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedTasks;


