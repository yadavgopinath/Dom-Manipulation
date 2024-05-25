const form=document.querySelector('form');
const lastele=form.lastElementChild;
const input=document.createElement('input');
input.id='description';
form.insertBefore(input,lastele);

const fruit=document.getElementsByClassName('fruit');
for(let x=0;x<fruit.length;x++)
    {
        const para=document.createElement('p');
        para.setAttribute('class','fruit-desc');
        para.setAttribute('style','font-style:italic');
        const text=document.createTextNode('King of fruits')
        para.appendChild(text);
       const last=fruit[x].lastElementChild;
      
       fruit[x].insertBefore(para,last);
        
    }

    const filter=document.getElementById('filter');
    filter.addEventListener('keyup',function(event){
        const textentered=event.target.value.toLowerCase();
        const fruits=document.getElementsByClassName('fruit');
        const desc=document.getElementsByClassName('fruit-desc');
        for(let i=0;i<fruits.length;i++)
            {
                const currfruit=fruits[i].firstChild.textContent.toLowerCase();
                const currdesc=desc[i].firstChild.textContent.toLowerCase();
                if(currfruit.indexOf(textentered) ==-1 && currdesc.indexOf(textentered) ==-1){
                    fruits[i].style.display='none'; 
                }
                else{
                    fruits[i].style.display='flex'; 
                }
            }
       
    });
    