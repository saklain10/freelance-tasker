import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";

const TaskDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [task, setTask] = useState(null);
  const [bidsCount, setBidsCount] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:3000/tasks/${id}`)
      .then(res => res.json())
      .then(data => setTask(data));

    fetch(`http://localhost:3000/bids/count/${id}`)
      .then(res => res.json())
      .then(data => setBidsCount(data.count));
  }, [id]);

  const handleBid = () => {
    const bidData = {
      taskId: id,
      userEmail: user.email,
      userName: user.displayName,
    };

    fetch("http://localhost:3000/bids", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bidData),
    })
      .then(res => res.json())
      .then(() => {
        setBidsCount(prev => prev + 1);
        Swal.fire("Bid Placed!", "You have successfully bid on this task.", "success");
      });
  };

  if (!task) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-xl mx-auto my-35 border rounded shadow p-6">
      <h2 className="text-2xl font-bold mb-4">Task Details</h2>
      <p ><strong>Title:</strong> {task.title}</p>
      <p><strong>Description:</strong> {task.description}</p>
      <p><strong>Deadline:</strong> {new Date(task.deadline).toLocaleDateString()}</p>
      <p><strong>Budget:</strong> ${task.budget}</p>

      <div className="mt-4">
        <button onClick={handleBid} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Bid</button>
      </div>

      <p className="mt-4 text-green-700">You bid for {bidsCount} opportunities.</p>
    </div>
  );
};

export default TaskDetails;