import React from 'react';
import './css/footer.css';
const Footer = () => {
  return (
    <section class="footer">
    <div class="social">
    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
  <i class="fa-brands fa-github"></i>
</a>

      <a href="#"><i class="fa-brands fa-instagram"></i></a>
      <a href="#"><i class="fa-brands fa-linkedin"></i></a>
      <a href="#"><i class="fa-brands fa-twitter"></i></a>
    </div>
    <ul class="list">
      <li><a href="#">FAQ</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Abous Us</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
    <p class="copyright">© How to Web Dev | All Rights Reserved</p>
  </section>
  )
}

export default Footer
