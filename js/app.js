'use strict';

// import { users } from './users.js';
import { AB } from './a-b.js';
import { CD } from './c-d.js';
import { EF } from './e-f.js';
import { GH } from './g-h.js';
import { IJ } from './i-j.js';
import { KL } from './k-l.js';
import { MN } from './m-n.js';
import { OP } from './o-p.js';
import { QR } from './q-r.js';
import { ST } from './s-t.js';
import { UV } from './u-v.js';
import { WX } from './w-x.js';
import { YZ } from './y-z.js';

const main = document.querySelector('main');

const users = [
  ...AB,
  ...CD,
  ...EF,
  ...GH,
  ...IJ,
  ...KL,
  ...MN,
  ...OP,
  ...QR,
  ...ST,
  ...UV,
  ...WX,
  ...YZ,
];

for (const user of users) {
  const contactCard = document.createElement('div');
  contactCard.classList.add('contact-card');

  const name = document.createElement('h2');
  name.textContent = user.name;

  const website = document.createElement('p');
  website.classList.add('website');
  if (user.website === null) website.classList.add('hide');
  website.innerHTML = `<a href="https://${user.website}/" target="_blank" rel="noreferrer noopener">
    ${user.website}
  </a>`;

  const contactInfoList = document.createElement('ul');
  contactInfoList.classList.add('contact-info-list');

  const email = document.createElement('li');
  if (user.email === null) email.classList.add('hide');
  email.innerHTML = `<a href="mailto: ${user.email}">
    <img src="/assets/graphics/email.png" width="20" height="20" title="Email" />
  </a>`;

  const github = document.createElement('li');
  if (user.github === null) github.classList.add('hide');
  github.innerHTML = `<a href="${user.github}" target="_blank" rel="noreferrer noopener">
    <img src="/assets/graphics/github.png" width="20" height="20" title="GitHub" />
  </a>`;

  const linkedin = document.createElement('li');
  if (user.linkedin === null) linkedin.classList.add('hide');
  linkedin.innerHTML = `<a href="${user.linkedin}" target="_blank" rel="noreferrer noopener">
    <img src="/assets/graphics/linkedin.png" width="20" height="20" title="LinkedIn" />
  </a>`;

  const medium = document.createElement('li');
  if (user.medium === null) medium.classList.add('hide');
  medium.innerHTML = `<a href="${user.medium}" target="_blank" rel="noreferrer noopener">
    <img src="/assets/graphics/medium.png" width="20" height="20" title="Medium" />
  </a>`;

  contactInfoList.append(email, github, linkedin, medium);

  contactCard.append(name, website, contactInfoList);

  main.append(contactCard);
}
