"use client";
import React, { useState } from "react";
import { addSkill, NewSkill } from "../pages/api/addSkill";

const SkillAdd: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [percentage, setPercentage] = useState<number>(0);
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newSkill: NewSkill = { name, image, percentage };

    try {
      const result = await addSkill(newSkill);
      console.log("Skill added successfully:", result);
      alert("Skill added successfully!");
      setName("");
      setImage("");
      setPercentage(0);
      setError("");
    } catch (error) {
      console.error("Error:", error.message);
      setError(error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Add New Skill</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Skill Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700"
          >
            Skill Image URL:
          </label>
          <input
            type="text"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="percentage"
            className="block text-sm font-medium text-gray-700"
          >
            Skill Percentage:
          </label>
          <input
            type="number"
            id="percentage"
            value={percentage}
            onChange={(e) => setPercentage(parseInt(e.target.value, 10))}
            required
            min="0"
            max="100"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Add Skill
        </button>
      </form>
    </div>
  );
};

export default SkillAdd;
