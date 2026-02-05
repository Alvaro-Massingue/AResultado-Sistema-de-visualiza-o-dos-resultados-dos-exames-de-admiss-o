import { resultsMock } from "../data/results.mock";

const OverView = () => {
  const aprovados = resultsMock.filter((result) => {
    return result.status.toLowerCase() == "aprovado";
  });

  const reprovados = resultsMock.filter((result) => {
    return result.status.toLowerCase() == "reprovado";
  });
  return (
    <div className="w-3/4 flex flex-col gap-40 absolute right-0">
      <div className="flex flex-wrap justify-center mt-10 gap-4 ">
        <div className="w-[30%] h-50 shadow-lg shadow-gray-300 rounded-2xl">
          <h1 className="font-bold text-7xl ml-3 ">{resultsMock.length}</h1>
          <div className="flex items-center ml-5">
            <span
              className="material-symbols-outlined text-blue-500 
          [font-variation-settings:'FILL'_1,'wght'_400,'GRAD'_0,'opsz'_24]"
            >
              groups
            </span>
            <p className="text-xl ml-3 font-light text-blue-500 font-gray-700">
              Candidatos
            </p>
          </div>
        </div>
        <div className="w-[30%] h-50 shadow-lg shadow-gray-300 rounded-2xl">
          <h1 className="font-bold text-7xl ml-3">{aprovados.length}</h1>
          <div className="flex items-center ml-5">
            <span
              className="material-symbols-outlined  text-green-500 
          [font-variation-settings:'FILL'_1,'wght'_400,'GRAD'_0,'opsz'_24]"
            >
              check
            </span>
            <p className="text-xl ml-3 font-light text-green-600 font-gray-700">
              Aprovados
            </p>
          </div>
        </div>
        <div className="w-[30%] h-50 shadow-lg shadow-gray-300 rounded-2xl">
          <h1 className="font-bold text-7xl ml-3">{reprovados.length}</h1>
          <div className="flex items-center ml-5">
            <span
              className="material-symbols-outlined text-red-500 
          [font-variation-settings:'FILL'_1,'wght'_400,'GRAD'_0,'opsz'_24]"
            >
              cancel
            </span>
            <p className="text-xl ml-3 font-light text-red-600 font-gray-700">
              Reprovados
            </p>
          </div>
        </div>
      </div>
      <div className="h-full p-5">
        <table className="w-full text-center">
          <thead className="shadow-md bg-blue-500 border border-blue-200 text-white">
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Periodo</th>
              <th>Curso</th>
              <th>Notas</th>
              <th>Media</th>
              <th>Resultado</th>
            </tr>
          </thead>
          {resultsMock.map((result) => {
            return (
              <tbody
                key={result.id}
                className="shadow-md shadow-gray-400 text-gray-900"
              >
                <tr>
                  <td>{result.id}</td>
                  <td>{result.fullName}</td>
                  <td>{result.period}</td>
                  <td>{result.course}</td>
                  {Object.entries(result.grades).map(([subject, grade]) => {
                    return (
                      <div key={subject} className=" flex gap-2">
                        <td>{subject}</td>
                        <td>{grade}</td>
                      </div>
                    );
                  })}
                  <td>{result.average}</td>
                  <td
                    className={
                      result.status.toLocaleLowerCase() == "aprovado"
                        ? "text-green-600"
                        : " text-red-600"
                    }
                  >
                    {result.status}
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default OverView;
