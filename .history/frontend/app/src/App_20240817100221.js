import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserStatistics from './components/UserStatistics';
import Header from "./components/Header";
import Home from "./components/Home";
import NotesPage from './components/NotesPage';
import { SearchProvider } from './components/SearchContext';
import BlogList from './components/BlogList';
import CreateBlog from './components/CreateBlog';
import NotFoundPage from './components/Notfoundpage';
import Footer from './components/Footer';
// import IT from './components/IT.js';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Civil from './components/Subjects/Civil';
import Ee from './components/Subjects/Ee';

function App() {
  return (
    <SearchProvider>
    <Router>
      <Navbar/>
      {/* <Header/> */}
      {/* <NotesPage/> */}
      <Routes>
        {/* <Route path="/IT" element={<IT/>} /> */}
        <Route path="/IT" element={<NotesPage/>} />
        <Route path="/" element={<Home />} />
        <Route path="/civil" element={<Civil />} />
        <Route path="/ee" element={<Ee />} />
        <Route path="/eee" element={<Eee />} />
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/create_blog" element={<CreateBlog />} />
        <Route path="*" element={<NotFoundPage />} /> {/* Catch-all route */}
      </Routes>

      <Footer/>
    </Router>
    </SearchProvider>
  );
};

export default App;
