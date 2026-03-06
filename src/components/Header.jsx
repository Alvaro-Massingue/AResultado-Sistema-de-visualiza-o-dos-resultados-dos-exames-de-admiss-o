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
      className={
        "fixed top-0 left-0 z-10  flex w-full items-center h-18 md:h-23 flex-wrap bg-sky-500 shadow-sm  shadow-gray-500 "
      }
    >
      <div className="flex items-center  w-1/2 h-full">
        <img src={logo} className="w-15 md:w-20" />
      </div>
      <div className="w-1/2 text-right h-full flex items-center justify-end pr-5">
        {props.isAuthenticated ? (
          <div  onClick={() => navigate("/")} className="flex justify-end hover:cursor-pointer hover:border-2 hover:border-cyan-400 bg-white rounded-2xl p-3 gap-2 grow-0 min-w-[14%]">
            <span
              onClick={() => navigate("/")}
              className="material-symbols-outlined  text-sky-500 cursor-pointer
          [font-variation-settings:'FILL'_1,'wght'_400,'GRAD'_0,'opsz'_24]"
            >
              logout
            </span>
            <button
              onClick={() => navigate("/")}
              className="text-sky-500 cursor-pointer"
            >
              Sair
            </button>
          </div>
        ) : (
          <div onClick={() => loginPanel()} className="flex hover:cursor-pointer hover:border-2 hover:border-cyan-400 justify-end bg-white rounded-2xl p-3 gap-2 grow-0 min-w-[14%]">
            <span
              onClick={() => loginPanel()}
              className="material-symbols-outlined  text-sky-500 cursor-pointer
          [font-variation-settings:'FILL'_1,'wght'_400,'GRAD'_0,'opsz'_24]"
            >
              login
            </span>
            <button
              onClick={() => loginPanel()}
              className="text-sky-500 cursor-pointer"
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
