import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true); // Flag to track if there are more articles to fetch

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // Function to fetch data from API
  const fetchData = async (pageNumber) => {
    const url = `https://gnews.io/api/v4/top-headlines?country=${props.country}&category=${props.category}&token=${props.apiKey}&page=${pageNumber}&lang=en`;
    const response = await fetch(url);
    return response.json();
  };

  // Function to fetch more data for infinite scroll
  const fetchMoreData = async () => {
    setLoading(true); // Set loading to true to display the loader
    const data = await fetchData(page);
    setLoading(false); // Set loading to false once new data is fetched

    if (data.articles.length === 0) {
      setHasMore(false); // No more articles to fetch
    } else {
      setArticles(data.articles); // Replace articles instead of appending
      setPage(page + 1); // Increment page for the next fetch
    }
  };

  useEffect(() => {
    document.title = `Today News - ${capitalizeFirstLetter(props.category)}`;
    fetchMoreData(); // Fetch initial data on component mount
  }, [props.category]); // Update articles on category change

  return (
    <>
      <h1
        className="text-center"
        style={{ margin: "35px 0px", marginTop: "90px" }}
      >
        Today News - Top {capitalizeFirstLetter(props.category)} Headlines
      </h1>
      {loading && articles.length === 0 && <Spinner />} {/* Display spinner only if there are no articles */}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={hasMore} // Control infinite scroll based on hasMore flag
        loader={loading && articles.length > 0 && <Spinner />}
      >
        {/* Render articles only if there are articles */}
        {articles.length > 0 && (
          <div className="container">
            <div className="row">
              {articles.map((element, index) => (
                <div className="col-md-4" key={index}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imageUrl={element.image}
                    Url={element.url}
                    source={element.source.name}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </InfiniteScroll>
      {/* Display message when there are no more articles */}
      {!loading && !hasMore && <p>No more articles to show.</p>}
    </>
  );
};

News.defaultProps = {
  country: "us",
  category: "general",
  apiKey: "72545b68ee22bbd9b2084ec5c69ff5e2",
};

News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  apiKey: PropTypes.string,
};

export default News;
