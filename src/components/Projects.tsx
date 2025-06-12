interface Project {
  name: string;
  shortDesc: string;
  longDesc: string;
  url: string;
  imageUrl: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      name: "Super Melon Boy",
      shortDesc: "Android Game",
      longDesc:
        "An android 2D game developed using Unity<br>Released on Google Play",
      url: "https://play.google.com/store/apps/details?id=com.stefcstudio.supermelonboy&pcampaignid=web_share",
      imageUrl: "/supermelonboy.jpg",
    },
    {
      name: "Arctic Glimpse",
      shortDesc: "Responsive Web",
      longDesc:
        "A portfolio website designed for a fictional Arctic nature photography group as a school project. HTML, CSS",
      url: "http://stefanrais.cz/projects/arctic/",
      imageUrl: "/arcticGlimpse.jpg",
    },
    {
      name: "Fill-in App",
      shortDesc: "Web Application",
      longDesc:
        "A PHP app for creating fill-in-the-blank educational texts.<br>Connected to a mariaDB database",
      url: "http://stefanrais.cz/projects/nemc/",
      imageUrl: "/fillinapp.jpg",
    },
  ];
  return (
    <div>
      <h2>Projects</h2>
      <div className="projects">
        {projects.map((project) => (
          <a
            target="_blank"
            href={project.url}
            className="project"
            style={{ backgroundImage: `url(${project.imageUrl})` }}
          >
            <h3>{project.name}</h3>
            <h4>{project.shortDesc}</h4>
            <p>{project.longDesc}</p>
          </a>
        ))}
      </div>
      <a target="_blank" href="https://github.com/stefccc">
        more on git
      </a>
    </div>
  );
};

export default Projects;
