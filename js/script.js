// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


// const countDown = ()=> {
//     const count = 30;

// }

// Creo una funzione che genera i 5 numeri casuali
const casualNumber = ()=> {
    const NUMBER = 5;
    const randomNumber = [];
    for(let i = 0; i <= NUMBER; i++){
       randomNumber.push(Math.floor(Math.random() * 101));
    };
    return randomNumber;
}


// Creo 5 div
const box = (randomNumber)=>{
    const container = document.querySelector('.container')
    for(let i = 0; i < 5; i++){
    let cell = document.createElement('div');
    cell.innerHTML = randomNumber[i];
    cell.classList.add('number');
    container.appendChild(cell);
    }
}



// Creo un evento sul bottone
const start = document.querySelector('.btn');
start.addEventListener('click', function(){
    const numberCasual = casualNumber();
    const container = document.querySelector('.container');
    container.innerHTML = '';
    casualNumber();
    let count = 30;
    const countDown = setInterval(() => {
    count--;
    if(count === 0){
        clearInterval(countDown);
        const cell = document.querySelectorAll('.number');
        for(let i = 0; i < 5; i++){
        cell[i].classList.add('text-transparent');
        }
    }

}, 1000);
    box(numberCasual);

    const game = document.querySelector('.submit');
    game.addEventListener('click', function(e){
         e.preventDefault();
        const cell = document.querySelectorAll('.number');
        const memory = document.querySelector('.Select').value;
        console.log(memory);
        if(numberCasual.includes(parseInt(memory))){
            for(let i = 0; i < cell.length; i++){
                if(parseInt(cell[i].innerHTML) === parseInt(memory)){
                    cell[i].classList.remove('text-transparent')
                }
            }
        }
        memory.value = '';
    })
})




// Creo un evento sul submit
