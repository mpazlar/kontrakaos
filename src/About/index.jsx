import React from 'react';

import './style.css';

export const About = () => {
  return (
    <main className="main__about">
      <h1>O nás</h1>
      <a target="_blank" href="https://kontrakaos-about.netlify.app/">
        KontraKaos | o projektu
      </a>
      <div className="person">
        <h3>Magdaléna Pazlarová</h3>
        <img
          className="img__photo"
          height={110}
          src="../assets/capybara_enthusiast.jpg"
          alt="Magda"
        />
        <p className="p__person">
          Majda je hispanistka z Prahy. Má psa Luckyho, vždy perfektní manikúru
          a má ráda jídlo. Ve světe IT ji baví především React a Javascript. Až
          bude velká, nechce být ovocem do Jogobelly, ale kodérkou ve Španělsku.
        </p>
      </div>
      <div className="person">
        <h3>Veronika Prokůpková</h3>
        <img
          className="img__photo"
          height={110}
          src="../assets/Verca.png"
          alt="Verča"
        />
        <p className="p__person">
          Verča je všetečná Brňačka, co se ráda učí. Je jedno, jestli jde o
          pěstování chilli papriček nebo tvorbu webu. Nemá vyhraněnou doménu,
          ale v tomto projektu je zodpovědná za vizuální a textovou podobu
          projektu. Chce se naučit i backend, aby byla schopná svoje projekty
          realizovat sama.
        </p>
      </div>
      <div className="person">
        <h3>Zdeněk Sotolář</h3>
        <img className="img__photo" height={110} src="" alt="Capy" />
        <p className="p__person">
          Zdeněk je mentor, který Majdě a Verči pomáhá se směřováním projektu.
          Přispěl mnoha radami a vlastnoručně uvařenou večeří. Těšíme se, až se
          stane jednou z největších českých osobností herního průmyslu.
        </p>
      </div>
      <div className="person">
        <a target="_blank" href="https://www.czechitas.cz/">
          <img
            height={110}
            src="../assets/czechitas_logo_full.png"
            alt="Capy"
          />
        </a>
        <p className="p__person">
          Czechitas pomáhá především ženám, dívkám a dětem objevovat krásy světy
          informačních technologií. V rámci kurzů, workshopů či táborů je možné
          naučit se programovat, pracovat s daty, grafikou či proniknout do tajů
          digitálního marketingu, kyberbezpečnosti či testování.
        </p>
      </div>
    </main>
  );
};
