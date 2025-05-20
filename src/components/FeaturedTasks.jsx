import React from "react";

const featuredTasks = [
  { id: 1, title: "React Web App", deadline: "2025-05-22", category: "Web Development", budget: 300 },
  { id: 2, title: "React Web App", deadline: "2025-05-22", category: "Web Development", budget: 300 },
  { id: 3, title: "React Web App", deadline: "2025-05-22", category: "Web Development", budget: 300 },
  { id: 4, title: "React Web App", deadline: "2025-05-22", category: "Web Development", budget: 300 },
  { id: 5, title: "React Web App", deadline: "2025-05-22", category: "Web Development", budget: 300 },
  { id: 6, title: "React Web App", deadline: "2025-05-22", category: "Web Development", budget: 300 },
];

const FeaturedTasks = () => {
  return (
    <div className="py-10 max-w-6xl mx-auto ">
      <h2 className="text-2xl font-bold mb-6">Featured Tasks</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {featuredTasks.map(task => (
          <div key={task.id} className="p-4 border rounded-lg shadow">
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
