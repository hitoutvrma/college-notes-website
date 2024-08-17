import LoginButton from './login';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import React, { useContext, useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Link, useLocation } from 'react-router-dom';
import { SearchContext } from './SearchContext';
import Feedback from './Feedback';
import Colorbutton from './Colorbutton';


const Navbar = () => {
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
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };


  return (
    
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">bitCheat</Link>
        {location.pathname === '/civil' && (

              <input class='search-bar'
                type="text"
                id="searchInput"
                placeholder="Search for chapters..."
                value={searchText}
                onChange={handleSearchInputChange}
              />

          )}

            <Colorbutton/>
        <div className="navbar-toggle" onClick={toggleSidebar}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <nav className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <Link to='/blogs'>
          <button class="button" id="theme-toggle">Blogs</button>
            </Link>
                        {/* <Colorbutton/> */}
          <Link to='create_blog'>
          <button class="button">Create blog</button>
            </Link>
            <Feedback/>
            <LoginButton/>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
