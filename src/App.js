import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Reviews } from "./reviews/Reviews";
import { FormComponent } from "./reviews/ReviewForm";
import {ReviewList} from "./reviews/ReviewList"
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
