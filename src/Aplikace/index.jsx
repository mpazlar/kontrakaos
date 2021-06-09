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
      <div className="app__heading">
        <h1>Aplikace</h1>
        <p>
          Aplikace KontraKaos byla stvořena proto, aby pomohla se
          spravedlivějším rozdělením domácích prací. Je jedno, jestli
          potřebujete naučit děti zodpovědnosti za prostor, který obývají nebo
          spravedlivě rozdělit péči například ve studentském bytě. Aplikace vám
          poslouží i v případě, že bydlíte sami a chcete jen mít přehled, že je
          o vše postaráno.
        </p>
        <p>
          Níže vyberte, kolik osob se na domácích pracích má podílet. Dále pak
          do nabídky zadejte domácí práce, které je potřeba vykonávat. Až zadáte
          všechny domácí práce, které je potřeba vykonat, tlačítkem spustíte
          výpočet přerozdělení zadaných prací mezi členy/ky domácnosti. Na další
          stránce se můžete podívat na vygenerovanou tabulku, kterou si můžete
          stáhnout či vytisknout.
        </p>
      </div>
      <AppForm setTableData={setTableData} />

      <Table data={tableData} />
    </main>
  );
};
