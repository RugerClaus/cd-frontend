import {React, useState,useEffect} from "react";

const Portfolio = () => {
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
        let elementVisible = 150;
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
        <main className="Portfolio">
            <div className="portitem reveal">
                <img src="assets/images/reinamezastudios.png" alt="" />
                <p>This is a website that I did for a local photographer, Reina Meza.</p>
            </div>
            <div className="portitem reveal">
                <img src="assets/images/slumdweller.PNG" alt="" />
                <p>This is a fullstack web application that I built for the band Slumdweller from Salt Lake City.</p>
            </div>
        </main>
    )
}
export default Portfolio