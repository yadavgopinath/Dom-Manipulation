const form=document.querySelector('form');
const fruit=document.getElementsByClassName('fruits');
const list=document.getElementsByClassName('fruit');


for(let i=0;i<list.length;i++)
  {
    const dltele=document.createElement('button');
    const text1=document.createTextNode('Edit');
    dltele.appendChild(text1);
    dltele.className='edit-btn';
    list[i].appendChild(dltele);
  }

form.addEventListener('submit',function(event)
{
  event.preventDefault();
const add=document.createElement('li');
const input=document.getElementById('fruit-to-add');
add.innerHTML=input.value+'<button class="delete-btn">x</button>'+'<button class="edit-btn">Edit</button>';
fruit[0].appendChild(add);   
})

fruit[0].addEventListener('click',function(event)
{
  if(event.target.classList.contains('delete-btn'))
    {
      const fruitname=event.target.parentElement;
      console.log(fruitname);
      fruit[0].removeChild(fruitname);
    };
});