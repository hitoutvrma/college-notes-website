import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 5;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/blogs');
        const sortedBlogs = response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setBlogs(sortedBlogs);
      } catch (error) {
        console.error('Error fetching blogs', error);
      }
    };
    fetchBlogs();
  }, []);

  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const currentBlogs = blogs.slice((currentPage - 1) * blogsPerPage, currentPage * blogsPerPage);

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>BLOGS</h1>
      {currentBlogs.map((blog) => (
        <div key={blog._id} style={styles.blogCard}>
          <h2 style={styles.blogTitle}>{blog.title}</h2>
          <div
            style={styles.blogContent}
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
          <p style={styles.blogAuthor}><i>By {blog.author}</i></p>
        </div>
      ))}
      <div style={styles.pagination}>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handleClick(index + 1)}
            style={{
              ...styles.pageButton,
              ...(currentPage === index + 1 ? styles.activePageButton : {}),
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    margin: '9.5vh 0 0 0',
    padding: '20px',
    backgroundColor: 'var(--background-color)',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  header: {
    textAlign: 'center',
    borderBottom: '1px solid black',
    color: '#333',
    paddingBottom:'30px',
    marginBottom: '20px',
  },
  blogCard: {
    borderBottom: '1px solid black',
    backgroundColor:'var(--lighter-color)',
    padding:'10px',
    paddingBottom: '10px',
    marginBottom: '20px',
  },
  blogTitle: {
    fontSize: '30px',
    // textAlign:'center',
    color: '#007BFF',
    marginBottom: '10px',
  },
  blogContent: {
    fontSize: '16px',
    color: '#555',
    marginBottom: '10px',
  },
  blogAuthor: {
    fontSize: '14px',
    color: '#888',
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
  pageButton: {
    margin: '0 5px',
    padding: '5px 10px',
    cursor: 'pointer',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
  },
  activePageButton: {
    backgroundColor: '#0056b3',
  },
};

export default BlogList;
