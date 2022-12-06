import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Rating, Button, Box, Container } from "@mui/material";
import { data } from "../../data";

export const FormComponent = () => {
   
  const [newReview, setNewReview] = useState({
    comment: "",
    name: "",
    stars: 0,
    timeStamp: Date.now(),
    email: "",
  });
  const [reviews, setReviews] = useState(data)
  const navigate = useNavigate();

  const handleOnChange = (e: any) => {
    setNewReview((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const reviewList = data.concat(newReview)
    setReviews([...reviews, newReview])
   
    navigate("/reviews", { state: reviewList });
    setNewReview((prevState) => ({
        ...prevState,
        [e.target.name]: "",
      }));
  };
  console.log(reviews)
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          width: 600,
          height: 600,
          paddingTop: 10
        }}
        component={"form"}
        onSubmit={handleSubmit}
      >
        <Rating
          name={"stars"}
          value={newReview.stars}
          onChange={handleOnChange}
        />
        <TextField id="name" placeholder="name" onChange={handleOnChange} name={"name"} />
        <TextField
          name="comment"
          type={"text"}
          placeholder="comment"
          value={newReview.comment}
          onChange={handleOnChange}
        />
        <TextField
          name="email"
          type={"email"}
          placeholder="email"
          value={newReview.email}
          onChange={handleOnChange}
        />
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </Box>
    </Container>
  );
};
