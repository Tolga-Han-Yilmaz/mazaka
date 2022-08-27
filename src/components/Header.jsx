import { FaShoppingCart, FaRegUser, FaSearch } from "react-icons/fa";
// FaSearch, FaShoppingCart, FaRegUser

const Header = () => {
  return (
    <header>
      <div className="header__title">
        <div className="container">
          <div className="header__title-lists">
            <ul>
              <li>Üreticilerimiz</li>
              <li>Organik Sertifikası</li>
              <li>Fırsatlar Köşesi</li>
            </ul>
          </div>
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
