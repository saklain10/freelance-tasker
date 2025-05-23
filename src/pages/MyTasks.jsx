
import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router"; // ✅ Fixed Link import
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";

const MyTasks = () => {
  const { user, loading } = useContext(AuthContext);
  const [myTasks, setMyTasks] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://freelance-marketplace-server-ten.vercel.app/my-posted-tasks?email=${user.email}`)
        .then(res => res.json())
        .then(data => setMyTasks(data))
        .catch(err => console.error("Failed to load tasks", err));
    }
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This task will be deleted permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://freelance-marketplace-server-ten.vercel.app/tasks/${id}`, {
          method: "DELETE"
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your task has been deleted.", "success");
              setMyTasks(myTasks.filter(task => task._id !== id));
            }
          });
      }
    });
  };

  if (loading) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="max-w-6xl mx-auto p-6 mt-20">
      <h2 className="text-2xl font-bold mb-6">My Posted Tasks</h2>
      {myTasks.length === 0 ? (
        <p className="text-gray-500">No tasks posted yet.</p>
      ) : (
        <table className="w-full table-auto border">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2">Title</th>
              <th className="p-2">Deadline</th>
              <th className="p-2">Budget</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {myTasks.map(task => (
              <tr key={task._id} className="border-t text-center">
                <td className="p-2">{task.title}</td>
                <td className="p-2">{task.deadline}</td>
                <td className="p-2">${task.budget}</td>
                <td className="p-2 space-x-2">
                  <Link to={`/update-task/${task._id}`} className="text-blue-600 hover:underline">Update</Link>
                  <button onClick={() => handleDelete(task._id)} className="text-red-500 hover:underline">Delete</button>
                  <Link to={`/bids/${task._id}`} className="text-green-600 hover:underline">Bids</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyTasks;
