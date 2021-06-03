import React from 'react';

export const Home = () => {
  return (
    <main>
      <h1>KontraKaos</h1>
      <h5>Tady bude nějakej claim</h5>
      <a href="/kontrakaos">
        <button>Chci si vyzkoušet aplikaci</button>
      </a>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
        sunt odit minus atque ullam necessitatibus, rerum saepe numquam sint
        mollitia in voluptatibus nostrum natus, facilis expedita quae possimus!
        Numquam, quam. Molestiae quia deserunt exercitationem modi?
      </p>
      {/* Sem dáme to naše ukazovací video */}
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/uMCSdgkdOJc"
      ></iframe>
    </main>
  );
};
