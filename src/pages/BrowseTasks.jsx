import React from "react";
import { Link } from "react-router";

const tasks = [
  { id: "1", title: "Create Logo", budget: 100, deadline: "2025-05-30", category: "Design" },
  { id: "2", title: "Create Logo", budget: 100, deadline: "2025-05-30", category: "Design" },
  { id: "3", title: "Create Logo", budget: 100, deadline: "2025-05-30", category: "Design" },
  { id: "4", title: "Create Logo", budget: 100, deadline: "2025-05-30", category: "Design" },
  { id: "5", title: "Create Logo", budget: 100, deadline: "2025-05-30", category: "Design" },
  { id: "6", title: "Create Logo", budget: 100, deadline: "2025-05-30", category: "Design" },
];

const BrowseTasks = () => {
  return (
    <div className="max-w-5xl mx-auto p-4 mt-15">
      <h2 className="text-2xl font-bold mb-6">Browse Tasks</h2>
      <div className="space-y-4">
        {tasks.map(task => (
          <div key={task.id} className="p-4 border rounded">
            <h3 className="text-lg font-semibold">{task.title}</h3>
            <p>Category: {task.category}</p>
            <p>Budget: ${task.budget} | Deadline: {task.deadline}</p>
            <Link to={`/task/${task.id}`} className="text-blue-600 hover:underline">See Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseTasks;
