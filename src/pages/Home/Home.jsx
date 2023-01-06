import React from "react";
import Reveal from "./components/Reveal";

const Home = () => {
    
      
        return (
        <main className="Home">
            <section className="top">
                <img src="assets/images/Roger.jpg" alt="Roger Falck" />
                <div className="welcomebox">
                    <h1 className="welcome">Welcome</h1>
                </div>
            </section>
            <section className="about">
                <h1 className="skills">Skills</h1>
                    <Reveal />
            </section>
        </main>
        );
      }
export default Home