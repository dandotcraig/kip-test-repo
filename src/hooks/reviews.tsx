// src/hooks/reviews.js
import { useReviews } from "../context/ReviewsContext";

export const onClientEntry = () => {
  // Fetch data when the client (browser) starts
  const { setReviewsData, setLastFetchDate } = useReviews();

  // Fetch your data here
  // const data = await fetchData();

  // Example data
  const data = [...]; // Replace with your fetched data

  // Set data in context
  setReviewsData(data);
  setLastFetchDate(Date.now());
};
