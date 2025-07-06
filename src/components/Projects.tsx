import { useState } from "react";
import "./Projects.css";

interface Project {
  name: string;
  shortDesc: string;
  longDesc: string;
  url: string;
  imageUrlPC: string;
  imageUrlMobile: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      name: "Super Melon Boy",
      shortDesc: "Android Game",
      longDesc:
        "An android 2D game developed using Unity \n Released on Google Play",
      url: "https://play.google.com/store/apps/details?id=com.stefcstudio.supermelonboy&pcampaignid=web_share",
      imageUrlPC: "/supermelonboybanner.png",
      imageUrlMobile: "/supermelonboy.png",
    },
    {
      name: "Arctic Glimpse",
      shortDesc: "Responsive Web",
      longDesc:
        "A portfolio website designed for a fictional Arctic nature photography group.\nHTML, CSS",
      url: "http://stefanrais.cz/projects/arctic/",
      imageUrlPC: "/arcticglimpsebanner.png",
      imageUrlMobile: "/arcticglimpse.png",
    },
    {
      name: "Fill-in App",
      shortDesc: "Web Application",
      longDesc:
        "A PHP app for creating fill-in-the-blank educational texts.\nConnected to a mariaDB database",
      url: "http://stefanrais.cz/projects/nemc/",
      imageUrlPC: "/fillinappbanner.png",
      imageUrlMobile: "/fillinapp.png",
    },
  ];
  const [selectedIndex, setSelectIndex] = useState(0);
  const goLeft = () => {
    let setTo;
    if (selectedIndex - 1 < 0) {
      setTo = projects.length - 1;
    } else {
      setTo = selectedIndex - 1;
    }
    setSelectIndex(setTo);
  };
  const goRight = () => {
    let setTo;
    if (selectedIndex + 1 >= projects.length) {
      setTo = 0;
    } else {
      setTo = selectedIndex + 1;
    }
    setSelectIndex(setTo);
  };
  return (
    <div id="Projects">
      <h2>Projects</h2>
      <img
        src="/arrow.svg"
        alt="arrow"
        className="leftArrow"
        onClick={goLeft}
      />
      <img
        src="/arrow.svg"
        alt="arrow"
        className="rightArrow"
        onClick={goRight}
      />
      <ul className="projects">
        {projects.map((project, index) => (
          <li
            key={project.name}
            className={index == selectedIndex ? "visible project" : "project"}
            style={{ backgroundImage: `url(${project.imageUrlPC})` }}
          >
            <a target="_blank" href={project.url}>
              <img
                src={project.imageUrlMobile}
                alt="image of project"
                className="mobileOnly"
              />
              <div className="line"></div>
              <h3>{project.name}</h3>
              <h4>{project.shortDesc}</h4>
              <p>{project.longDesc}</p>
            </a>
          </li>
        ))}
      </ul>
      <div className="git">
        <a target="_blank" href="https://github.com/stefccc">
          more on git
        </a>
      </div>
    </div>
  );
};

export default Projects;
