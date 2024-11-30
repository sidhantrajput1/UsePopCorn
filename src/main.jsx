import { StrictMode} from "react";
import { createRoot } from "react-dom/client";
// import StarRating from "./StarRating";
import './index.css'
import App from './App.jsx'
// import ExampleComponent from "./Testing.jsx";

// eslint-disable-next-line react-refresh/only-export-components
// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating color="red" maxRating={10} onSetRating={setMovieRating}/>
//       <p>This movie was rated {movieRating} stars</p>
//     </div>
//   )
// }

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <ExampleComponent /> */}
    {/* <StarRating
      maxRating={5}
      className="test"
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaulRating={2}
    /> */}
    {/* <Test /> */}
  </StrictMode>
);
