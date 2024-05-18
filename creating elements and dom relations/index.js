const header=document.querySelector('#header');

const heading=document.createElement('h3');

const content=document.createTextNode('Buy high quality organic fruit online');

heading.appendChild(content);
header.appendChild(heading);


const para=document.createElement('p');
const text=document.createTextNode('Total fruits:4')
para.appendChild(text);
const divs = document.getElementsByTagName('div');
const seconddiv=divs[1];

const fruits=document.querySelector('.fruits');
seconddiv.insertBefore(para,fruits);

para.id='fruits-total';
