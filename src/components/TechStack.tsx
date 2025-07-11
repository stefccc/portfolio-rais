import "./TechStack.css";
const TechStack = () => {
  const logosUrl: string[] = [
    "/csharp.svg",
    "/php.svg",
    "/js.svg",
    "/html.svg",
    "/css.svg",
    "/git.svg",
    "/sql.svg",
  ];
  return (
    <div className="techStack" id="TechStack">
      <h2>What I commonly use</h2>
      <div className="tech">
        {logosUrl.map((url) => (
          <img key={url} src={url} alt="logo" />
        ))}
      </div>
    </div>
  );
};

export default TechStack;
