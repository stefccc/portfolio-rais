import ContactGroup from "./ContactGroup";
import "./PersonalCard.css";
import { useState } from "react";

function PersonalCard() {
  const navItems = ["About", "Projects", "Experience"];
  const [selectedIndex, setSelectIndex] = useState(0);
  const scrollToId = (id: string) => {
    const target = document.getElementById(id);

    const scrollPage = document.getElementById("scrollPage");
    if (!target || !scrollPage) return;
    scrollPage.scrollTo({
      top: target.offsetTop - 40,
      behavior: "smooth",
    });
  };
  const scrollToPortfolio = () => {
    const techStack = document.getElementById("TechStack");
    const techStackPos = techStack?.getBoundingClientRect().top ?? 0;
    window.scrollTo({
      behavior: "smooth",
      top: techStackPos - 30,
    });
  };
  const [contactsVisible, setContactsVisible] = useState(false);
  const showContacts = () => {
    setContactsVisible(!contactsVisible);
  };
  return (
    <>
      <div className="personalCard">
        <div
          className={
            contactsVisible ? "visible mobileOnly" : "hidden mobileOnly"
          }
        >
          <ContactGroup />
        </div>
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
        <button onClick={showContacts} className="mobileOnly">
          Contacts
        </button>
      </div>
      <button
        id="scrollButton"
        className="mobileOnly"
        onClick={scrollToPortfolio}
      >
        <p>Portfolio</p>
        <img src="/arrowsDown.svg" alt="arrows pointing down" />
      </button>
    </>
  );
}

export default PersonalCard;
