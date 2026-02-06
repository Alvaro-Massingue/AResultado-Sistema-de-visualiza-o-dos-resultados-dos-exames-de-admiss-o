import { useEffect, useState } from "react";

const Welcome = () => {
  const description =
    "Sistema de visualização dos resultados dos exames de admissão";

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
    <div className="w-full md:h-100 h-95 p-5 m-0 mt-10 md:mt-20  flex items-center flex-wrap wrap-break-word bg-linear-to-r from-sky-50 via-sky-200 to-sky-50">
      <div className=" basis-full grow shrink">
        <div className="h-3/4 flex justify-center items-center text-center">
          <h1 className="text-2xl font-black bg-linear-to-r from-sky-400 via-sky-500 to-blue-700 bg-clip-text text-transparent md:text-5xl">
            {showDescription}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
