import React from 'react';

import './ContactPage.scss';
import inozemets from '../../images/inozemets.jpg';
import andriushchenko from '../../images/andriushchenko.jpg';
import kashchenko from '../../images/kashchenko.jpg';
import verzhanska from '../../images/verzhanska.jpg';
import kurash from '../../images/kurash.jpg';

const people = [
  {
    name: 'Andriushchenko Andrii',
    image: andriushchenko,
    gmail: 'ANDRII.ANDRIUSHCHENKO.DEV@GMAIL.COM',
    linkedin: 'https://www.linkedin.com/in/andrii-andriushchenko/',
    telegram: 'https://t.me/andrii_andriushchenko',
    github: 'https://github.com/ANDRII-ANDRIUSHCHENKO',
  },
  {
    name: 'Verzhanska Dasha',
    image: verzhanska,
    gmail: 'dariaverhanska@gmail.com',
    linkedin: 'https://www.linkedin.com/in/daria-verzhanska-82b978254/',
    telegram: 'https://t.me/dashaverz',
    github: 'https://github.com/Dashaverz?tab=repositories',
  },
  {
    name: 'Kashchenko Igor',
    image: kashchenko,
    gmail: 'blackangryrabbit@gmail.com',
    linkedin: 'https://www.linkedin.com/in/malvera/',
    telegram: 'https://t.me/mulllvera',
    github: 'https://github.com/igor-kashchenko',
  },
  {
    name: 'Kurash Andrii',
    image: kurash,
    gmail: 'kurash.andrii@gmail.com',
    linkedin: 'https://www.linkedin.com/in/andrii-kurash-ba9a40247/',
    telegram: 'https://t.me/kurashandrii',
    github: 'https://github.com/andrii-kurash',
  },
  {
    name: 'Inozemets Anna',
    image: inozemets,
    gmail: 'inoznetta@gmail.com',
    linkedin: 'https://www.linkedin.com/in/anna-inozemets-218b1a196/',
    telegram: 'https://t.me/brambllee',
    github: 'https://github.com/anna-inozemets',
  },
];

export const ContactPage = () => {
  return (
    <main className="contact-page">
      <h2 className="page-title">This project was delevoped by:</h2>
      <section className="page-info">
        <ul className="contact-list">
          {people.map((person) => (
            <li key={person.name} className="contact-item">
              <h3 className="contact-title">{person.name}</h3>
              <img src={person.image} className="member-photo" />
              <p className="contact-links">
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="linked-in icon"></div>
                </a>
                <a
                  href={person.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="github icon"></div>
                </a>
                <a
                  href={`mailto:${person.gmail}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="gmail icon"></div>
                </a>
                <a
                  href={person.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="telegram icon"></div>
                </a>
              </p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};
