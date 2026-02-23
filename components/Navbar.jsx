import "../styles/navbar.scss";

const Navbar = () => {
  return (
    <header className="header">
      <div className="header-logo"></div>
      <div className="header-brand">SIGN-AGE</div>

      <nav className="header-nav">
        <a href="#technology">Technology</a>
        <a href="#make-yours">Make it Yours</a>
      </nav>
    </header>
  );
};

export default Navbar;
