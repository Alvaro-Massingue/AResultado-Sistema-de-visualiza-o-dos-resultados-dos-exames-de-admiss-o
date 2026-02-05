import { userAdd } from "../data/user.mock";

const Aside = () => {
  return (
    <div className="flex flex-col items-center justify-center w-[25%] h-full shadow-lg shadow-gray-600 fixed">
      <div className="h-[10%] w-full pl-4 pt-5 mb-10 shadow-lg">
        <p className="text-blue-500">User:{userAdd.name}</p>
      </div>
      <nav className="h-[90%] flex flex-col gap-4 w-[90%] items-start text-gray-900">
        <button className="cursor-pointer  shadow-2xs w-full h-15 text-start p-4 hover:text-blue-500">Visao geral</button>
        <button className="cursor-pointer  shadow-2xs w-full h-15 text-start p-4 hover:text-blue-500">Gerir Resultados</button>
        <button className="cursor-pointer  shadow-2xs w-full h-15 text-start p-4 hover:text-blue-500">Adicionar novos resultados</button>
      </nav>
    </div>
  );
};

export default Aside;
