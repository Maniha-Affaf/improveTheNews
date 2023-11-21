
import { create } from 'apisauce';

const apiKey = "ae0b69d76df34c15b145cb99386ed41d";

// define the api
    const api = create({
  baseURL: 'https://newsapi.org/v2',
});

const getTopHeadline = async () => {
  try {

    const response = await api.get("/everything", {
      q: 'tesla',
      from: '2023-10-21',
      sortBy: 'publishedAt',
      apiKey: apiKey,
    });

    if (response.ok) {
      return response.data;
      console.log("result: ", response.data);
    } else {
      return null;
      console.error("Error fetching data:", response.problem);
    }
  } catch (error) {
    return null
    console.error("Error null data:", error);
  }
};
// https://newsapi.org/v2/everything?q=tesla&from=2023-10-21&sortBy=publishedAt&apiKey=ae0b69d76df34c15b145cb99386ed41d

export default {
  getTopHeadline,
};
