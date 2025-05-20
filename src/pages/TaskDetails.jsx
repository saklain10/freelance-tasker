import React from "react";
import { useParams } from "react-router";

const TaskDetails = () => {
  const { id } = useParams();
  return (
    <div className="max-w-xl mx-auto p-6 mt-20">
      <h2 className="text-2xl font-bold mb-4">Task Details for ID: {id}</h2>
      {/* Later fetch data from backend using the id */}
      <p><strong>Title:</strong> Sample Task Title</p>
      <p><strong>Description:</strong> Full task description will go here.</p>
      <p><strong>Deadline:</strong> 2025-05-30</p>
      <p><strong>Budget:</strong> $250</p>
    </div>
  );
};

export default TaskDetails;
