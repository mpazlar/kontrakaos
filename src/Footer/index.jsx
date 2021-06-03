import React from 'react';
import fb from '../assets/fb.svg';
import ig from '../assets/ig.svg';
import yt from '../assets/yt.svg';

export const Footer = () => {
  return (
    <footer>
      <address>Ulice 1, Brno, Česká Republika</address>

      <div>Vytvořeno v rámci Czechitas DA©</div>
      <div>
        <a target="_blank" href="mailto:m.pazlarova@gmail.com">
          Napište nám
        </a>
      </div>
      <a target="_blank" href="https://www.facebook.com/magda.pazlarova/">
        <img height={20} src={fb} alt="Facebook" />
      </a>

      <a target="_blank" href="https://www.instagram.com/m.pazlar/">
        <img height={20} src={ig} alt="Instagram" />
      </a>

      <a
        target="_blank"
        href="https://www.youtube.com/channel/UCtK3lKupYOpFya4_QskBQFg"
      >
        <img height={20} src={yt} alt="Youtube" />
      </a>
    </footer>
  );
};
