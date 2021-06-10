import React from 'react';

const rollDice = (max) => {
  return Math.floor(Math.random() * max);
};

export const rozdeleniPraci = (stateTasks, lidi) => {
  const tasks = stateTasks.reduce((acc, { jmeno, delka, casto }) => {
    acc.push(...Array.from({ length: casto }, () => ({ jmeno, delka })));
    return acc;
  }, []);

  let osoby = lidi.map((clovek) => ({
    jmeno: clovek,
    prace: [],
  }));

  const najdiOsobu = (jmeno) => {
    return osoby
      .map((item, index) => ({ jmeno: item.jmeno, index }))
      .filter((item) => item.jmeno === jmeno)
      .map((item) => item.index);
  };

  for (let i = 0; i < tasks.length; i++) {
    const komuPriradimRandom = rollDice(lidi.length);
    const [vysledekHledani] = najdiOsobu(lidi[komuPriradimRandom]);

    osoby[vysledekHledani].prace.push(tasks[i]);
  }

  return osoby;
};

const rollDiceDay = (max) => {
  return Math.floor(Math.random() * max);
};

const rozdeleniPokus = (ukoly) => {
  const days = [
    { tasks: [] },
    { tasks: [] },
    { tasks: [] },
    { tasks: [] },
    { tasks: [] },
    { tasks: [] },
    { tasks: [] },
  ];

  for (let i = 0; i < ukoly.length; i++) {
    let random = rollDiceDay(6);

    while (i < ukoly.length) {
      random = days[random].tasks.push(ukoly[i]);

      i++;
    }
  }
  return days;
};

const pokus = [
  { jmeno: 'nadobi', delka: '10' },
  { jmeno: 'lux', delka: '20' },
  { jmeno: 'koupelna', delka: '30' },
  { jmeno: 'nadobi', delka: '10' },
  { jmeno: 'nadobi', delka: '10' },
  { jmeno: 'nadobi', delka: '10' },
];

console.log(rozdeleniPokus(pokus));

export const rozdeleniDnu = (oso) => {
  const dny = [];

  for (let i = 0; i < oso.length; i++) {
    const osoba = {
      name: oso[i].jmeno,
      days: rozdeleniPokus(oso[i].prace),
    };
    console.log(osoba);
    dny.push(osoba);
  }

  return dny;
};
