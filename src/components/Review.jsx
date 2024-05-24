import { useState } from "react";
import { toast } from "react-toastify";
import { Button, Textarea } from "@material-tailwind/react";
import { submitRatingAPI } from "@/Services/allAPI";
import Swal from "sweetalert2";
import PropTypes from "prop-types";
import { Rating } from "@mui/material";

const Review = ({ id }) => {
  const [rated, setRated] = useState(0);
  const [comment, setComment] = useState("");
  const handleSubmit = async () => {
    if (rated === 0 || !comment) {
      toast.warning("Please fill in all fields");
      return;
    }
    const token = localStorage.getItem("TlToken");
    const body = {
      rating: rated,
      comment,
    };
    const result = await submitRatingAPI(token, id, body);
    console.log(result);
    if (result.status === 200) {
      setRated(0);
      setComment("");
      Swal.fire({
        icon: "success",
        title: "Review Submitted",
      });
    }
  };

  const handleCancel = () => {
    setComment("");
    setRated(0);
  };

  return (
    <div className="wrapper">
      <h4 className="text-2xl text-center my-5">
        Submit Your Rating & Reviews
      </h4>
      <div className="wid">
        <div className="rating">
          <Rating value={rated} onChange={(event, value) => setRated(value)} />
        </div>
        <Textarea
          label="Type Here"
          size="lg"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <div className="flex gap-2 justify-end">
          <Button color="red" onClick={handleCancel}>
            Cancel
          </Button>
          <Button color="green" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

Review.propTypes = {
  id: PropTypes.number,
};

export default Review;
