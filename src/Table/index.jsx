import React from 'react';
import './style.css';

export const Table = ({ data }) => {
  console.log('jjj', data);

  /*
  (2) [{…}, {…}]
  0: {name: "Joan", days: Array(7)}
  1: {name: "Mona", days: Array(7)}
*/

  /*
  0:
  days: Array(7)
  0: {tasks: Array(0)}
  1: {tasks: Array(0)}
  2: {tasks: Array(0)}
  3: {tasks: Array(0)}
  4: {tasks: Array(0)}
  5: {tasks: Array(0)}
  6: {tasks: Array(0)}
  length: 7

name: "Joan"*/
  return (
    <>
      <h2>Rozvrh domácích prací</h2>
      <table>
        <tr className="dny">
          <th>Osoba</th>
          <th>Pondělí</th>
          <th>Útery</th>
          <th>Středa</th>
          <th>Čtvrtek</th>
          <th>Pátek</th>
          <th>Sobota</th>
          <th>Neděle</th>
        </tr>

        {data.map((dt) => {
          console.log(dt.name);
          console.log(dt.days);
          return (
            <tr>
              <td>{dt.name}</td>

              {dt.days.map((day) => {
                return (
                  <td>
                    {day.tasks.map((task) => {
                      return <p>{task.jmeno}</p>;
                    })}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </table>
    </>
  );
};
