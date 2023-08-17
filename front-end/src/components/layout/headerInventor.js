import { useState } from "react";
import { Link } from "react-router-dom";
import open1 from "../../assets/images/openinventor.png";
import "../../assets/styles/header-inventor.css";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="header-container">
      <img className="logo" src={open1} alt="logo" />
      <div className="nav-container">
        <div className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </div>
        <div className="nav-item relative">
          <button
            className="nav-link"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            Category
          </button>
          {showDropdown && (
            <div className="dropdown-menu">
              <Link to="/dropdown-option-1" className="dropdown-option">
                Inventors
              </Link>
              <Link to="/dropdown-option-2" className="dropdown-option">
                Entrepreneurs
              </Link>
              <Link
                to="../../pages/Mentor/mentor-admin-home}"
                className="dropdown-option"
              >
                Mentors
              </Link>
            </div>
          )}
        </div>
        <div className="nav-item">
          <Link to="../../inventor/insert-innovation" className="nav-link">
            Insert Innovation
          </Link>
        </div>
        <div className="nav-item">
          <Link to="../../inventor/innovation-vault" className="nav-link">
            Innovation Vault
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
