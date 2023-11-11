import axios from "axios";

const Url = "https://api.quicksell.co/v1/internal/frontend-assignment";

export const fetchData = async () => {
  try {
    const response = await axios.get(Url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
