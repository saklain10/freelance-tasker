
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useParams, useNavigate } from "react-router";
import Swal from "sweetalert2";

const UpdateTask = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  console.log("Update Page ID:", id); 
  // const { _id } = useParams();
  const navigate = useNavigate();
  const [taskData, setTaskData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch task details
  useEffect(() => {
    fetch(`http://localhost:3000/tasks/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTaskData(data);
        console.log(data)
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching task:", err);
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    const updatedTask = {
      ...taskData,
      userEmail: user?.email,
      userName: user?.displayName,
    };
     console.log(updatedTask)

    fetch(`http://localhost:3000/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedTask),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.matchedCount > 0 && data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Updated!",
            text: "Your task has been updated successfully.",
            confirmButtonColor: "#3085d6",
          });
          navigate("/my-posted-tasks");
        } else {
          Swal.fire({
            icon: "info",
            title: "No Changes",
            text: "You didn't make any changes.",
            confirmButtonColor: "#3085d6",
          });
        }
      })
      .catch((err) => {
        console.error("Update error:", err);
        Swal.fire("Oops!", "Something went wrong while updating.", "error");
      });
  };

  if (loading) return <div className="text-center mt-10">Loading task...</div>;
  if (!taskData) return <div className="text-center mt-10 text-red-500">Task not found</div>;

  return (
    // <div className="max-w-2xl mx-auto p-6 mt-10">
    //   <h2 className="text-2xl font-bold mb-6">Update Task</h2>
    //   <form onSubmit={handleUpdate} className="space-y-4">
    //     <input
    //       name="title"
    //       value={taskData.title}
    //       onChange={handleChange}
    //       type="text"
    //       placeholder="Task Title"
    //       required
    //       className="input w-full"
    //     />
    //     <select
    //       name="category"
    //       value={taskData.category}
    //       onChange={handleChange}
    //       required
    //       className="input w-full"
    //     >
    //       <option value="">Select Category</option>
    //       <option>Web Development</option>
    //       <option>Design</option>
    //       <option>Writing</option>
    //       <option>Marketing</option>
    //     </select>
    //     <textarea
    //       name="description"
    //       value={taskData.description}
    //       onChange={handleChange}
    //       placeholder="Task Description"
    //       required
    //       className="input w-full"
    //     />
    //     <input
    //       name="deadline"
    //       value={taskData.deadline}
    //       onChange={handleChange}
    //       type="date"
    //       required
    //       className="input w-full"
    //     />
    //     <input
    //       name="budget"
    //       value={taskData.budget}
    //       onChange={handleChange}
    //       type="number"
    //       placeholder="Budget $"
    //       required
    //       className="input w-full"
    //     />
    //     <input
    //       value={user?.email || ""}
    //       readOnly
    //       className="input w-full bg-gray-100"
    //     />
    //     <input
    //       value={user?.displayName || ""}
    //       readOnly
    //       className="input w-full bg-gray-100"
    //     />
    //     <button type="submit" className="btn btn-success w-full">
    //       Update Task
    //     </button>
    //   </form>
    // </div>
    <div className="max-w-2xl mx-auto p-6 my-35 bg-white dark:bg-gray-800 rounded-lg shadow-md ">
  <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">Update Task</h2>
  <form onSubmit={handleUpdate} className="space-y-4">
    <input
      name="title"
      value={taskData.title}
      onChange={handleChange}
      type="text"
      placeholder="Task Title"
      required
      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-900 dark:text-white"
    />

    <select
      name="category"
      value={taskData.category}
      onChange={handleChange}
      required
      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
    >
      <option value="">Select Category</option>
      <option>Web Development</option>
      <option>Design</option>
      <option>Writing</option>
      <option>Marketing</option>
    </select>

    <textarea
      name="description"
      value={taskData.description}
      onChange={handleChange}
      placeholder="Task Description"
      required
      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded resize-none focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-900 dark:text-white"
    />

    <input
      name="deadline"
      value={taskData.deadline}
      onChange={handleChange}
      type="date"
      required
      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-900 dark:text-white"
    />

    <input
      name="budget"
      value={taskData.budget}
      onChange={handleChange}
      type="number"
      placeholder="Budget $"
      required
      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-900 dark:text-white"
    />

    <input
      value={user?.email || ""}
      readOnly
      className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 rounded text-gray-600 dark:text-gray-300"
    />

    <input
      value={user?.displayName || ""}
      readOnly
      className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 rounded text-gray-600 dark:text-gray-300"
    />

    <button
      type="submit"
      className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition duration-300"
    >
      Update Task
    </button>
  </form>
</div>

  );
};

export default UpdateTask;
