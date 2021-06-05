import React from 'react';
import './style.css';
import { Table } from '../Table';

const Prace = () => {
  return (
    <>
      <div className="prace">
        <h4>Jaká práce?</h4>
        <input type="text" name="" id="" placeholder="Název práce" />
        <h4>Jak dlouho trvá práci udělat?</h4>
        <select name="dlouho" id="">
          <option value="0">Přibližná délka</option>
          <option value="10mins">asi 10 minut</option>
          <option value="20mins">asi 20 minut</option>
          <option value="30mins">asi 30 minut</option>
          <option value="40mins">asi 40 minut</option>
          <option value="50mins">asi 50 minut</option>
          <option value="60mins">asi 60 minut</option>
          <option value="70mins">asi 70 minut</option>
          <option value="80mins">asi 80 minut</option>
        </select>
        <h4>Jak často se práce opakuje?</h4>
        <select name="casto" id="">
          <option value="0">Přibližná frekvence</option>
          <option value="1_tydne">1x týdne</option>
          <option value="2_tydne">2x týdne</option>
          <option value="3_tydne">3x týdne</option>
          <option value="4_tydne">4x týdne</option>
          <option value="5_tydne">5x týdne</option>
          <option value="6_tydne">6x týdne</option>
          <option value="7_týdne">každý den</option>
        </select>
      </div>
    </>
  );
};

const Osoba = () => {
  return <input type="text" id="1" placeholder="Jméno osoby 1" />;
};

export const Aplikace = () => {
  return (
    <main className="main__app">
      <h1>KontraKaos Aplikace</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
        voluptatibus exercitationem sequi excepturi, laborum placeat fuga
        praesentium molestiae illum nemo eum hic dolores.
      </p>
      {/* Tohle je jedna práce  */}

      <h4>Kolik lidí?</h4>
      <div className="box__osoby">
        <div className="inputs">
          <input type="text" id="1" placeholder="Jméno osoby 1" /> <br />
          <input type="text" id="2" placeholder="Jméno osoby 2" />
          <Osoba />
          <Osoba />
        </div>
        <button className="button__add">+</button>
      </div>

      <div className="box__prace">
        <Prace />
        <Prace />
        <Prace />
        <Prace />
      </div>

      <button>Přidat práci</button>

      <Table />
    </main>
  );
};
