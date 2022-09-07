import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Images from "./components/Images";
import Randomizer from "./components/Randomizer";
import content from "./data/data.json";

function App() {
  const [randomImageNumber, setrandomImageNumber] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const setrandomImageNumberHandler = () => {
    setIsLoading(true);
    console.log(isLoading);
    setrandomImageNumber(Math.floor(Math.random() * content.length));
    setTimeout(setIsLoadingHandler, 500);
  };

  const setIsLoadingHandler = () => {
    setIsLoading(false);
    console.log(isLoading);
  };

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <Randomizer
            content={content}
            randomImageNumber={randomImageNumber}
            setrandomImageNumberHandler={setrandomImageNumberHandler}
            isLoading={isLoading}
          />
        }
      />
      <Route path="/images" element={<Images content={content} />} />
    </Routes>
  );
}

export default App;
