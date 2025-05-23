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
    fetch('http://localhost:3000/tasks', {
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
    <div className="max-w-2xl mx-auto p-3 mt-15 flex-col justify-center items-center">
      <h2 className="text-2xl font-bold mb-6">Add New Task</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
  <input name="title" type="text" placeholder="Task Title" required className="input w-full" />
  
  <select name="category" required className="input w-full">
    <option value="">Select Category</option>
    <option>Web Development</option>
    <option>Design</option>
    <option>Writing</option>
    <option>Marketing</option>
  </select>
  
  <textarea name="description" placeholder="Task Description" required className="input w-full" />
  <input name="deadline" type="date" required className="input w-full" />
  <input name="budget" type="number" placeholder="Budget $" required className="input w-full" />
  
  <input name="userEmail" value={user?.email || ""} readOnly className="input w-full bg-gray-100" placeholder="Your Email" />
  <input name="userName" value={user?.displayName || ""} readOnly className="input w-full bg-gray-100" placeholder="Display Name" />

  <button type="submit" className="btn btn-primary">Add Task</button>
</form>

    </div>
  );
};

export default AddTask;
