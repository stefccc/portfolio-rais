import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import TechStack from "./TechStack";
import "./ScrollPage.css";

const ScrollPage = () => {
  return (
    <div id="scrollPage">
      <About />
      <TechStack />
      <Experience />
      <Projects />
    </div>
  );
};

export default ScrollPage;
