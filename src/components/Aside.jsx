import { userAdd } from "../data/user.mock";
import { useNavigate } from "react-router-dom";

const Aside = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center w-[25%] h-full shadow-lg shadow-gray-600 fixed">
      <div className="h-[10%] w-full pl-4 pt-5 mb-10 shadow-lg flex gap-3">
        <span
          className="material-symbols-outlined text-blue-500 
          [font-variation-settings:'FILL'_1,'wght'_800,'GRAD'_0,'opsz'_24]"
        >
          person
        </span>
        <p className="text-blue-500">{userAdd.name}</p>
      </div>
      <nav className="h-[90%] flex flex-col gap-4 w-[90%] items-start text-gray-900">
        <div className="flex items-center w-full p-4 text-start shadow-2xs gap-2">
          <span
            className="material-symbols-outlined text-blue-500 
          [font-variation-settings:'FILL'_1,'wght'_400,'GRAD'_0,'opsz'_24]"
          >
            dashboard
          </span>
          <button
          onClick={() => navigate("/adminPanel")}
           className="cursor-pointer  hover:text-blue-500">
            Visao geral
          </button>
        </div>
        <div className="flex items-center w-full p-4 text-start shadow-2xs gap-2">
          <span
            className="material-symbols-outlined text-blue-500 
          [font-variation-settings:'FILL'_1,'wght'_400,'GRAD'_0,'opsz'_24]"
          >
            edit
          </span>
          <button className="cursor-pointer  hover:text-blue-500">
            Gerir Resultados
          </button>
        </div>
        <div className="flex items-center w-full p-4 text-start shadow-2xs gap-2">
          <span
            className="material-symbols-outlined text-blue-500 
          [font-variation-settings:'FILL'_1,'wght'_400,'GRAD'_0,'opsz'_24]"
          >
            add_circle
          </span>
          <button className="cursor-pointer   hover:text-blue-500">
            Adicionar novos resultados
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Aside;
