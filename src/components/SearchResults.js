import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

const SearchResults = ({ articles }) => {
  const location = useLocation();
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const searchTerm = new URLSearchParams(location.search).get('query') || ''; // Get the search term from URL

  useEffect(() => {
    if (articles && articles.length > 0) {
      const filteredResults = articles.filter(article => 
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        article.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(filteredResults);
      setLoading(false);
    }
  }, [searchTerm, articles]);

  return (
    <div className="search-results-container">
      <h1 className="text-center" style={{ margin: "35px 0px", marginTop: "90px" }}>
        Search Results for "{searchTerm}"
      </h1>
      {loading && <Spinner />}
      {!loading && searchResults.length === 0 && <p className="text-center">No results found.</p>}
      {searchResults.length > 0 && (
        <div className="container">
          <div className="row">
            {searchResults.map((element, index) => (
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
    </div>
  );
};

SearchResults.propTypes = {
  articles: PropTypes.array.isRequired,
};

export default SearchResults;
