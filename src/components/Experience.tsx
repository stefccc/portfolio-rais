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
  ];
  return (
    <div>
      <h1>Experience</h1>
    </div>
  );
};

export default Experience;
