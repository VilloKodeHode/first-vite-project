import "./styles/App.css";

// import "./styles";
import { useState } from "react";

//!importen fra styledCssModules (for å linke til modules)
// import StyledCssModules from "./components/StyledCssModules/StyledCssModules";

//Components:
//legg inn alle componentene som er lagd inn  her og exporter/importer
import CompanyLogo from "./components/NavBar/companyLogo";
import Card from "./components/Card";
import PitchWindow from "./components/Pitch/pitch.jsx";
import { PitchText } from "./components/Pitch/pitch.jsx";
import Navlink from "./components/NavBar/navlink";
import Cv from "./components/CvWithEffectsAndLink/Cv";
import Project from "./components/ProjectSection/projectcard";
import KnowledgeIcon from "./components/SectionSkillsAndKnowledge/skillsicon";
import { KnowledgeIconLinked } from "./components/SectionSkillsAndKnowledge/skillsicon";
import { MySkills } from "./components/SectionSkillsAndKnowledge/skillsicon";
import ClickCounter from "./components/ClickCounterButton/ClickCounterButton";

//Data
// import { cardInfo } from "./data/data";

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
        <CompanyLogo href="" src="./src/assets/logo.png" />

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
          <img className="hero logo" src={"./src/assets/Looking-right.png"} />
        </div>
        <div className="wrapper cv-wrapper">
          <Cv
            href="./src/assets/Standard CV space.pdf"
            src="./src/assets/Standard CV pic space.png"
            className="cv standard"
          />
          <Cv
            href="./src/assets/Fancy CV space.png"
            src="./src/assets/Fancy CV space.png"
            className="cv fancy"
          />
        </div>
        <div className="wrapper">
          <article className="header_text">
            <PitchText
              title="Jeg elsker å kode."
              text="Jeg koder masse på fritiden og synes det er kjempegøy å lære noe
              nytt. Mestringsfølelsen av å få til noe som jeg har sittet fast
              med lenge er helt fantastisk!"
            />
            <PitchText
              title="Å bidra i arbeidsmiljøet er for meg veldig viktig."
              text="Det å hjelpe andre og motta hjelp med åpne hender synes jeg er
              utrolig viktig i et team."
            />
            <PitchText
              title="Mitt ønske er å jobbe med UI og UX."
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
              <KnowledgeIcon
                src="https://cdn-icons-png.flaticon.com/512/136/136528.png"
                alt="HyperText Markup Language"
              />
              <KnowledgeIcon
                src="https://cdn-icons-png.flaticon.com/512/136/136527.png"
                alt="Cascading StyleSheets"
              />
              <KnowledgeIcon
                src="https://cdn-icons-png.flaticon.com/512/136/136530.png"
                alt="JavaScript"
              />
            </div>

            <h3>Source code editors</h3>
            <div className="knowledge_wrapper">
              <KnowledgeIcon
                src="https://cdn-icons-png.flaticon.com/512/3334/3334886.png"
                alt="React"
              />
              <KnowledgeIcon src="./src/assets/VSC.png" alt="VSC" />
              <KnowledgeIcon
                src="https://seeklogo.com/images/V/vite-logo-BFD4283991-seeklogo.com.png"
                alt="Vite"
              />
            </div>

            <h3>Design</h3>
            <div className="knowledge_wrapper">
              <KnowledgeIconLinked
                src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png"
                alt="Figma"
                href="https://www.figma.com/files/project/74340755/Joakim?fuid=1166284176523730225"
              />
              <KnowledgeIcon
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Canva_icon_2021.svg/600px-Canva_icon_2021.svg.png?20220821125247"
                alt="Canva"
              />
              <KnowledgeIcon src="./src/assets/Photoshop.png" alt="Photoshop" />
            </div>

            <h3>Repository</h3>
            <div className="knowledge_wrapper">
              <KnowledgeIcon src="./src/assets/Git.png" alt="Git" />
              <KnowledgeIconLinked
                src="https://cdn-icons-png.flaticon.com/512/4494/4494749.png"
                alt="GitHub"
                href="https://github.com/VilloKodeHode"
              />
            </div>
          </div>

          <div className="myskills">
            <h2>My skills</h2>
            <div className="knowledge_wrapper">
              <MySkills
                title="Gruppearbeid"
                src="https://cdn-icons-png.flaticon.com/512/8450/8450164.png"
                description="Jeg er veldig glad i å samarbeide med andre"
              />

              <MySkills
                title="Problemløsning"
                src="https://cdn-icons-png.flaticon.com/512/1352/1352004.png"
                description="Problemløsning synes jeg er veldig lærerikt"
              />

              <MySkills
                title="Responsive design"
                src="https://cdn-icons-png.flaticon.com/512/2696/2696459.png"
                description="Jeg jobber for at det jeg lager skal kunne være resposivt"
              />
            </div>
          </div>
        </section>

        <section className="container-4" id="projects">
          <h2>Projects</h2>
          <div className="projects_wrapper">
            <Project
              href="https://villokodehode.github.io/Job-simulator/"
              projectName="Job simulator"
              src={"./src/assets/First DOMS.png"}
              description="Et prosjekt jeg har gradvis bygd mer og mer kompleks ettersom jeg har lært mer"
              hrefCode="https://villokodehode.github.io/Job-simulator/"
            />

            <Project
              href="https://villokodehode.github.io/Christmas-Calender/"
              projectName="Christmas Calender"
              src={"./src/assets/Christmas calendar.png"}
              description="Et samarbeidsprosjekt hvor jeg har laget min egen variant"
              hrefCode="https://github.com/VilloKodeHode/Christmas-Calender"
            />

            <Project
              href="https://www.figma.com/file/sCZngSCqMOKbRciWTLZodh/Vallhala-Beards?node-id=0%3A1&t=c4JqLQ0yMjR0gZQ0-0"
              projectName="Valhalla Beards"
              src={"./src/assets/Valhalla beards.png"}
              description="Figma prosjekt for en imaginær barbershop"
            />

            <Project
              href="https://villokodehode.github.io/CSS-art/"
              projectName="CSS Art"
              src={"./src/assets/Css art.png"}
              description="Prøvde å se mulighetene med css"
              hrefCode="https://github.com/VilloKodeHode/CSS-art"
            />
          </div>
        </section>
      </main>

      {/* <section className="test-area">
        {cardInfo.map((element, index) => {
          return <Card key={index} title={element.title} text={element.text} />;
        })}
      </section> */}

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
        {ClickCounter()}
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

//! kan jeg bruke en if statement for å ta bort p className description?
