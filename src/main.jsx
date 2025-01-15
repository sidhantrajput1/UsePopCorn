import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
// import App from './App.jsx'
import StarRating1 from "./StarRating1";

// eslint-disable-next-line react-refresh/only-export-components
function Test() {
  const [movieRating, setMovieRating] = useState(0)
  return (
    <div>
      <StarRating1 color="blue" maxRating={10} onSetRating={setMovieRating}/>
      <p>This movie was rated {movieRating} Stars</p>
    </div>
  )
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StarRating1
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={1}
    />
    <StarRating1
      maxRating={5}
      color="red"
      size={24}
      className="test"
      defaultRating={0}
    />
    <Test />
    {/* <StarRating1 maxRating={10} /> */}
  </StrictMode>
);
