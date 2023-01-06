import React, { useState, useEffect } from "react";

function Reveal() {
  const [reveals, setReveals] = useState([]);

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    setReveals(elements);
  }, []);

  useEffect(() => {
    function handleScroll() {
      for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add('active');
        } else {
          reveals[i].classList.remove('active');
        }
      }
    }

    window.addEventListener('scroll', handleScroll());

  }, [reveals]);

  return (
    <section className="skills">
      <ul>
        <li className="reveal">
          <img src="assets/images/html5logo.svg" alt="HTML5"/>
          <p>HTML is the root of the internet, and there is no doubt I've mastered this skill. I'm talented in semantic HTML as you will see if you use this page with a screen reader.</p>
        </li>
        <li className="reveal">
          <img src="assets/images/csslogo.svg" alt="CSS3"/>
          <p>Pretty it up, that's what this technology is used for.</p>
        </li>
        <li className="reveal">
          <img src="assets/images/laravellogo.svg" alt="Laravel"/>
          <p>Laravel is a fun and large framework. I use it on a daily basis for creating APIs and fullstack applications</p>
        </li>
        <li className="reveal">
          <img src="assets/images/mysqllogo.svg" alt="MYSQL"/>
          <p>If you need dynamic content on your website or application, you'll need a database, which is where MYSQL comes in.</p>
        </li>
        <li className="reveal">
          <img src="assets/images/phplogo.svg" alt="PHP"/>
          <p>Some say PHP is the heart of the internet. I've built several projects using PHP alone.</p>
        </li>
        <li className="reveal">
          <img src="assets/images/reactlogo.svg" alt="ReactJS"/>
          <p>Finally a frontend framework with some pizzaz. While flashy, this has been incredibly useful for building front end applications.</p>
        </li>
      </ul>
    </section>
  )
}

export default Reveal;
