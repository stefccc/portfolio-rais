interface Props {
  logoLink: string;
  url: string;
}

const Contact = ({ logoLink, url }: Props) => {
  return (
    <>
      <a target="_blank" href={url}>
        <img src={logoLink} alt="logo" />
        <p>{url}</p>
      </a>
    </>
  );
};

export default Contact;
