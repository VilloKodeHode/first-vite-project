// import logo from "./assets/react.svg";
import hero from "./assets/Joakim-in-laptop.png";
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

        <Navlink>
          <a href="#top">
            <p>Home</p>
            <img
              src={"https://cdn-icons-png.flaticon.com/512/25/25694.png"}
            ></img>
          </a>
        </Navlink>

        <Navlink>
          <a href="#main">
            <p>About</p>
            <img
              src={"https://cdn-icons-png.flaticon.com/512/1/1176.png"}
            ></img>
          </a>
        </Navlink>

        <Navlink>
          <a href="#footer">
            <p>Footer</p>
            <img
              src={"https://cdn-icons-png.flaticon.com/512/3596/3596207.png"}
            ></img>
          </a>
        </Navlink>
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
          <img className="hero" src={hero} />
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
            <p>
              <span>Jeg elsker å kode.</span>
              <br />
              Jeg koder masse på fritiden og synes det er kjempegøy å lære noe
              nytt. Mestringsfølelsen av å få til noe som jeg har sittet fast
              med lenge er helt fantastisk!
            </p>
            <p>
              <span>Å bidra i arbeidsmiljøet er for meg veldig viktig.</span>
              <br />
              Det å hjelpe andre og motta hjelp med åpne hender synes jeg er
              utrolig viktig i et team.
            </p>
            <p>
              <span>Mitt ønske er å jobbe med UI og UX.</span>
              <br />
              Jeg har som mål å lære så mye som mulig om dette. JavaScript lærer
              jeg nå, men jeg har et veldig sterkt ønske å utvide repertoaret
              mitt med andre kode-språk.
            </p>
          </article>
          {pitchWindow()}
        </div>
      </header>

      <main id="main">
        <section class="knowledge" id="knowledge">
          <div class="myknowledge">
            <h2>Knowledge</h2>
            <h3>Code</h3>
            <div class="knowledge_wrapper">
              <figure class="img_wrap">
                <img
                  src={"https://cdn-icons-png.flaticon.com/512/186/186320.png"}
                  alt="HyperText Markup Language"
                />
              </figure>
              <figure class="img_wrap">
                <img
                  src={"https://cdn-icons-png.flaticon.com/512/802/802251.png"}
                  alt="Cascading StyleSheets"
                />
              </figure>
              <figure class="img_wrap">
                <img
                  src={
                    "https://cdn-icons-png.flaticon.com/512/1892/1892549.png"
                  }
                  alt="JavaScript"
                />
              </figure>
            </div>

            <h3>Source code editors</h3>
            <div class="knowledge_wrapper">
              <figure class="img_wrap">
                <img
                  src={
                    "https://cdn-icons-png.flaticon.com/512/3334/3334886.png"
                  }
                  alt="React"
                />
              </figure>
              <figure class="img_wrap">
                <img
                  src={"https://cdn-icons-png.flaticon.com/512/906/906324.png"}
                  alt="VSC"
                />
              </figure>
            </div>

            <h3>Design</h3>
            <div class="knowledge_wrapper">
              <figure class="img_wrap">
                <a
                  href="https://www.figma.com/files/project/74340755/Joakim?fuid=1166284176523730225"
                  target="_blank"
                >
                  <img
                    src={
                      "https://cdn-icons-png.flaticon.com/512/5968/5968705.png"
                    }
                    alt="Figma"
                  />
                </a>
              </figure>
              <figure class="img_wrap">
                <img
                  src={
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Canva_icon_2021.svg/600px-Canva_icon_2021.svg.png?20220821125247"
                  }
                  alt="ClickUp"
                />
              </figure>
              <figure class="img_wrap">
                <img
                  src={
                    "https://cdn-icons-png.flaticon.com/512/1147/1147155.png"
                  }
                  alt="Photoshop"
                />
              </figure>
            </div>

            <h3>Repository</h3>
            <div class="knowledge_wrapper">
              <figure class="img_wrap">
                <img
                  src={
                    "https://cdn-icons-png.flaticon.com/512/1680/1680899.png"
                  }
                  alt="Git"
                />
              </figure>
              <figure class="img_wrap">
                <a href="https://github.com/VilloKodeHode" target="_blank">
                  <img
                    src={
                      "https://cdn-icons-png.flaticon.com/512/4494/4494749.png"
                    }
                    alt="GitHub"
                  />
                </a>
              </figure>
            </div>
          </div>

          <div class="myskills">
            <h2>My skills</h2>
            <div class="knowledge_wrapper">
              <div class="knowledge_wrapper">
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
              <div class="knowledge_wrapper">
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
              <div class="knowledge_wrapper">
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

        <section class="container-4" id="projects">
          <h2>Projects</h2>
          <div class="projects_wrapper">
            <div class="outer-wrapper">
              <div class="wrapper">
                <a
                  href="https://villokodehode.github.io/Job-simulator/"
                  target="_blank"
                >
                  <figure class="img_wrap">
                    <h3>
                      Job <br />
                      simulator
                    </h3>
                    <img src={jobSimulator} />
                    <p>
                      Et prosjekt jeg har gradvis bygd mer og mer kompleks
                      ettersom jeg har lært mer
                    </p>
                  </figure>
                </a>
              </div>
              <a
                href="https://github.com/VilloKodeHode/Job-simulator"
                target="_blank"
              >
                <p class="description">(Kode)</p>
              </a>
            </div>
            <div class="outer-wrapper">
              <div class="wrapper">
                <a
                  href="https://villokodehode.github.io/Christmas-Calender/"
                  target="_blank"
                >
                  <figure class="img_wrap">
                    <h3>
                      Christmas
                      <br />
                      Calender
                      <br />
                    </h3>
                    <img src={calendar} />
                    <p>
                      Et samarbeidsprosjekt hvor jeg har laget min egen variant.
                    </p>
                  </figure>
                </a>
              </div>
              <a
                href="https://github.com/VilloKodeHode/Christmas-Calender"
                target="_blank"
              >
                <p class="description">(Kode)</p>
              </a>
            </div>
            <div class="outer-wrapper">
              <div class="wrapper">
                <a
                  href="https://www.figma.com/file/sCZngSCqMOKbRciWTLZodh/Vallhala-Beards?node-id=0%3A1&t=c4JqLQ0yMjR0gZQ0-0"
                  target="_blank"
                >
                  <figure class="img_wrap">
                    <h3>
                      Valhalla
                      <br />
                      Beards
                      <br />
                    </h3>
                    <img src={valBeards} />
                    <p>Figma prosjekt for en imaginær barbershop</p>
                  </figure>
                </a>
              </div>
              <a
                href="https://github.com/VilloKodeHode/Christmas-Calender"
                target="_blank"
              >
                <p class="description">(Kode)</p>
              </a>
            </div>
            <div class="outer-wrapper">
              <div class="wrapper">
                <a
                  href="https://villokodehode.github.io/CSS-art/"
                  target="_blank"
                >
                  <figure class="img_wrap">
                    <h3>
                      CSS
                      <br />
                      Art
                      <br />
                    </h3>
                    <img src={cssArt} />
                    <p>Trying out som CSS art</p>
                  </figure>
                </a>
              </div>
              <a
                href="https://github.com/VilloKodeHode/CSS-art"
                target="_blank"
              >
                <p class="description">(Kode)</p>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer class="footer" id="footer">
        <div class="footer-contact">
          <h3>Contact information:</h3>
          <div class="inline">
            <img
              src={"https://cdn-icons-png.flaticon.com/512/126/126341.png"}
            />
            <p>+47 932 85 044</p>
          </div>
          <div class="inline">
            <img
              src={"https://cdn-icons-png.flaticon.com/512/542/542689.png"}
            />
            <p>VilloKodeHode@Gmail.com</p>
          </div>
        </div>

        <h2 class="footer-logo">
          <span>JV</span>
        </h2>

        {clickCounter()}
        <div class="footer-navigate">
          <h3>Navigate</h3>
          <div>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#knowledge">Knowledge</a>
              </li>
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

