import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import { resultsMock } from "./data/results.mock";
import { useEffect, useState } from "react";

const App = () => {
  const [results, setResults] = useState([]);

  const seeResult = (course, period) => {
    if (course != "" && period != "") {
      let newResult = resultsMock.filter(
        (result) => result.course === course && result.period === period,
      );
      setResults(newResult);
    }
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage results={results} seeResult={seeResult} />}
      />
    </Routes>
  );
};

export default App;
