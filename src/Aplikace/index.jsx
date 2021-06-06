import React, { useState } from 'react';
import './style.css';
import { Table } from '../Table';
import { AppForm } from '../AppForm';

export const Aplikace = () => {
  const dataConsole = () => {
    console.log('data');
  };

  const [tableData, setTableData] = useState([]);

  return (
    <main className="main__app">
      <h1>KontraKaos Aplikace</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
        voluptatibus exercitationem sequi excepturi, laborum placeat fuga
        praesentium molestiae illum nemo eum hic dolores.
      </p>

      <AppForm setTableData={setTableData} />

      <Table data={tableData} />
    </main>
  );
};
