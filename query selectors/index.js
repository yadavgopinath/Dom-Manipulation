const basketheading=document.querySelector('#basket-heading');
basketheading.style.color='brown';

const heading=document.querySelector('#main-heading');
heading.style.textAlign='right';

const fruit=document.querySelectorAll('.fruit:nth-child(even)');
for(let i=0;i<fruit.length;i++)
    {
        fruit[i].style.backgroundColor='brown';
        fruit[i].style.color='white';

    }
