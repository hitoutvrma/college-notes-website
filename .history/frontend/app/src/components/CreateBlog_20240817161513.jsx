import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles

const CreateBlog = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/blogs', { title, content, author });
      alert('Blog post created successfully!');
      setTitle('');
      setContent('');
      setAuthor('');
      navigate("/blogs");
    } catch (error) {
      console.error('Error creating blog post', error);
    }
  };

  const modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{ size: [] }],
      [{ 'color': [] }, { 'background': [] }],          // Dropdowns for color and background color
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'indent': '-1'}, { 'indent': '+1' }],
      ['link', 'image'],
      ['clean']                                         // Remove formatting button
    ],
  };

  const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'color', 'background'             // Formats for color and background color
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Create a New Blog Post</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Content:</label>
          <ReactQuill
            value={content}
            onChange={setContent}
            modules={modules}
            formats={formats}
            style={styles.quill}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Author:</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <button type="submit" style={styles.button}>Create Blog Post</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    color:'whitesmoke',
    maxWidth: '800px',
    margin: '15vh auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    backgroundColor: 'rgb(73, 66, 66, 0.5)',
  },
  header: {
    textAlign: 'center',
    fontSize:'40px',
    color: 'whitesmoke',
  },
  form: {
    color:'white',
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    marginBottom: '5px',
    fontWeight: 'bold',
    color: '#555',
  },
  input: {
    width: '100%',
    height:'40px',
    margin:'40px  0 0 0',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  quill: {
    height: '330px', // Adjust the height to make the text editor larger
    margin:'0 0 80px 0'
    // background-color: '#003300'
  },
  button: {
    padding: '10px 15px',
    fontSize: '18px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: 'var(--font-heading-color)',
    color: 'white',
    cursor: 'pointer',
    alignSelf: 'center',
  },
  buttonHover: {
    backgroundColor: 'white',
  },
};

export default CreateBlog;
