import css3 from "/src/images/icon/css3-alt.svg";
import html5 from "/src/images/icon/html5.svg";
import js from "/src/images/icon/square-js.svg";
import bootstrap from "/src/images/icon/bootstrap.svg";
import tailwind from "/src/images/icon/tailwind-css-icon.svg";
import reactIcon from "/src/images/icon/react.svg";
export default function Home() {
  return (
    <section className="Homepage">
      <div>
        <h1>Hi,</h1>
        <h3>I'm Musa Umaru,</h3>
        <p>A Frontend Developer and Community Manager</p>
      </div>
      <div className="btns">
        <button>
          <a href="mailto:nmanagi23@gmail.com">Hire Me</a>
        </button>
        <button>
          <a href="https://docs.google.com/document/d/1nUHO8fuqXXaROHRHNSWjUN_IQIwHvIVibyicFe366bE/edit">
            Resume
          </a>
        </button>
      </div>
      <div className="about">
        <h1>ABOUT ME</h1>
        <p>
          I'm Musa Umaru a Frontend Developer and Community Manager From
          Nigeria. i have one year experience in frontend development and
          Community management.i had a three month internship with web3 bridge,
          learnt HTML CSS and Javascript i worked on few project.i'm also the
          lead Ambassador for I4G IBBU.
        </p>
      </div>
      <div className="skill">
        <h1>SKILL</h1>
        <div className="icon">
          <img src={html5} alt="html" />
          <img src={css3} alt="css3" />
          <img src={js} alt="javascript" />
          <img src={bootstrap} alt="bootstrap" />
          <img src={tailwind} alt="tailwind" />
          <img src={reactIcon} alt="react" />
        </div>
      </div>
      <footer>
      <div className="Social-icon">
        <a href="https://twitter.com/nmanagi22" class="fa fa-twitter"></a>
        <a href="http://linkedin.com/in/musa-umaru-470a8a230" class="fa fa-linkedin"></a>
        <a href="https://github.com/musa108" class="fa fa-github"></a>
      </div>
      <p>&copy; Copyright, 2023 - Musa Umaru</p>
      </footer>
    </section>
  );
}
