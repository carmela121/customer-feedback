import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Reviews } from "./views/reviews/Reviews";
import { FormComponent } from "./views/reviews/ReviewForm";
import {ReviewList} from "./views/reviews/ReviewList"
import { NavbarComponent } from "./components/NavBar";
import "./styles.css";
import "./App.css";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarComponent />
        {/* <Routes>
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/" element={<FormComponent />} />
        </Routes> */}
        <ReviewList/>
      </BrowserRouter>
    </>
  );
}
