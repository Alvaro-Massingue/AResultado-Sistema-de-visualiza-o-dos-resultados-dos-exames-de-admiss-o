import { useEffect, useState } from "react";
import { resultsMock } from "../data/results.mock";

const SearchResults = (props) => {
  const selectCourse = [
    ...new Set(
      resultsMock.map((course) => {
        return course.course;
      }),
    ),
  ];
  const selectPeriod = [
    ...new Set(
      resultsMock.map((period) => {
        return period.period;
      }),
    ),
  ];

  const [course, setCourse] = useState("");
  const [periods, setPeriods] = useState("");
  const [errorC, setErrorC] = useState(false);
  const [errorP, setErrorp] = useState(false);

  return (
    <div className="w-full flex flex-wrap gap-2 min-h-45 justify-center items-center pt-3 pb-5">
      <label
        className=" text-gray-600 basis-70 shrink grow-0 md:basis-1"
        htmlFor="course"
      >
        Curso
      </label>
      <div className="min-h-10 w-1/2 basis-70 shrink grow-0">
        {errorC ? (
          <p className="text-red-600 text-sm basis-70 shrink mb-2 grow-0 md:basis-1">
            Preencha este campo
          </p>
        ) : (
          ""
        )}
        <select
          id="course"
          value={course}
          onChange={(event) => setCourse(event.target.value)}
          className={`${errorC ? "border border-red-600" : "border border-blue-400"} pl-2 text-blue-400 font-extralight outline-0 rounded-2xl h-10 w-full`}
        >
          <option value="" disabled hidden></option>
          {selectCourse.map((courseList, index) => {
            return (
              <option key={index} value={courseList}>
                {courseList}
              </option>
            );
          })}
        </select>
      </div>

      <label
        className=" text-gray-600 basis-70 shrink grow-0 md:basis-1"
        htmlFor="period"
      >
        Periodo
      </label>
      <div className="min-h-10 w-1/2 basis-70 shrink grow-0">
        {errorP ? (
          <p className="text-red-600 text-sm basis-70 shrink mb-2 grow-0 md:basis-1">
            Preencha este campo
          </p>
        ) : (
          ""
        )}
        <select
          id="period"
          value={periods}
          onChange={(event) => setPeriods(event.target.value)}
          className={`${errorP ? "border border-red-600" : "border border-blue-400"} font-extralight text-blue-400 pl-2 outline-0 rounded-2xl h-10 w-full`}
        >
          <option value="" disabled hidden></option>
          {selectPeriod.map((periodList, index) => {
            return (
              <option key={index} value={periodList}>
                {periodList}
              </option>
            );
          })}
        </select>
      </div>

      <button
        onClick={() => {
          if (course == "" && periods == "") {
            setErrorC(true);
            setErrorp(true);
          } else if (course == "") {
            setErrorC(true);
            setErrorp(false);
          } else if (periods == "") {
            setErrorp(true);
            setErrorC(false);
          } else {
            props.seeResult(course, periods);
            setErrorC(false);
            setErrorp(false);
          }
        }}
        className="border border-blue-500 bg-blue-500 mt-5 md:mt-0 text-white outline-0 cursor-pointer rounded-2xl h-10 basis-70 shrink grow-0 md:hover:border md:hover:bg-blue-700 md:basis-40"
      >
        Vizualizar
      </button>
    </div>
  );
};

export default SearchResults;
