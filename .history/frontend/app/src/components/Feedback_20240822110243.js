import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import './css/feedback.css'; // Import your CSS file for styling

const Feedback = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [username, setUsername] = useState('hitesh');
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const navigate = useNavigate();

  const handleSubmitFeedback = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://bitcheat-backend-1.onrender.com/api/feedback', { username, feedback });
      setShowSuccessAlert(true);
      setTimeout(() => {
        setShowSuccessAlert(false);
      }, 3000); // Hide the success alert after 3 seconds
      setFeedback('');
      setUsername('');
      handleClosePopup();
    } catch (error) {
      console.error('Error creating feedback post', error);
    }
  };

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <button className="button" onClick={handleOpenPopup}>Feedback</button>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>Feedback</h2>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Enter your feedback here..."
            />
            <button className="button" onClick={handleSubmitFeedback}>Submit</button>
            <button className="button" onClick={handleClosePopup}>Close</button>
          </div>
        </div>
      )}

      {showSuccessAlert && (
        <div className="success-alert">
          <span className="icon">✔️</span>
          <span className="message">thanks!</span>
        </div>
      )}
    </div>
  );
};

export default Feedback;
