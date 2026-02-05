import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  //const name = "AResultado";
  const navigate = useNavigate();

  const loginPanel = () => {
    navigate("/login");
  };

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 550) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`${scrolled ? "fixed z-10 flex w-full items-center flex-wrap bg-blue-500 shadow  shadow-gray-500 pr-5" : "flex w-full items-center flex-wrap bg-blue-500 shadow  shadow-gray-500 pr-5"}`}
    >
      <div className="flex items-center w-1/2">
        <img src={logo} className="w-15 md:w-20" />
      </div>
      <div className="w-1/2 text-right">
        {props.isAuthenticated ? (
          <button
            onClick={() => navigate("/")}
            className="text-white cursor-pointer"
          >
            Sair
          </button>
        ) : (
          <button
            onClick={() => loginPanel()}
            className="text-white cursor-pointer"
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
