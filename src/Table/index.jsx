import React from 'react';
import './style.css';

export const Table = ({ data }) => {
  return (
    <>
      <div className="table">
        <h2>Rozvrh domácích prací</h2>
        <p>A je to hotovo! </p>
        <p>
          KontraKaos vám rozdělil domácí práce mezi všechny členy/ky domácnosti.
          Díky tomu se budou všichni podílet stejně (nebo velmi podobně) na tom,
          aby byla vaše domácnost příjemným mísem k žití. Spokojenější budou
          všichni - těm přetíženým se uleví a ubyde třenic a nepříjemností nad
          neumytým nádobím. Níže si tabulku můžete stáhnout a poslat všem, kdo
          se mají na pracích podílet nebo třeba vytisknout a pověsit na
          ledničku.
        </p>

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
      </div>
    </>
  );
};
