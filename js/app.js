'use strict';

import { users } from './users.js';

const main = document.querySelector('main');

users.forEach(person => {
  const contactCard = document.createElement('div');
  contactCard.classList.add('contact-card');

  const name = document.createElement('h2');
  name.textContent = person.name;

  const website = document.createElement('p');
  website.classList.add('website');
  if (person.website === null) website.classList.add('hide');
  website.innerHTML = `<a href="https://${person.website}/" target="_blank" rel="noreferrer noopener">
    ${person.website}
  </a>`;

  const contactInfoList = document.createElement('ul');
  contactInfoList.classList.add('contact-info-list');

  const email = document.createElement('li');
  if (person.email === null) email.classList.add('hide');
  email.innerHTML = `<a href="mailto: ${person.email}">
    <img src="/assets/graphics/email.png" width="20" height="20" title="Email" />
  </a>`;

  const linkedin = document.createElement('li');
  if (person.linkedin === null) linkedin.classList.add('hide');
  linkedin.innerHTML = `<a href="${person.linkedin}" target="_blank" rel="noreferrer noopener">
    <img src="/assets/graphics/linkedin.png" width="20" height="20" title="LinkedIn" />
  </a>`;

  const github = document.createElement('li');
  if (person.github === null) github.classList.add('hide');
  github.innerHTML = `<a href="${person.github}" target="_blank" rel="noreferrer noopener">
    <img src="/assets/graphics/github.png" width="20" height="20" title="GitHub" />
  </a>`;

  const medium = document.createElement('li');
  if (person.medium === null) medium.classList.add('hide');
  medium.innerHTML = `<a href="${person.medium}" target="_blank" rel="noreferrer noopener">
    <img src="/assets/graphics/medium.png" width="20" height="20" title="Medium" />
  </a>`;

  contactInfoList.append(email, linkedin, github, medium);

  contactCard.append(name, website, contactInfoList);

  main.append(contactCard);
});
