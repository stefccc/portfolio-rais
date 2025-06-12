interface Position {
  name: string;
  timePeriod: string;
  detail: string;
}

const Experience = () => {
  const positions: Position[] = [
    {
      name: "IT Technician",
      timePeriod: "June 2023 - July 2023 (1 month)",
      detail:
        "I maintained computer equipment and installed operating systems. I set up workstations and helped hospital staff with technical issues.",
    },
    {
      name: "Full-Stack Web Developer",
      timePeriod: "June 2023 - July 2023 (1 month)",
      detail:
        "I worked in a team to develop a web application. I created the website using PHP, SCSS, and JavaScript. I integrated a MariaDB database using SQL. This was part of my foreign internship at SPŠEK Rakovník.",
    },
  ];
  return (
    <div>
      <h2>Experience</h2>
      <div>
        <ul className="positions">
          {positions.map((position) => (
            <li key={position.name} className="position">
              <h3>{position.name}</h3>
              <h4>{position.timePeriod}</h4>
              <p>{position.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
