import React, { useState } from "react";
import { data, sortedReviews } from "../../data";
import { StarRatingsChart } from "../../components/StarChart";
import {
  Button,
  CardActionArea,
  Card,
  CardContent,
  Rating,
  Typography,
  Container,
  Box,
  TextField,
  Grid,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import moment from "moment";

export const ReviewList = () => {
  const [reviews, setReviews] = useState(data);
  const [newReview, setNewReview] = useState({
    comment: "",
    name: "",
    stars: 0,
    timeStamp: Date.now(),
    email: "",
  });
  const [showReviews, setShowReviews] = useState(false);

  const handleOnChange = (e: any) => {
    setNewReview((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setReviews([...reviews, newReview]);

    setNewReview({
      comment: "",
      name: "",
      stars: 0,
      timeStamp: Date.now(),
      email: "",
    });
    setShowReviews(true);
  };

  const reviewFive = reviews.filter((item) => Math.floor(item.stars) === 5);
  const reviewFour = reviews.filter((item) => Math.floor(item.stars) === 4);
  const reviewThree = reviews.filter((item) => Math.floor(item.stars) === 3);
  const reviewTwo = reviews.filter((item) => Math.floor(item.stars) === 2);
  const reviewOne = reviews.filter((item) => Math.floor(item.stars) === 1);

  return (
    <Container maxWidth="sm">
      {!showReviews && (
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          component={"form"}
          onSubmit={handleSubmit}
        >
          <Typography component="h1" variant="h5" margin={4}>
            Feedback
          </Typography>
          <Grid container spacing={3}>
            <Grid
              item
              xs={12}
              sm={4}
              sx={{
                justifyContent: "space-between",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <TextField
                name="name"
                type={"text"}
                placeholder="name"
                value={newReview.name}
                onChange={handleOnChange}
                required
              />

              <TextField
                name="email"
                type={"email"}
                placeholder="email"
                value={newReview.email}
                onChange={handleOnChange}
                required
              />
              <Typography variant="body1">Rating</Typography>
              <Rating
                name={"stars"}
                value={newReview.stars}
                onChange={handleOnChange}
              />
            </Grid>

            <Grid item xs={12} sm={8}>
              <TextField
                name="comment"
                type={"text"}
                placeholder="comment"
                value={newReview.comment}
                onChange={handleOnChange}
                multiline
                rows={8}
                required
                fullWidth
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            color="primary"
          >
            Submit
          </Button>
        </Box>
      )}

      {showReviews && (
        <Box
          sx={{
            marginTop: 8,
          }}
        >
          <Button
            endIcon={<SendIcon />}
            sx={{
              marginBottom: 8,
            }}
            onClick={() => setShowReviews(false)}
          >
            Back to feedback
          </Button>

          <Box
            sx={{
              ml: 2,
              marginBottom: 5,
              width: "100%",
              padding: 2,
              minWidth: "200px",
            }}
          >
            <StarRatingsChart
              starCounts={{
                Total: [
                  reviewOne.length,
                  reviewTwo.length,
                  reviewThree.length,
                  reviewFour.length,
                  reviewFive.length,
                ],
              }}
              width={500}
              height={200}
            />
          </Box>

          {reviews &&
            sortedReviews(reviews).map((review) => (
              <Card sx={{ maxWidth: 600, padding: 2 }}>
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
        </Box>
      )}
    </Container>
  );
};
