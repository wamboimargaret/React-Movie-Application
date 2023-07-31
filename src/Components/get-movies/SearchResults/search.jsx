import React, {useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import { searchMovies } from "../../../utils/utilities";
import ImageContainer from "../../../atoms/image-container";
import "./search.css"

const SearchResultsPage = () => {
    const{ query } = useParams();
    const[searchResults, setSearchResults] = useState ([]);

    useEffect(() => {
        const fetchSearchResults = async () => {
          const results = await searchMovies(query);
          setSearchResults(results.results);
        };
        fetchSearchResults();
      }, [query]);
      return (
        <div>
          <h2>Search Results for: {query}</h2>
          <div className="image-containerr">
            {searchResults.map((movie) => (
              <ImageContainer key={movie.id} props={movie} />
            ))}
          </div>
        </div>
      );
    };
    export default SearchResultsPage;
    