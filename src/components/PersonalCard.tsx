import "./PersonalCard.css";
import { useState } from "react";
import { Link } from "react-scroll";

function PersonalCard() {
  const navItems = ["Stack", "Experience", "Projects"];
  const [selectedIndex, setSelectIndex] = useState(0);
  return (
    <div className="personalCard">
      <div className="personalInfo">
        <h1>Štefan Rais</h1>
        <h2>Junior Software Developer</h2>
        <div className="location">
          icon <p>Rakovník, Czech republic</p>
        </div>
      </div>
      <nav className="navigation">
        <ul>
          {navItems.map((item, index) => (
            <li className={selectedIndex === index ? "selected" : ""}>
              <Link
                to={item}
                smooth={true}
                duration={500}
                offset={50}
                onClick={() => {
                  setSelectIndex(index);
                }}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button className="downloadCV">Download CV</button>
    </div>
  );
}

export default PersonalCard;
