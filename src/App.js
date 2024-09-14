import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import Navbar from './components/Navbar';
import News from './components/News';
import SearchResults from './components/SearchResults'; // Import SearchResults
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const pageSize = 10;
  const apiKey = process.env.apiKey;
  const [progress, setProgress] = useState(0);
  const [articles, setArticles] = useState([]); // Store articles in App.js state

  const setProgressBar = (value) => {
    setProgress(value);
  };

  const handleArticlesUpdate = (newArticles) => {
    setArticles(newArticles); // Update articles
  };

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <LoadingBar height={3} color='#f11946' progress={progress} />
        <Routes>
          <Route
            exact
            path='/'
            element={
              <News 
                setProgress={setProgressBar} 
                apiKey={apiKey} 
                pageSize={pageSize} 
                country='in' 
                category='general' 
                onArticlesUpdate={handleArticlesUpdate} // Pass update function to News
              />
            }
          />
          <Route path='/:category' element={<CategoryNews />} />
          <Route path='/search' element={<SearchResults articles={articles} />} /> {/* Search results route */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const CategoryNews = () => {
  const { category } = useParams();
  const pageSize = 10;
  const apiKey = process.env.apiKey;
  const [progress, setProgress] = useState(0);

  const setProgressBar = (value) => {
    setProgress(value);
  };

  return (
    <News setProgress={setProgressBar} apiKey={apiKey} pageSize={pageSize} country='in' category={category} />
  );
};

export default App;
