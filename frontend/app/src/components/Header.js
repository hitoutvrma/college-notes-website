import React, { useContext, useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./login";
import { Link, useLocation } from 'react-router-dom';
import { SearchContext } from './SearchContext';
import './css/header.css';
import Feedback from './Feedback';
import './css/feedback.css';
import Colorbutton from './Colorbutton';
export default function Header() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const location = useLocation();
  const { searchText, setSearchText } = useContext(SearchContext);
  const [filteredText, setFilteredText] = useState('');

  const handleSearchInputChange = (event) => {
    const value = event.target.value;
    setSearchText(value);
    setFilteredText(value.toLowerCase());
  };

  useEffect(() => {
    if (location.pathname === '/IT') {
      filterChapters();
    }
  }, [filteredText, location.pathname]);

  const filterChapters = () => {
    const blocks = document.querySelectorAll('.block');
    blocks.forEach(block => {
      const title = block.querySelector('.title').innerText.toLowerCase();
      if (title.includes(filteredText)) {
        block.classList.remove('hidden');
      } else {
        block.classList.add('hidden');
      }
    });
  };
  return (
    <div>
                  <div class="navbar-toggle" id="navbar-toggle">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
      <div className='header'>
        <div className='logos'>
          bitCheat
          {/* <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
            <path d="M12 0l3.09 6.26L22 7.27l-5 4.87L18.18 22 12 18.54 5.82 22 7 12.14l-5-4.87 6.91-1.01L12 0z" />
          </svg> */}
        </div>
        <div className="header-buttons">
          
          {location.pathname === '/IT' && (
            <div className="search-container">
              <input
                type="text"
                id="searchInput"
                placeholder="Search for chapters..."
                value={searchText}
                onChange={handleSearchInputChange}
              />
            </div>
          )}
            <Feedback/>
            <Link to='/blogs'>
          <button class="button" id="theme-toggle">Blogs</button>
            </Link>
            <Link to='create_blog'>
          <button class="button">Create blog</button>
            </Link>
            <Colorbutton/>
          <div className='loginbutton'>
            <LoginButton />
          </div>
        </div>
      </div>
    </div>
  );
}
