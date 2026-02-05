import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const HeaderAdimin = (props) => {
  //const name = "AResultado";
  const navigate = useNavigate();

  return (
    <div
      className={
        "flex w-full items-center flex-wrap bg-blue-500 shadow  shadow-gray-500 pr-5 fixed z-10 top-0 left-0 "
      }
    >
      <div className="flex items-center w-1/2">
        <img src={logo} className="w-15 md:w-20" />
      </div>
      <div className="w-1/2 text-right">
        <button
          onClick={() => navigate("/")}
          className="text-white cursor-pointer"
        >
          Sair
        </button>   
      </div>
    </div>
  );
};

export default HeaderAdimin;
