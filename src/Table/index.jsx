import React from 'react';
import './style.css';

export const Table = ({ data }) => {
  console.log(data);
  return (
    <>
      <div className="table">
        <h2 className="table__name">Rozvrh domácích prací</h2>
        <p className="table__content">A je to hotovo! </p>
        <p className="table__content">
          KontraKaos vám rozdělil domácí práce mezi všechny členy/ky domácnosti.
          Díky tomu se budou všichni podílet na tom, aby byla vaše domácnost
          příjemným mísem k žití. Spokojenější budou všichni - těm přetíženým se
          uleví a ubyde třenic a nepříjemností nad neumytým nádobím.
        </p>
        <table style={{ display: data.length === 0 ? 'none' : 'block' }}>
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

                  <td>
                    <ul className="no__bullets">
                      {dt.days[0].tasks.map((d, i) => (
                        <li key={i}>{d.jmeno}</li>
                      ))}
                    </ul>
                  </td>
                  <td>
                    <ul className="no__bullets">
                      {dt.days[1].tasks.map((d, i) => (
                        <li key={i}>{d.jmeno}</li>
                      ))}
                    </ul>
                  </td>
                  <td>
                    <ul className="no__bullets">
                      {dt.days[2].tasks.map((d, i) => (
                        <li key={i}>{d.jmeno}</li>
                      ))}
                    </ul>
                  </td>
                  <td>
                    <ul className="no__bullets">
                      {dt.days[3].tasks.map((d, i) => (
                        <li key={i}>{d.jmeno}</li>
                      ))}
                    </ul>
                  </td>
                  <td>
                    <ul className="no__bullets">
                      {dt.days[4].tasks.map((d, i) => (
                        <li key={i}>{d.jmeno}</li>
                      ))}
                    </ul>
                  </td>
                  <td>
                    <ul className="no__bullets">
                      {dt.days[5].tasks.map((d, i) => (
                        <li key={i}>{d.jmeno}</li>
                      ))}
                    </ul>
                  </td>
                  <td>
                    <ul className="no__bullets">
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
