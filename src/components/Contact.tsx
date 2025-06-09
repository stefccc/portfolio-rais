interface Props {
  logoLink: string;
  url: string;
}

const Contact = ({ logoLink, url }: Props) => {
  return (
    <>
      <img src={logoLink} alt="logo" /> <a href={url}>{url}</a>
    </>
  );
};

export default Contact;
