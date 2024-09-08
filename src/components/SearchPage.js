import React, { useEffect, useState } from "react";
import SearchResultCard from "./SearchResultCard";
import { Link, useLocation } from "react-router-dom";
import { YOUTUBE_API_KEY, YOUTUBE_SEARCH_RESULTS_API } from "../utils/constant";
import Categories from "./Categories";

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();
  const info = location.state || {};

  const getData = async () => {
    const data = await fetch(
      YOUTUBE_SEARCH_RESULTS_API + `q=${info.info}&key=${YOUTUBE_API_KEY}`
    );

    const json = await data.json();
    setSearchResults(json.items);
  };
  useEffect(() => {
    getData();
  }, []);
  if (searchResults.length === 0) return;
  return (
    <div className="mx-16">
      <Categories />
      {searchResults?.map((video) =>
        video?.id?.videoId === undefined ? (
          ""
        ) : (
          <Link
            to={"/watch?v=" + video.id?.videoId}
            key={video.id?.videoId}
            state={video}
          >
            <SearchResultCard data={video} />
          </Link>
        )
      )}
    </div>
  );
};

export default SearchPage;
