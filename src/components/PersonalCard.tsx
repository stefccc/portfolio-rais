import "./PersonalCard.css";
import { useState } from "react";

function PersonalCard() {
  const navItems = ["About", "Experience", "Projects"];
  const [selectedIndex, setSelectIndex] = useState(0);
  const scrollPage = document.getElementById("scrollPage");

  const scrollToId = (id: string) => {
    const target = document.getElementById(id);

    if (!target || !scrollPage) return;
    scrollPage.scrollTo({
      top: target.offsetTop - 20,
      behavior: "smooth",
    });
  };
  return (
    <div className="personalCard">
      <div className="personalInfo">
        <h1>Štefan Rais</h1>
        <h2>Junior Software Developer</h2>
        <div className="location">
          <img src="/location.svg" alt="waypoint" />
          <p>Rakovník, Czech republic</p>
        </div>
      </div>
      <nav className="navigation">
        <ul>
          {navItems.map((item, index) => (
            <li
              key={item}
              className={selectedIndex === index ? "selected" : ""}
              onClick={() => {
                setSelectIndex(index);
                scrollToId(item);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>
      <button className="downloadCV">Download CV</button>
    </div>
  );
}

export default PersonalCard;
