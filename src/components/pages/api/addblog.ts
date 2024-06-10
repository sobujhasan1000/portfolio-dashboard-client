import axios from "axios";

export interface Newblog {
  heading: string;
  title: string;
  details: string;
}

export async function addSblog(newblog: Newblog) {
  try {
    const response = await axios.post(
      "https://pf-dashboard-server.vercel.app/api/addblog",
      newblog
    );
    return response.data;
  } catch (error) {
    console.error("Error adding skill:", error);
    throw new Error("An error occurred while adding the skill.");
  }
}
