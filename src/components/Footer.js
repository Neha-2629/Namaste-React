// Footer component for footer section
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      Created By&nbsp;
      <a href="https://www.linkedin.com/in/neha-agrawal-02/" target="_blank" title="Hi! Let's connect on LinkedIn">
        Neha Agrawal
      </a>
      <i className="fa-solid fa-copyright"></i>
      {year}&nbsp;
      <a 
        href="https://github.com/Neha-2629"
        target="_blank"
        title="Gourmet Glide Github Repository"
      >
        <strong>
          Gourmet<span>Glide</span>
        </strong>
      </a>
    </div>
  );
};

export default Footer;