import Contact from "./Contact";
import "./ContactGroup.css";

const ContactGroup = () => {
  return (
    <div className="contacts">
      <h2>Contacts</h2>
      <table>
        <tbody>
          <tr>
            <td>
              <Contact logoLink="/mail.svg" url="stefan.rais12@gmail.com" />
            </td>
            <td>
              <Contact
                logoLink="/linkedin.png"
                url="https://linkedin.com/in/%C5%A1tefan-rais-ba6932369/"
              />
            </td>
          </tr>
          <tr>
            <td>
              <Contact
                logoLink="/github.png"
                url="https://github.com/stefccc"
              />
            </td>
            <td>
              <Contact
                logoLink="/instagram.png"
                url="https://instagram.com/stefanrais/"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ContactGroup;
