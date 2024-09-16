import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="left-header">
        <Link to={"/"}>İş Takip</Link>
      </div>

      <nav>
        <NavLink to={"/"}>İş Listesi</NavLink>
        <NavLink to={"new"}>İş Ekle</NavLink>
      </nav>
    </header>
  );
};

export default Header;
