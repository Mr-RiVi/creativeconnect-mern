import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from "../../components/common/Sanjula/sidenavbar";

const EmailForm = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the email data to the backend API
      await axios.post("http://localhost:3000/api/mail/send-mail", {
        title,
        text,
        description,
        date,
        time,
      });

      // Reset form fields
      setTitle("");
      setText("");
      setDescription("");
      setDate("");
      setTime("");

      // Show success message
      toast.success("Email sent successfully");
    } catch (error) {
      // Show error message
      toast.error("Failed to send email");
    }
  };

  return (
    <div>
      <Sidebar />
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="w-3/5 ml-4">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-3xl text-center mb-6">Email Form</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block mb-2" htmlFor="title">
                  Title:
                </label>
                <input
                  id="title"
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-400"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label className="block mb-2" htmlFor="text">
                  Organizer:
                </label>
                <input
                  id="text"
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-400"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label className="block mb-2" htmlFor="description">
                  Description:
                </label>
                <textarea
                  id="description"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-400"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label className="block mb-2" htmlFor="date">
                  Date:
                </label>
                <input
                  id="date"
                  type="date"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-400"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label className="block mb-2" htmlFor="time">
                  Time:
                </label>
                <input
                  id="time"
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-400"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="bg-gray-700 text-white rounded px-4 py-2 hover:bg-gray-800"
              >
                Send Email
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default EmailForm;
