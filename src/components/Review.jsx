
import  { useState } from "react";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";
import { Button, Rating, Textarea } from "@material-tailwind/react";

const Review = ({ getReview }) => {
  const [value, setValue] = useState(0);
  const [comment, setComment] = useState("");
  const location = useLocation();
  const serviceProvider = location.state;
  const handleSubmit = async () => {
    if (value === 0 || !comment) {
      toast.warning("Please fill in all fields");
      return;
    }
    const token = localStorage.getItem("maternity-token");
    const headers = {
      "Content-type": "application/json",
      Authorization: `${token}`,
    };
    const body = {
      serviceProviderId: serviceProvider._id,
      ratings: value,
      comments: comment,
    };
    const result = await addReviewAPI(body, headers);
    if (result.status === 200) {
      setValue(0);
      setComment("");
      toast.success("Review submitted");
      getReview();
    }
  };
  return (
    <div className="wrapper">
      <h4 className="text-2xl text-center my-5">
        
        Submit Your Rating & Reviews
      </h4>
      <div className="wid">
        <div className="rating">
          <Rating
            size="large"
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </div>

        <Textarea
         minRows={2} size="lg"
         placeholder="Leave a comment here" />
<div className="flex gap-2 justify-end">
<Button color="red">Cancel</Button>
<Button color="green">Submit</Button>
</div>
      </div>
    </div>
  );
};

export default Review;
