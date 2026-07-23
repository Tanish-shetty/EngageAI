import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "../features/landing/LandingPage";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}