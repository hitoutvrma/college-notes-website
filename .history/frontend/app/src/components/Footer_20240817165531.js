import React from 'react';
import './css/footer.css';
const Footer = () => {
  return (
    <section class="footer">
    <div class="social">
    <a href="https://github.com/hitoutvrma" target="_blank" rel="noopener noreferrer">
  <i class="fa-brands fa-github"></i>
</a>

      <a href="https://instagram/hitoutvrma"><i class="fa-brands fa-instagram"></i></a>
      <a href="#"><i class="fa-brands fa-linkedin"></i></a>
      <a href="#"><i class="fa-brands fa-twitter"></i></a>
    </div>
    <ul class="list">
      <li><a href="/faq">FAQ</a></li>
      <li><a href="/services">Services</a></li>
      <li><a href="/aboutus">About Us</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
    <p class="copyright">© How to Web Dev | All Rights Reserved</p>
  </section>
  )
}

export default Footer
