import React from 'react';

const rollDice = (max) => {
  return Math.floor(Math.random() * max);
};

export const rozdeleniPraci = (stateTasks, lidi) => {
  const tasks = stateTasks.reduce((acc, { jmeno, delka, casto }) => {
    acc.push(...Array.from({ length: casto }, () => ({ jmeno, delka })));
    return acc;
  }, []);

  console.log(tasks);

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

export const rozdeleniDnu = (oso) => {
  const dny = [];

  for (let i = 0; i < oso.length; i++) {
    let random = rollDiceDay(6);

    const osoba = {
      name: oso[i].jmeno,
      days: [
        { tasks: [] },
        { tasks: [] },
        { tasks: [] },
        { tasks: [] },
        { tasks: [] },
        { tasks: [] },
        { tasks: [] },
      ],
    };

    osoba.days[random].tasks.push(...oso[i].prace);

    dny.push(osoba);
    console.log('Tady je nová branch');
  }

  return dny;
};
