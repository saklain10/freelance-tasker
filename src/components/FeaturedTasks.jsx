import React, { useEffect, useState } from "react";

const FeaturedTasks = () => {
  const [taskList, setTaskList] = useState([])

  useEffect(() => {
  fetch('https://freelance-marketplace-server-ten.vercel.app/tasks?limit=6')
    .then(res => res.json())
    .then(data => {
      setTaskList(data);
      console.log("Fetched tasks:", data); 
    });
}, []);

  return (
    <div className="pb-10 max-w-6xl mx-auto px-4">
  <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">
    Featured Tasks
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {taskList.map((task) => (
      <div
        key={task._id}
        className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm hover:shadow-lg transition duration-300 p-5 flex flex-col justify-between"
      >
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
            {task.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-medium">Category:</span> {task.category}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-medium">Deadline:</span> {task.deadline}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-medium">Budget:</span> ${task.budget}
          </p>
        </div>

      </div>
    ))}
  </div>
</div>

  );
};

export default FeaturedTasks;


