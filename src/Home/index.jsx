import React from 'react';
import './style.css';

export const Home = () => {
  return (
    <main className="main__home">
      <div className="left">
        <h1>KontraKaos</h1>
        <p className="claim">
          Jediná spravedlnost na tomhle světě je náhoda. - Harvey Dent, Batman:
          Temný rytíř (2008)
        </p>
        <a href="/kontrakaos">Chci vyzkoušet aplikaci!</a>
      </div>
      <div className="right">
        <p>
          Koš přetéká špinavým prádlem. Dřez je plný nádobí. Lednička zeje
          prázdnotou. Pes by potřeboval vykoupat a zahrada posekat. Když je o
          domácnost dobře postaráno, není to skoro vidět. Jakmile to ale
          nefunguje, je to chaos. Často se stává, že vypořádání se s tímto
          chaosem leží na bedrech několika málo lidí. Potom je péče o domácnost
          taky pěkná otrava. Proto jsme stvořily KontraKaos, který vám pomůže se
          spravedlivějším rozdělením domácích prací mezi členy a členky
          domácnosti. Do aplikace jednoduše zadáte domácí práce a KontraKaos se
          již postará o to, aby se všichni práce mezi členy domácnosti rozdělily
          podle náhody.
        </p>
      </div>
    </main>
  );
};
