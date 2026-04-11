import { useEffect, useState } from "react";

const Welcome = () => {
  const description =
    "Plataforma de Visualização dos Resultados dos Exames de Admissão";

  const [index, setIndex] = useState(0);
  const [showDescription, setShowDescription] = useState("");

  useEffect(() => {
    if (index < description.length) {
      const descriptionText = setTimeout(() => {
        setShowDescription((prev) => prev + description[index]);
        setIndex(index + 1);
      }, 60);
      return () => clearTimeout(descriptionText);
    }
  }, [index, description]);

  return (
    <div
      className="w-full md:min-h-100 h-95 m-0 mt-10 md:mt-20  flex items-center flex-wrap wrap-break-word"
      style={{
        background: `repeating-linear-gradient(to right,transparent 0px,transparent 45px,rgba(0, 128, 255, 0.100) 45px,rgba(0, 128, 255, 0.100) 46px),repeating-linear-gradient(to bottom,transparent 0px,transparent 45px,rgba(0, 128, 255, 0.100)  45px,rgba(0, 128, 255, 0.100) 46px
)`,
      }}
    >
      <div className=" basis-full grow shrink flex justify-center items-center flex-wrap gap-10">
        <div className="h-3/4 flex justify-center items-center text-center md:w-[70%] w-full ">
          <h1 className="text-3xl font-bold bg-linear-to-t from-sky-400 via-sky-500 to-blue-700 bg-clip-text text-transparent md:text-5xl">
            {showDescription}
          </h1>
        </div>
        <div className="p-2 bg-sky-200 border-sky-400 text-black opacity-60 md:basis-100 md:text-xl border min-h-10 basis-85 text-center shrink grow-0 mx-2 flex items-center justify-center rounded-2xl wrap-break-word flex-wrap">
          <h1>Consulta os resultados dos exames aqui</h1>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
