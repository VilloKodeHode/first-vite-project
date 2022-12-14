// import logo from "./assets/react.svg";
import CVstandardpic from "./assets/Standard CV pic space.png";
import CVstandard from "./assets/Standard CV space.pdf";
import CVfancy from "./assets/Fancy CV space.png";
import calendar from "./assets/Christmas calendar.png";
import cssArt from "./assets/Css art.png";
import jobSimulator from "./assets/First DOMS.png";
import valBeards from "./assets/Valhalla beards.png";
import "./App.css";
import { render } from "react-dom";
import { useState } from "react";

//Components:
//legg inn alle componentene som er lagd inn  her og exporter/importer
import Card from "./components/Card";
import PitchWindow from "./components/pitch";
import { PitchText } from "./components/pitch";
import Navlink from "./components/navlink";
import Project from "./components/projectcard";
import MySkillsImage from "./components/skillsicon";
import { MySkillsImageLinked } from "./components/skillsicon";

//Data
import { cardInfo } from "./data/data";

// console.log(cardInfo);

/**
 * Main component
 */
function App() {
  return (
    //here normal html code can be written:
    //! remember that class have to be written as "classname"
    <div className="App">
      <div id="top"></div>
      <nav>
        <div className="nav-left-side">
          <Navlink>
            <img className="company-logo" src={"./src/assets/Logo.png"}></img>
          </Navlink>
        </div>

        <Navlink
          href="#top"
          name="Home"
          src="https://cdn-icons-png.flaticon.com/512/25/25694.png"
        />

        <Navlink
          href="#main"
          name="About"
          src="https://cdn-icons-png.flaticon.com/512/1/1176.png"
        />

        <Navlink
          href="#projects"
          name="Projects"
          src="https://cdn-icons-png.flaticon.com/512/4257/4257460.png"
        />

        <Navlink
          href="#footer"
          name="Contact"
          src="https://cdn-icons-png.flaticon.com/512/7269/7269995.png"
        />
      </nav>

      <header>
        <article className="header_text">
          <h1 id="home">
            <span>Joakim Villo</span>
          </h1>
          <p>
            For tiden går jeg på kurs om Front-End-Development
            <br />
            og bruker endeløse timer på å lære så mye jeg kan om koding og
            design.
            <br />
            Jeg nyter hvert eneste sekund og blir bare mer og mer interessert i
            å lære mer!
          </p>
        </article>
        <div className="wrapper">
          <img className="hero" src={"./src/assets/Joakim-in-laptop.png"} />
        </div>
        <div className="wrapper cv-wrapper">
          <a href={CVstandard} target="_blank" className="cv standard">
            <img className="cv standard" src={CVstandardpic} />
            {/* <p className="cv">Full CV</p> */}
          </a>

          <a href={CVfancy} target="_blank" className="cv fancy">
            <img className="cv fancy" src={CVfancy} />
            {/* <p className="cv">Short CV</p> */}
          </a>
        </div>
        <div className="wrapper">
          <article className="header_text">
            <PitchText
              header="Jeg elsker å kode."
              text="Jeg koder masse på fritiden og synes det er kjempegøy å lære noe
              nytt. Mestringsfølelsen av å få til noe som jeg har sittet fast
              med lenge er helt fantastisk!"
            />
            <PitchText
              header="Å bidra i arbeidsmiljøet er for meg veldig viktig."
              text="Det å hjelpe andre og motta hjelp med åpne hender synes jeg er
              utrolig viktig i et team."
            />
            <PitchText
              header="Mitt ønske er å jobbe med UI og UX."
              text="Jeg har som mål å lære så mye som mulig om dette. JavaScript med React og Vite lærer
              jeg nå, men jeg har et veldig sterkt ønske å utvide repertoaret
              mitt med andre kode-språk."
            />
          </article>
          <PitchWindow />
        </div>
      </header>

      <main id="main">
        <section className="knowledge" id="knowledge">
          <div className="myknowledge">
            <h2>Knowledge</h2>
            <h3>Code</h3>
            <div className="knowledge_wrapper">
              <MySkillsImage
                src="https://cdn-icons-png.flaticon.com/512/186/186320.png"
                alt="HyperText Markup Language"
              />
              <MySkillsImage
                src="https://cdn-icons-png.flaticon.com/512/802/802251.png"
                alt="Cascading StyleSheets"
              />
              <MySkillsImage
                src="https://cdn-icons-png.flaticon.com/512/1892/1892549.png"
                alt="JavaScript"
              />
            </div>

            <h3>Source code editors</h3>
            <div className="knowledge_wrapper">
              <MySkillsImage
                src="https://cdn-icons-png.flaticon.com/512/3334/3334886.png"
                alt="React"
              />
              <MySkillsImage
                src="https://cdn-icons-png.flaticon.com/512/906/906324.png"
                alt="VSC"
              />
            </div>

            <h3>Design</h3>
            <div className="knowledge_wrapper">
              <MySkillsImageLinked
                src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png"
                alt="Figma"
                href="https://www.figma.com/files/project/74340755/Joakim?fuid=1166284176523730225"
              />
              <MySkillsImage
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Canva_icon_2021.svg/600px-Canva_icon_2021.svg.png?20220821125247"
                alt="ClickUp"
              />
              <MySkillsImage
                src="https://cdn-icons-png.flaticon.com/512/1147/1147155.png"
                alt="Photoshop"
              />
            </div>

            <h3>Repository</h3>
            <div className="knowledge_wrapper">
              <MySkillsImage
                src="https://cdn-icons-png.flaticon.com/512/1680/1680899.png"
                alt="Git"
              />
              <MySkillsImageLinked
                src="https://cdn-icons-png.flaticon.com/512/4494/4494749.png"
                alt="GitHub"
                href="https://github.com/VilloKodeHode"
              />
            </div>
          </div>

          <div className="myskills">
            <h2>My skills</h2>
            <div className="knowledge_wrapper">
              <div className="knowledge_wrapper">
                <figure>
                  <h3>Gruppearbeid</h3>
                  <img
                    src={
                      "https://cdn-icons-png.flaticon.com/512/8450/8450164.png"
                    }
                  />
                  <p>Jeg er veldig glad i å samarbeide med andre.</p>
                </figure>
              </div>
              <div className="knowledge_wrapper">
                <figure>
                  <h3>Problemløsning</h3>
                  <img
                    src={
                      "https://cdn-icons-png.flaticon.com/512/1352/1352004.png"
                    }
                  />
                  <p>Problemløsning synes jeg er veldig lærerikt.</p>
                </figure>
              </div>
              <div className="knowledge_wrapper">
                <figure>
                  <h3>Responsive design</h3>
                  <img
                    src={
                      "https://cdn-icons-png.flaticon.com/512/2696/2696459.png"
                    }
                  />
                  <p>
                    Jeg jobber for at det jeg lager skal kunne være resposivt
                  </p>
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section className="container-4" id="projects">
          <h2>Projects</h2>
          <div className="projects_wrapper">
            <Project
              href="https://villokodehode.github.io/Job-simulator/"
              projectName="Job simulator"
              src={jobSimulator}
              description="Et prosjekt jeg har gradvis bygd mer og mer kompleks ettersom jeg har lært mer"
              hrefCode="https://villokodehode.github.io/Job-simulator/"
            />

            <Project
              href="https://villokodehode.github.io/Christmas-Calender/"
              projectName="Christmas Calender"
              src={calendar}
              description="Et samarbeidsprosjekt hvor jeg har laget min egen variant"
              hrefCode="https://github.com/VilloKodeHode/Christmas-Calender"
            />

            <Project
              href="https://www.figma.com/file/sCZngSCqMOKbRciWTLZodh/Vallhala-Beards?node-id=0%3A1&t=c4JqLQ0yMjR0gZQ0-0"
              projectName="Valhalla Beards"
              src={valBeards}
              description="Figma prosjekt for en imaginær barbershop"
            />

            <Project
              href="https://villokodehode.github.io/CSS-art/"
              projectName="CSS Art"
              src={cssArt}
              description="Prøvde å se mulighetene med css"
              hrefCode="https://github.com/VilloKodeHode/CSS-art"
            />
          </div>
        </section>
      </main>

      <section className="test-area">
        {cardInfo.map((element, index) => {
          return <Card key={index} title={element.title} text={element.text} />;
        })}
      </section>

      <footer className="footer" id="footer">
        <div className="footer-contact">
          <h3>Contact information:</h3>
          <div className="inline">
            <img
              src={"https://cdn-icons-png.flaticon.com/512/126/126341.png"}
            />
            <p>+47 932 85 044</p>
          </div>
          <div className="inline">
            <img
              src={"https://cdn-icons-png.flaticon.com/512/542/542689.png"}
            />
            <p>VilloKodeHode@Gmail.com</p>
          </div>
        </div>
        <h2 className="footer-logo">
          <span>JV</span>
        </h2>
        {clickCounter()}
        <LifeCycle>
          <Card title="LifeCycle" text="The human lifecycle" />
          <img src="https://cdn-icons-png.flaticon.com/512/2102/2102727.png" />
          <img src="https://cdn-icons-png.flaticon.com/512/1702/1702342.png" />
          <img src="https://cdn-icons-png.flaticon.com/512/2880/2880690.png" />
          <img src="https://cdn-icons-png.flaticon.com/512/6032/6032281.png" />
          <img src="https://cdn-icons-png.flaticon.com/512/4440/4440953.png" />
          <img src="https://cdn-icons-png.flaticon.com/512/1742/1742554.png" />
          <img src="https://cdn-icons-png.flaticon.com/512/252/252129.png" />
        </LifeCycle>
        <div className="footer-navigate">
          <h3>Navigate</h3>
          <div>
            <ul>
              <li>
                <a href="#top">Home</a>
              </li>
              <li>
                <a href="#main">About</a>
              </li>
              {/* <li>
                <a href="#knowledge">Knowledge</a>
              </li> */}
              <li>
                <a href="#projects">Projects</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default App;

function LifeCycle(props) {
  return <div className="lifeCycle">{props.children}</div>;
}

//! kan jeg bruke en if statement for å ta bort p className description

// <button className="pitch-btn" id="pitch-btn"></button>

function clickCounter() {
  const [count, setCount] = useState(0);

  return (
    <div className="footer-clicker">
      <p>Clicked: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
