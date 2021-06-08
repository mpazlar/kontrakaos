import React from 'react';
import './style.css';

export const Table = ({ data }) => {
  return (
    <>
      <h2>Rozvrh domácích prací</h2>
      <table>
        <thead>
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
        </thead>
        {data.map((dt) => {
          return (
            <tbody>
              <tr>
                <td>{dt.name}</td>

                {dt.days.map((day) => {
                  return (
                    <>
                      {day.tasks.map((task) => {
                        return <td>{task.jmeno}</td>;
                      })}
                    </>
                    /*
                      <td>
                        {day.tasks.map((task) => {
                          return <p>{task.jmeno}</p>;
                        })}
                      </td>
                    */
                  );
                })}
              </tr>
            </tbody>
          );
        })}
      </table>
    </>
  );
};
