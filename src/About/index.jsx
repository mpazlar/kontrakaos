import React from 'react';
import capy from '../assets/capy.jpg';

export const About = () => {
  return (
    <main>
      <h1>O nás</h1>
      <a target="_blank" href="https://kontrakaos.netlify.app/">
        Kontrakaos projekt o projektu
      </a>
      <div>
        <h3>Člen 1</h3>
        <img height={100} src={capy} alt="Capy" />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
          libero necessitatibus fugiat error! Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Distinctio voluptatibus unde
          reprehenderit mollitia, doloribus qui veritatis vero ipsam accusamus,
          illum, veniam modi excepturi. Est aperiam rem neque fuga ut illo.
        </p>
      </div>
      <div>
        <h3>Člen 2</h3>
        <img height={100} src={capy} alt="Capy" />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
          libero necessitatibus fugiat error! Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Distinctio voluptatibus unde
          reprehenderit mollitia, doloribus qui veritatis vero ipsam accusamus,
          illum, veniam modi excepturi. Est aperiam rem neque fuga ut illo.
        </p>
      </div>
    </main>
  );
};
