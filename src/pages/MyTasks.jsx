import React from "react";
import { Link } from "react-router";

const myTasks = [
  { id: "1", title: "Landing Page", deadline: "2025-05-20", budget: 100 },
];

const MyTasks = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 mt-20">
      <h2 className="text-2xl font-bold mb-6">My Posted Tasks</h2>
      <table className="w-full table-auto border">
        <thead>
          <tr>
            <th>Title</th><th>Deadline</th><th>Budget</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {myTasks.map(task => (
            <tr key={task.id} className="">
              <td className="pl-23">{task.title}</td>
              <td className="pl-23">{task.deadline}</td>
              <td className="pl-10">${task.budget}</td>
              <td className="space-x-4 pl-33">
                {/* <Link to={`/update/${task.id}`} className="text-blue-600">Update</Link> */}
                <Link to="/update-task" className="text-blue-600">Update</Link>
                <button className="text-red-500">Delete</button>
                <button className="text-green-600">Bids</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyTasks;
