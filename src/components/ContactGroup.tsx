import Contact from "./Contact";

const ContactGroup = () => {
  return (
    <>
      <h2>Contacts</h2>
      <table>
        <tbody>
          <tr>
            <td>
              <Contact logoLink="/mail.svg" url="mail" />
            </td>
            <td>
              <Contact logoLink="/linkedin.svg" url="linkedin" />
            </td>
          </tr>
          <tr>
            <td>
              <Contact logoLink="/github.svg" url="github" />
            </td>
            <td>
              <Contact logoLink="/instagram.svg" url="instagram" />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ContactGroup;
