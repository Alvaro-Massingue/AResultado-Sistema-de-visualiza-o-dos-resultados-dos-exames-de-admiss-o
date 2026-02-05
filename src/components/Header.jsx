import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  //const name = "AResultado";
  const navigate = useNavigate();

  const loginPanel = () => {
    navigate("/login");
  };

  return (
    <div
      className={"fixed top-0 left-0 z-10 flex w-full items-center flex-wrap bg-blue-500 shadow-md  shadow-gray-500 pr-5"}
    >
      <div className="flex items-center w-1/2">
        <img src={logo} className="w-15 md:w-20" />
      </div>
      <div className="w-1/2 text-right">
        {props.isAuthenticated ? (
          <div className="flex justify-end">
            <span
             onClick={() => navigate("/")}
              className="material-symbols-outlined  text-white cursor-pointer
          [font-variation-settings:'FILL'_1,'wght'_400,'GRAD'_0,'opsz'_24]"
            >
              logout
            </span>
            <button
            onClick={() => navigate("/")}
            className="text-white cursor-pointer"
          >
            Sair
          </button>
          </div>
          
        ) : (
          <div className="flex justify-end">
            <span
              onClick={() => loginPanel()}
              className="material-symbols-outlined  text-white cursor-pointer
          [font-variation-settings:'FILL'_1,'wght'_400,'GRAD'_0,'opsz'_24]"
            >
              login
            </span>
             <button
            onClick={() => loginPanel()}
            className="text-white cursor-pointer"
          >
            Login
          </button>
          </div>         
        )}
      </div>
    </div>
  );
};

export default Header;
