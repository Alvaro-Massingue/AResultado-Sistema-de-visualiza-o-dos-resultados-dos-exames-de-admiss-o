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

  return (
    <div className="flex flex-col gap-2 items-center min-h-50 justify-center">
      <div className="flex basis-full shrink p-5 gap-2 flex-wrap">
        <label className="text-gray-700" htmlFor="course">
          Curso
        </label>
        <select
          value={course}
          onChange={(event) => setCourse(event.target.value)}
          className=" w-55 border border-gray-500 rounded-xl"
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
        <label className="text-gray-700" htmlFor="Period">
          Periodo
        </label>
        <select
          value={periods}
          onChange={(event) => setPeriods(event.target.value)}
          className="  border border-gray-500 rounded-xl"
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
        className="bg-blue-500 text-white rounded-xl h-10 w-[90%] border border-gray-500"
        onClick={() => props.seeResult(course, periods)}
      >
        Vizualizar
      </button>
    </div>
  );
};

export default SearchResults;
