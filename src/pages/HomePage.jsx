import Header from "../components/Header";
import Results from "../components/Results";
import SearchResults from "../components/SearchResults";
import Welcome from "../components/Welcome";
import { resultsMock } from "../data/results.mock";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [results, setResults] = useState([]);
  const [statusSearch, setStatusSearch] = useState(false);

  const seeResult = (course, period) => {
    if (course != "" && period != "") {
      let newResult = resultsMock.filter(
        (result) => result.course === course && result.period === period,
      );
      setResults(newResult);
      setStatusSearch(true);
    } else {
      setStatusSearch(false);
    }
  };

  useEffect(() => {
    setResults([]);
  }, []);

  return (
    <div className="overflow-x-hidden  h-screen">
      <Header isAuthenticated={false} />
      <Welcome />
      <SearchResults seeResult={seeResult} results={results} />
      {statusSearch && <Results results={results} />}
    </div>
  );
}
