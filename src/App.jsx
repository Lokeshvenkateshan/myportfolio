import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Projects from "../components/Projects";
import Quote from "../components/Quote";
import Contact from "../components/Contact";
import Loading from "../components/Loading";
import Scroll from "../components/Scroll";

function App() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallBtn, setShowInstallBtn] = useState(false);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate loading time (e.g., fetching data)
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 3 seconds loading time
  }, []);

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallBtn(true);
    });
  }, []);
  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("App installed");
        } else {
          console.log("App installation rejected");
        }
        setDeferredPrompt(null);
        setShowInstallBtn(false);
      });
    }
  };

  return (
    <div>
      {isLoading ? (
        <>
          <Loading />
        </>
      ) : (
        <div className="app">
          <Scroll />
          <Navbar />
          <section id="home-sec">
            <Home />
          </section>

          <section id="sills-sec">
            <Skills />
          </section>

          <section id="education-sec">
            <Education />
          </section>

          <section id="projects-sec">
            <Projects />
          </section>

          {/* <section id='quote-sec'>
            <Quote/>
          </section> */}

          <section id="contact-sec">
            <Contact />
          </section>

          {/* <section className="testing purpose">
            <div>
              <h1>App</h1>
              {showInstallBtn && (
                <button onClick={handleInstallClick} className="btn">Install App</button>
              )}
            </div>
          </section> */}

        </div>
      )}
    </div>
  );
}

export default App;
