import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

const Welcome = () => {
  const name = "AResultado";
  const description =
    "Sistema de vizualizacao dos resultados dos exames de admissao";

  const [index, setIndex] = useState(0);
  const [showDescription, setShowDescription] = useState("");


  useEffect(() => {
    if (
      index < description.length
    ) {
      const descriptionText = setInterval(() => {
        setShowDescription((prev) => prev + description[index]);
        setIndex(index + 1);
      }, 100);
      return () => clearInterval(descriptionText);
    }
  }, [index]);

  return (
    <div className=" basis-full grow shrink">
      <div className="flex justify-between items-center flex-wrap bg-blue-500 shadow shadow-gray-500">
        <img src={logo} className="w-20" />
        <h1 className="text-xl font-bold text-white mr-2">{name}</h1>
      </div>
      <div className="h-3/4 flex justify-center items-center text-center">
        <p className="text-2xl font-bold text-blue-500">{showDescription}</p>
      </div>
    </div>
  );
};

export default Welcome;