function Navlink(props) {
  return (
    <li>
      <a>{props.children}</a>
    </li>
  );
}

// <nav>
//   <div className="nav-left-side">
//     <Navlink>
//       <img className="company-logo" src={"./src/assets/Logo.png"}></img>
//     </Navlink>
//   </div>

// function navBar(props) {
//   console.log(props);
//   return <div>{props.children}</div>;
// }

export default App;

// <button className="pitch-btn" id="pitch-btn"></button>

function clickCounter() {
  const [count, setCount] = useState(0);
  if (count % 2) {
  }

  return (
    <div className="footer-clicker">
      <p>Clicked: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

const pitchWindow = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <button
        className="pitch-btn"
        id="pitch-btn"
        onClick={() => setToggle(!toggle)}
      >
        Mer om meg
      </button>
      {toggle && (
        <div class="pitch" id="about">
          <button
            className="pitch-close-btn"
            id="pitch-close-btn"
            onClick={() => setToggle(!toggle)}
          >
            ❌
          </button>
          <p>
            <span>Hva jeg liker med koding:</span>
            <br />
            Nye kode utfordringer er noe jeg gleder meg til. Mulighetene som
            åpner seg når man forstår noe nytt gjør at man så å si aldri kan
            klare å lære alt, som jeg synes er utrolig motiverende. Det vil si
            at jeg alltid kan lære noe nytt i dette faget!
          </p>

          <p>
            <span>Å bidra i arbeidsmiljøet er for meg veldig viktig:</span>
            <br />
            Jeg ønsker å jobbe et sted hvor man bidrar til hverandres utvikling.
            Å hjelpe andre er en veldig fin måte å lære på, men samtidig får man
            sett problemer og løsninger fra en annen side og kanskje lærer man
            selv enn bedre måte å gjøre ting på.
          </p>
          <p>
            <span>Jeg ønsker å jobbe med UI og UX:</span>
            <br />
            Dette er for meg veldig interessant og lærerikt å jobbe med. Jeg
            gleder meg til å lære meg flere kode-språk for å kunne gjøre dette
            bedre. Jeg håper å komme i et arbeidsmiljø som liker kode, design,
            team-arbeid, kompetanse-heving og kvalitet.
          </p>
          <p>
            <span>Personlighet:</span>
            <br />
            Jeg er kreativ, utadvendt, har stå-på vilje og er en god
            lag-spiller. I tillegg er jeg ekstremt motivert og har brukt
            hundrevis av timer utenom mitt nåværende kurs på å lære meg koding.
            På KodeHode-kurset sier mine medstudenter at jeg i tillegg er
            kunnskapsrik, hjelpsom, lærevillig og gir alltid det lille ekstra.
          </p>
        </div>
      )}
    </>
  );
};
