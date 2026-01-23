import Header from "../components/Header";
import Results from "../components/Results";
import SearchResults from "../components/SearchResults";

export default function HomePage(props) {
  return (
    <div className="bg-gray-200 overflow-x-hidden">
      <Header />
      <SearchResults seeResult={props.seeResult} results={props.results} />
      <Results results={props.results} />
    </div>
  );
}
