const btn = document.getElementById('btn');


btn.addEventListener('click', ()=>{
    alert('Você aceita ser o nosso patrono?')

    document.querySelector('.box').style.display = 'block';
})