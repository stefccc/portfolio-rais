interface Project {
  name: string;
  shortDesc: string;
  longDesc: string;
  url: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      name: "Super Melon Boy",
      shortDesc: "Android Game",
      longDesc:
        "An android 2D game developed using Unity<br>Released on Google Play",
      url: "https://play.google.com/store/apps/details?id=com.stefcstudio.supermelonboy&pcampaignid=web_share",
    },
  ];
  return <div>Projects</div>;
};

export default Projects;
