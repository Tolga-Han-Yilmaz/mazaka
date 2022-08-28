import { FaShoppingCart, FaRegUser, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <div className="header__title">
        <div className="container">
          <section className="header__title-home" onClick={() => navigate("/")}>
            <h1>MAZAKA</h1>
          </section>
          <section className="header__title-lists">
            <ul>
              <li>Üreticilerimiz</li>
              <li>Organik Sertifikası</li>
              <li>Fırsatlar Köşesi</li>
            </ul>
          </section>
        </div>
      </div>

      <nav className="navbar">
        <div className="container">
          <div className="navbar__search input-group mb-3">
            <input type="text" className="form-control" />
            <button className="btn btn-outline-secondary">
              <FaSearch />
            </button>
          </div>
          <div className="navbar__user">
            <FaShoppingCart className="icon" />
            <FaRegUser className="icon" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
