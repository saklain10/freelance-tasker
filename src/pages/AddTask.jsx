import React, { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";

const AddTask = () => {
  const { user } = useContext(AuthContext);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    // const taskData = {
    //   title: form.title.value,
    //   category: form.category.value,
    //   description: form.description.value,
    //   deadline: form.deadline.value,
    //   budget: form.budget.value,
    //   userEmail: user.email,
    //   userName: user.displayName,
    // };

    const taskData = new FormData(form)
    const taskDataAll = Object.fromEntries(taskData.entries())
    console.log("Submit Task:", taskDataAll);
    fetch('https://freelance-marketplace-server-ten.vercel.app/tasks', {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(taskDataAll)
    })
      .then(res => res.json())
      .then(data => {
        // console.log("after adding task",data)
        if (data.insertedId) {
          console.log('added successfully')
          Swal.fire({
            title: "Task added successfully",
            icon: "success",
            draggable: true
          });
          // form.reset()
        }
      })
  };

  return (
//     <div className="max-w-2xl mx-auto p-3 flex-col justify-center items-center lg:mt-3 mt-20">
//       <h2 className="text-2xl font-bold mb-6">Add New Task</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//   <input name="title" type="text" placeholder="Task Title" required className="input w-full" />
  
//   <select name="category" required className="input w-full">
//     <option value="">Select Category</option>
//     <option>Web Development</option>
//     <option>Design</option>
//     <option>Writing</option>
//     <option>Marketing</option>
//   </select>
  
//   <textarea name="description" placeholder="Task Description" required className="input w-full" />
//   <input name="deadline" type="date" required className="input w-full" />
//   <input name="budget" type="number" placeholder="Budget $" required className="input w-full" />
  
//   <input name="userEmail" value={user?.email || ""} readOnly className="input w-full bg-gray-100" placeholder="Your Email" />
//   <input name="userName" value={user?.displayName || ""} readOnly className="input w-full bg-gray-100" placeholder="Display Name" />

//   <button type="submit" className="btn btn-primary">Add Task</button>
// </form>

//     </div>
<div className="max-w-2xl mx-auto p-4 my-40 bg-white dark:bg-gray-800 rounded-lg shadow-md">
  <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">Add New Task</h2>
  <form onSubmit={handleSubmit} className="space-y-4">
    <input
      name="title"
      type="text"
      placeholder="Task Title"
      required
      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-900 dark:text-white"
    />

    <select
      name="category"
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
      placeholder="Task Description"
      required
      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded resize-none focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-900 dark:text-white"
    />

    <input
      name="deadline"
      type="date"
      required
      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-900 dark:text-white"
    />

    <input
      name="budget"
      type="number"
      placeholder="Budget $"
      required
      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-900 dark:text-white"
    />

    <input
      name="userEmail"
      value={user?.email || ""}
      readOnly
      placeholder="Your Email"
      className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 rounded text-gray-600 dark:text-gray-300"
    />

    <input
      name="userName"
      value={user?.displayName || ""}
      readOnly
      placeholder="Display Name"
      className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 rounded text-gray-600 dark:text-gray-300"
    />

    <button
      type="submit"
      className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition duration-300"
    >
      Add Task
    </button>
  </form>
</div>

  );
};

export default AddTask;
