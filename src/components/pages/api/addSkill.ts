import axios from "axios";

export interface NewSkill {
  name: string;
  image: string;
  percentage: number;
}

export async function addSkill(newSkill: NewSkill) {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/addSkill",
      newSkill
    );
    return response.data;
  } catch (error) {
    console.error("Error adding skill:", error);
    throw new Error("An error occurred while adding the skill.");
  }
}
