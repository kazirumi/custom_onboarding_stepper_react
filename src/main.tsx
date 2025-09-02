import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { PreviewProvider } from "./context/PreviewContext.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Onboarding from "./pages/Onboarding.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <PreviewProvider>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
        <Routes>
          <Route path="/onboarding" element={<Onboarding />} />
        </Routes>
      </PreviewProvider>
    </BrowserRouter>
  </StrictMode>
);
