import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import StarRating from "./StarRating";

// function Test() {
//   // const [movieRating, setMovieRating] = useState(0);
//   const [rating, setRating] = useState(0);
//   // function handleMovieRating(rating) {
//   //   setMovieRating(rating);
//   // }
//   return (
//     <div>
//       <StarRating maxRating={10} color="blue" onSetRating={setRating} />
//       <p>This movie is rated {rating} stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating
      maxRating={5}
      size={30}
      color="red"
      className="test"
      defaultRating={3}
    />
    <Test /> */}
  </React.StrictMode>
);
