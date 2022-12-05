import { render, screen } from "@testing-library/react";
import { ReviewList } from "./ReviewList";

test("renders learn react link", () => {
  render(<ReviewList />);

  expect(screen.getByText("Feedback")).toBeInTheDocument();
  expect(screen.getByText("Carmen")).toBeInTheDocument();

 
});
