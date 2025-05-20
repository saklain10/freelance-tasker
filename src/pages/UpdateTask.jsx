import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useParams } from "react-router";
import Swal from "sweetalert2";

const UpdateTask = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams(); // later used for fetching specific task
  const [taskData, setTaskData] = useState({
    title: "",
    category: "",
    description: "",
    deadline: "",
    budget: "",
  });

  useEffect(() => {
    // Simulate fetching the data based on ID (you’ll replace this with actual fetch)
    // Here hardcoded for now
    const mockTask = {
      title: "Landing Page",
      category: "Web Development",
      description: "Build a responsive landing page",
      deadline: "2025-05-20",
      budget: 100,
    };
    setTaskData(mockTask);
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedTask = {
      title: form.title.value,
      category: form.category.value,
      description: form.description.value,
      deadline: form.deadline.value,
      budget: form.budget.value,
      userEmail: user.email,
      userName: user.displayName,
    };
    console.log("Updated Task:", updatedTask);

    // Show success alert
    Swal.fire({
      icon: "success",
      title: "Task Updated!",
      text: "Your task has been successfully updated.",
      confirmButtonColor: "#3085d6",
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 mt-10 flex-col justify-center items-center">
      <h2 className="text-2xl font-bold mb-6">Update Task</h2>
      <form onSubmit={handleUpdate} className="space-y-4">
        <input
          name="title"
          defaultValue={taskData.title}
          type="text"
          placeholder="Task Title"
          required
          className="input w-full"
        />
        <select
          name="category"
          defaultValue={taskData.category}
          required
          className="input w-full"
        >
          <option value="">Select Category</option>
          <option>Web Development</option>
          <option>Design</option>
          <option>Writing</option>
          <option>Marketing</option>
        </select>
        <textarea
          name="description"
          defaultValue={taskData.description}
          placeholder="Task Description"
          required
          className="input w-full"
        />
        <input
          name="deadline"
          defaultValue={taskData.deadline}
          type="date"
          required
          className="input w-full"
        />
        <input
          name="budget"
          defaultValue={taskData.budget}
          type="number"
          placeholder="Budget $"
          required
          className="input w-full"
        />
        <input
          value={user?.email || ""}
          readOnly
          className="input w-full bg-gray-100"
        />
        <input
          value={user?.displayName || ""}
          readOnly
          className="input w-full bg-gray-100"
        />
        <button type="submit" className="btn btn-success w-full">Update Task</button>
      </form>
    </div>
  );
};

export default UpdateTask;
