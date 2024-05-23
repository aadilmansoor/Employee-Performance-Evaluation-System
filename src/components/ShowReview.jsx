import { getReviewAPI } from "@/Services/allAPI";
import { Rating } from "@mui/material";
import { useEffect, useState } from "react";

const ShowReview = () => {
  const [reviews, setReviews] = useState([]);
  console.log({ reviews });
  const getReview = async () => {
    const token = localStorage.getItem("Emp-token");
    const result = await getReviewAPI(token);
    if (result.status === 200) {
      setReviews(result.data);
    }
  };

  useEffect(() => {
    getReview();
  }, []);

  return (
    <div className="mx-5 md:mx-24">
      <h4 className="text-2xl text-center my-5">Reviews</h4>

      {reviews.length === 0 ? (
        <p className="text-center">No reviews available</p>
      ) : (
        <ul className="list-none bg-gray-50 p-4 rounded-md shadow-sm">
          {reviews.map((review) => (
            <li key={review.id} className="mb-4">
              <div>
                <p className="font-semibold mb-2 capitalize mt-2">
                  {review.teamlead}
                </p>
                <div className="mb-1">
                  <Rating
                    size="small"
                    name="simple-controlled"
                    value={review.rating}
                    readOnly
                  />
                </div>
                <p className="mt-2 mb-2 font-normal">{review.comment}</p>
              </div>
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ShowReview;
