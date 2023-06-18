import React from "react";
import "./Details.css";
// import { addTask } from "../Actions/homeActions";
import {  useSelector } from "react-redux";

function Details() {

  const list = useSelector((state) => state.todoReducers.list);

  const date = new Date();
  return (
    <>
      <h1 className="Title text-center">Your weekly update is here</h1>

      <div className="main-div bg-light list-group-item my-4">
        {list.map((elem) => {
          return (
            <div className="details col-8 mx-auto" key={elem.id}>
              <table className="my-4">
                <tr className="taskname">
                  <td className="tableTitle text-center" colspan="7">
                    {elem.task + " on the date of "}
                    {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}
                  </td>

                </tr>
                <tr>
                  <th>Sunday</th>
                  <th>Monday</th>
                  <th>Tuesday</th>
                  <th>Wednesday</th>
                  <th>Thursday</th>
                  <th>Friday</th>
                  <th>Saturday</th>
                </tr>
                <tr>
                  <td>
                  <select id="status">
                  <option value="volvo">None</option>
                  <option class="material-symbols-outlined">Done </option>
                  <option class="material-symbols-outlined">Close</option>
                 </select>
                  </td>
                  <td>
                  <select id="status">
                  <option value="volvo">None</option>
                  <option class="material-symbols-outlined">Done</option>
                  <option class="material-symbols-outlined">Close</option>
                 </select>
                  </td>
                  <td>
                  <select id="status">
                  <option value="volvo">None</option>
                  <option class="material-symbols-outlined">Done</option>
                  <option class="material-symbols-outlined">Close</option>
                 </select>
                  </td>
                  <td>
                  <select id="status">
                  <option value="volvo">None</option>
                  <option class="material-symbols-outlined">Done</option>
                  <option class="material-symbols-outlined">Close</option>
                 </select>
                  </td>
                  <td>
                  <select id="status">
                  <option value="volvo">None</option>
                  <option class="material-symbols-outlined">Done</option>
                  <option class="material-symbols-outlined">Close</option>
                 </select>
                  </td>
                  <td>
                  <select id="status">
                  <option value="volvo">None</option>
                  <option class="material-symbols-outlined">Done</option>
                  <option class="material-symbols-outlined">Undone</option>
                 </select>
                  </td>
                  <td>
                  <select id="status">
                  <option value="volvo">None</option>
                  <option class="material-symbols-outlined">Done</option>
                  <option class="material-symbols-outlined">Undone</option>
                 </select>
                  </td>
                </tr>
              </table>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Details;