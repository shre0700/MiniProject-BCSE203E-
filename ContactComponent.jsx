
import React from 'react';

const ContactComponent = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const scriptURL = 'https://script.google.com/macros/s/AKfycbw-b0H02jaRYRL9yaVFe7mL2pU4tRtdVxuN-w1-zN_KH2NqwRCNJKpw3EQI5TzKRcgM/exec';
    const form = e.target;
    const msg = form.querySelector("#msg");

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => {
        msg.innerText = "Thank you for your message!";
        setTimeout(function () {
          msg.innerText = "";
        }, 20000);
        form.reset();
      })
      .catch(error => console.error('Error!', error.message));
  };

  return (
    <div id="contact">
      <div className="container">
        <div className="row">
          <div className="contact-left">
            <h1 className="sub-title">Contact Me</h1>
            <p>agarwalshreya2004@gmail.com</p>
            <p>+91 7357737151</p>
            <div className="social-icons">
              <a href="https://www.instagram.com/_shreyaagarwal?igsh=MXc1OGVnMzFicTFraw==">Instagram</a>
              <a href="https://www.linkedin.com/in/shreya-agarwal-276bb6276/">LinkedIn</a>
              <a href="https://github.com/shre0700">GitHub</a>
            </div>
            <a href="Resume_final.pdf" download className="btn btndownload">Download Resume</a>
          </div>
          <div className="contact-right">
            <form name="submit-to-google-sheet" onSubmit={handleSubmit}>
              <input type="text" name="Name" placeholder="Your Name" required />
              <input type="email" name="Email" placeholder="Your email" required />
              <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
              <button type="submit" className="btn btndownload">Submit</button>
            </form>
            <span id="msg"></span>
          </div>
        </div>
      </div>
      <div class="copyright">
        <p>Copyright© Shreya Agarwal</p>
      </div>
    </div>
  );
}

export default ContactComponent;
