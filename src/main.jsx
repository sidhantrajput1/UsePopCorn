import { StrictMode} from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
// import App from './App.jsx'
import StarRating1 from "./StarRating1";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StarRating1 maxRating={5} /> 
    {/* <StarRating1 maxRating={10} /> */}
  </StrictMode>
);
