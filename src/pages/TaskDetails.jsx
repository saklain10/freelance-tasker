import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const TaskDetails = () => {
  const { id } = useParams();

  const [task, setTask] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/tasks/${id}`)
      .then(res => {
        if (!res.ok) {
          throw new Error("Failed to fetch task");
        }
        return res.json();
      })
      .then(data => {
        setTask(data);
      })
      .catch(err => {
        console.error("Fetch error:", err);
        setTask({ error: true });
      });
  }, [id]);


  if (!task) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-xl mx-auto p-6 mt-20 border rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Task Details</h2>
      <p><strong>Title:</strong> {task.title}</p>
      <p><strong>Description:</strong> {task.description}</p>
      <p><strong>Deadline:</strong> {new Date(task.deadline).toLocaleDateString()}</p>
      <p><strong>Budget:</strong> ${task.budget}</p>
    </div>
  );
};

export default TaskDetails;


