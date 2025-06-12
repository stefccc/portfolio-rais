import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import TechStack from "./TechStack";

const ScrollPage = () => {
  return (
    <div className="scrollPage">
      <About />
      <TechStack />
      <Experience />
      <Projects />
    </div>
  );
};

export default ScrollPage;
