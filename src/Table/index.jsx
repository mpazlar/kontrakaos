import React from 'react';
import './style.css';

export const Table = () => {
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

        <tr>
          <td>Majda</td>
          <td>kokos</td>
          <td>kokos</td>
          <td>kokos</td>
          <td>kokos</td>
          <td>kokos</td>
          <td>kokos</td>
          <td>kokos</td>
        </tr>

        <tr>
          <td>Verča</td>
          <td>kokos</td>
          <td>kokos</td>
          <td>kokos</td>
          <td>kokos</td>
          <td>kokos</td>
          <td>kokos</td>
          <td>kokos</td>
        </tr>

        <tr>
          <td>Zdeněk</td>
          <td>kokos</td>
          <td>kokos</td>
          <td>kokos</td>
          <td>kokos</td>
          <td>kokos</td>
          <td>kokos</td>
          <td>kokos</td>
        </tr>
      </table>
    </>
  );
};
