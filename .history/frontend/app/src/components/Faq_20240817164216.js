// src/FAQ.js
import React, { useState } from 'react';
import './FAQ.css'; // Import a CSS file for styling

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What is React?',
      answer: 'React is a JavaScript library for building user interfaces.'
    },
    {
      question: 'How do I use React?',
      answer: 'You can use React by importing it into your JavaScript files and using its components to build your UI.'
    },
    {
      question: 'What is JSX?',
      answer: 'JSX is a syntax extension for JavaScript that looks similar to XML or HTML. It allows you to write HTML elements and components in your JavaScript code.'
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div
              className="faq-question"
              onClick={() => handleToggle(index)}
            >
              {faq.question}
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
