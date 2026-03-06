import { useEffect, useState } from "react";

const Welcome = () => {
  const description =
    "Plataforma de Visualização dos Resultados dos Exames de Admissão";

  const [index, setIndex] = useState(0);
  const [showDescription, setShowDescription] = useState("");

  useEffect(() => {
    if (index < description.length) {
      const descriptionText = setInterval(() => {
        setShowDescription((prev) => prev + description[index]);
        setIndex(index + 1);
      }, 60);
      return () => clearInterval(descriptionText);
    }
  }, [index]);

  return (
    <div className="w-full md:h-100 h-95  m-0 mt-10 md:mt-20  flex items-center flex-wrap wrap-break-word bg-[url('./assets/background.png')] bg-cover bg-center">
      <div className=" basis-full grow shrink flex justify-center items-center flex-wrap gap-10">
        <div className="h-3/4 flex justify-center items-center text-center md:w-[70%] w-full ">
          <h1 className="text-3xl font-black bg-linear-to-r from-sky-400 via-sky-500 to-blue-700 bg-clip-text text-transparent md:text-5xl">
            {showDescription} 
          </h1>
          
        </div>
        <div className="p-2 bg-sky-200 border-sky-400 text-sky-900 shadow-2xl shadow-sky-300 opacity-60 md:basis-150 md:text-xl border min-h-10 basis-75 shrink grow-0 flex items-center justify-center rounded-2xl wrap-break-word flex-wrap">
            <h1>Consulta os resultados de admissao</h1>
          </div>
      </div>
    </div>
  );
};

export default Welcome;
