const TechStack = () => {
  const logosUrl: string[] = [];
  return (
    <div>
      <h2>What I commonly use</h2>
      <div>
        {logosUrl.map((url) => (
          <img src={url} alt="logo" />
        ))}
      </div>
    </div>
  );
};

export default TechStack;
