import { userAdd } from "../data/user.mock";
import { useNavigate } from "react-router-dom";

const Aside = ({
  focusView,
  focusManage,
  focusAdd,
  setFocusView,
  setFocusManage,
  setFocusAdd,
}) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center w-[25%] h-full bg-white fixed">
      <div className="h-[10%] w-full pl-4 pt-5 mb-10 flex gap-2">
        <span
          className="material-symbols-outlined text-sky-500 
          [font-variation-settings:'FILL'_1,'wght'_200,'GRAD'_0,'opsz'_24]"
        >
          person
        </span>
        <p className="text-sky-500">{userAdd.name}istrador</p>
      </div>
      <nav className="h-[90%] flex flex-col gap-4 w-[90%] items-start text-gray-900">
        <div className="flex items-center w-full p-4 text-start shadow-2xs gap-2">
          <span
            className="material-symbols-outlined text-sky-500 
          [font-variation-settings:'FILL'_1,'wght'_200,'GRAD'_0,'opsz'_24]"
          >
            dashboard
          </span>
          <button
            onClick={() => {
              setFocusView(true);
              setFocusAdd(false);
              setFocusManage(false);
            }}
            className={
              focusView
                ? "text-sky-500 cursor-pointer"
                : "cursor-pointer  hover:text-sky-500 focus:text-sky-500"
            }
          >
            Visao geral
          </button>
        </div>
        <div className="flex items-center w-full p-4 text-start shadow-2xs gap-2">
          <span
            className="material-symbols-outlined text-sky-500 
          [font-variation-settings:'FILL'_1,'wght'_200,'GRAD'_0,'opsz'_24]"
          >
            edit
          </span>
          <button
            onClick={() => {
              setFocusView(false);
              setFocusAdd(false);
              setFocusManage(true);
            }}
            className={
              focusManage
                ? "text-sky-500 cursor-pointer"
                : "cursor-pointer  hover:text-sky-500 focus:text-sky-500"
            }
          >
            Gerir Resultados
          </button>
        </div>
        <div className="flex items-center w-full p-4 text-start shadow-2xs gap-2">
          <span
            className="material-symbols-outlined text-sky-500 
          [font-variation-settings:'FILL'_1,'wght'_200,'GRAD'_0,'opsz'_24]"
          >
            add_circle
          </span>
          <button
            onClick={() => {
              setFocusView(false);
              setFocusAdd(true);
              setFocusManage(false);
            }}
            className={
              focusAdd
                ? "text-sky-500 cursor-pointer"
                : "cursor-pointer  hover:text-sky-500 focus:text-sky-500"
            }
          >
            Adicionar resultados
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Aside;
