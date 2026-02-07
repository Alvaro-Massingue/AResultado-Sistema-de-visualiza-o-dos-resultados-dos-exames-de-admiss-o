import { useState } from "react";
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
  const [selectCourses, setSelectCourses] = useState(false);
  const [selectPeriods, setSelectPeriods] = useState(false);

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
          onClick={() => setSelectCourses(!selectCourses)}
          className={`${errorC ? "border border-red-600" : "border border-blue-400"} pl-2 text-blue-400 font-extralight outline-0 rounded-2xl h-10 w-full`}
        >
          <option value={course} hidden>
            {course}
          </option>
        </select>
        {selectCourses?(
             <div className="shadow-sm border-gray-300 border w-full p-2 rounded-xl">
          {selectCourse.map((courseList, index) => {
            return (
              <input
                className=" w-full text-start hover:text-sky-500"
                type="button"
                key={index}
                value={courseList}
                onClick={(event) => {
                  setCourse(event.target.value);
                  setSelectCourses(false);
                }}
              />
            );
          })}
        </div>
        ):""}
       
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
          onClick={() => setSelectPeriods(!selectPeriods)}
          className={`${errorP ? "border border-red-600" : "border border-blue-400"} font-extralight text-blue-400 pl-2 outline-0 rounded-2xl h-10 w-full`}
        >
          <option value={periods} hidden>
            {periods}
          </option>
        </select>
        {selectPeriods?(
             <div className="shadow-sm border-gray-300 border w-full p-2 rounded-xl">
          {selectPeriod.map((periodList, index) => {
            return (
              <input
                className=" w-full text-start hover:text-sky-500"
                type="button"
                key={index}
                value={periodList}
                onClick={(event) => {
                  setPeriods(event.target.value);
                  setSelectPeriods(false);
                }}
              />
            );
          })}
        </div>
        ):""}
       
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
