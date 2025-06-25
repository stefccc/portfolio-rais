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
      top: target.offsetTop - 40,
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
      <nav className="navigation pcOnly">
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
      <a href="/cv.docx" className="downloadCV" download="">
        Download CV
      </a>
      <button className="mobileOnly">Contacts</button>
    </div>
  );
}

export default PersonalCard;
