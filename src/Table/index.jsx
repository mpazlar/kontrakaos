import React from 'react';
import './style.css';

/*
const projitTasks = (task) => {
  let vysledek = '';
  for (let i = 0; i < task.length; i++) {
    vysledek += ` ${task[i].jmeno} `;
  }
  console.log(vysledek);
  return vysledek;
};
*/
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
            console.log(dt.days[0].tasks);
            console.log(dt.days[1].tasks);
            console.log(dt.days[2].tasks);
            console.log(dt.days[3].tasks);
            return (
              <tbody>
                <tr>
                  <td>{dt.name}</td>

                  <td>
                    <ul>
                      {dt.days[0].tasks.map((d, i) => (
                        <li key={i}>{d.jmeno}</li>
                      ))}
                    </ul>
                  </td>
                  <td>
                    <ul>
                      {dt.days[1].tasks.map((d, i) => (
                        <li key={i}>{d.jmeno}</li>
                      ))}
                    </ul>
                  </td>
                  <td>
                    <ul>
                      {dt.days[2].tasks.map((d, i) => (
                        <li key={i}>{d.jmeno}</li>
                      ))}
                    </ul>
                  </td>
                  <td>
                    <ul>
                      {dt.days[3].tasks.map((d, i) => (
                        <li key={i}>{d.jmeno}</li>
                      ))}
                    </ul>
                  </td>
                  <td>
                    <ul>
                      {dt.days[4].tasks.map((d, i) => (
                        <li key={i}>{d.jmeno}</li>
                      ))}
                    </ul>
                  </td>
                  <td>
                    <ul>
                      {dt.days[5].tasks.map((d, i) => (
                        <li key={i}>{d.jmeno}</li>
                      ))}
                    </ul>
                  </td>
                  <td>
                    <ul>
                      {dt.days[6].tasks.map((d, i) => (
                        <li key={i}>{d.jmeno}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </>
  );
};
