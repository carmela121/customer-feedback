import { render, screen } from "@testing-library/react";
import { ReviewList } from "./ReviewList";

test("renders reviews", () => {
  render(<ReviewList />);

  expect(screen.getByText("Carmen")).toBeInTheDocument();
 
});
