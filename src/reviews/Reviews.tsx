import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Button,
  CardActionArea,
  Card,
  CardContent,
  Rating,
  Typography,
} from "@mui/material";
import { data, sortedReviews } from "../data";
import moment from "moment";
export interface List {
  comment: string;
  name: string;
  stars: number;
  timeStamp: number;
  email: string;
}
export const Reviews = () => {
    const navigate = useNavigate();
  const [reviewList, setReviewList] = useState(data);
  const { state } = useLocation();

  useEffect(() => {
    if (state) {
      return setReviewList(state);
    }

    return setReviewList(reviewList);
  });

  return (
    <>
      <Button onClick={() => navigate("/")}>Go to Home</Button>
      {reviewList &&
        sortedReviews(reviewList).map((review) => (
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <Rating name="read-only" value={review.stars} readOnly />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {review.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {review.comment}
                </Typography>
              </CardContent>
            </CardActionArea>
            <Typography variant="caption" color="text.secondary">
              Created {moment(review.timeStamp).fromNow()}
            </Typography>
          </Card>
        ))}
    </>
  );
};
