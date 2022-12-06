import React from "react";
import {ReviewList} from "./views/reviews/ReviewList"
import { NavbarComponent } from "./components/NavBar";
import "./styles.css";
import "./App.css";
export default function App() {
  return (
    <>
        <NavbarComponent />
        <ReviewList/>
    </>
  );
}
