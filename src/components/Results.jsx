const Results = (props) => {
  return (
    <div className="flex flex-col items-center gap-10">
      {props.results.map((result) => (
        <div key={result.id} className="bg-white rounded-2xl w-[90%]  p-2">
          <div className="flex gap-2">
            <p className="text-gray-700 ">Curso:</p>
            <p className="font-bold text-blue-500">{result.course}</p>
          </div>
          <div className="flex gap-2">
            <p className="text-gray-700 ">Periodo:</p>
            <p>{result.period}</p>
          </div>
          <div className="flex gap-2">
            <p className="text-gray-700 ">Nome:</p>
            <p className="font-bold">{result.fullName}</p>
          </div>
          <div className="flex gap-2">
            <p className="text-gray-700 ">Resultado:</p>
            <p
              className={
                result.status.toLowerCase() == "aprovado"
                  ? "text-green-600"
                  : "text-red-600"
              }
            >
              {result.status}
            </p>
          </div>
          {Object.entries(result.grades).map(([subject, grade]) => (
            <div key={subject} className="flex gap-2">
              <p className="text-gray-700 ">{subject}</p>
              <p>{grade}</p>
            </div>
          ))}
          <div className="flex gap-2">
            <p className="text-gray-700 ">Media:</p>
            <p>{result.average}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Results;
