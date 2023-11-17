export default function Navbar() {
  return (
    <div className="Com1">
      <div className="Navbar">
        <img
          className="logo"
          src="./pictures/GlaxiLogo.svg"
          alt="galaxy logo"
          width="350px"
          height="150px"
        />

        <a href="" target="_blank" className="navItems">
          How it works?
        </a>
        <a href="" target="_blank" className="navItems">
          Why Galaxi?
        </a>
        <a href="" target="_blank" className="navItems">
          Features
        </a>
        <a href="" target="_blank" className="navItems">
          Contact Us
        </a>
        <button className="Appbtn">Get App</button>
      </div>
      <div className="banner">
        <div className="rightban">
          <p className="galaxy">Galaxi is for</p>
          <p className="remaintext">everyone</p>
          <p className="Line">
            The world's number 1 stocks screener. Get hottest stocks
          </p>
          <p className="remainLine">picks in the world using AI.</p>
          <button className="videobtn">
            Explainer Video
            <img
              className="play"
              src="./pictures/videobtn.svg"
              alt="videoBtn"
              width="25px"
              height="25px"
            />
          </button>
        </div>
        <img
          className="bannerpic"
          src="./pictures/bannerpic.svg"
          alt="bannerpic"
        />
      </div>
    </div>
  );
}
