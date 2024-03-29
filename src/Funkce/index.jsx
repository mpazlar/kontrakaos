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
    let random = rollDiceDay(7);
    let cycle = 0;
    while (
      days[random].tasks.find((chore) => chore.jmeno === ukoly[i].jmeno) &&
      cycle < 15
    ) {
      random = rollDiceDay(7);
      cycle++;
    }
    days[random].tasks.push(ukoly[i]);
  }
  return days;
};

export const rozdeleniDnu = (oso) => {
  const dny = [];

  for (let i = 0; i < oso.length; i++) {
    const osoba = {
      name: oso[i].jmeno,
      days: rozdeleniPokus(oso[i].prace),
    };

    dny.push(osoba);
  }

  return dny;
};
