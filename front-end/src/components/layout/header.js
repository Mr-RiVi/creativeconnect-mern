import { HeaderButton } from "../common/buttons";
import open1 from "../../assets/images/openinventor.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="flex sticky top-0 z-50 bg-blue-100">
      <img className="h-20 p-1 ml-5" src={open1} alt="logo" />
      <div className="absolute right-0 flex justify-between">
        <HeaderButton pathname="/home">Home</HeaderButton>
        <div className="relative">
          <HeaderButton onClick={() => setShowDropdown(!showDropdown)}>
            Category
          </HeaderButton>
          {showDropdown && (
            <div className="absolute z-50 right-0 mt-2 py-2 w-48 bg-blue-100 rounded-lg shadow-xl border-2 border-slate-400">
              <Link to={`../../inventor/innovation-vault`}>
                <HeaderButton pathname="/dropdown-option-1">
                  Inventors
                </HeaderButton>
              </Link>
              <Link to={`../../entrepreneurHome`}>
                <HeaderButton pathname="/dropdown-option-2">
                  Entrepreneurs
                </HeaderButton>
              </Link>
              <Link to={`../../mentorHome`}>
                <HeaderButton>Mentors</HeaderButton>
              </Link>
            </div>
          )}
        </div>
        <Link to={`#`}>
          <HeaderButton pathname="/about">About</HeaderButton>
        </Link>
        <Link to={`../../UserLogin`}>
          <HeaderButton pathname="/UserLogin">Login</HeaderButton>
        </Link>
      </div>
    </div>
  );
};

export default Header;
