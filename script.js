"use strict"

let button  = document.getElementById('doit');

let selected = document.getElementById("selected");

let Tcontainer = document.querySelector(".Tcontainer");
let container = document.querySelector(".container");

let s = false;

let rateHendler = (rate) => { 
    s = true

    switch(rate) {
        case 1:
            selected.innerText = " You selected 1 out of 5 "
            break;
        case 2: 
            selected.innerText = " You selected 2 out of 5 "
            break;
        case 3:
            selected.innerText = " You selected 3 out of 5 "
            break;
        case 4: 
            selected.innerText = " You selected 4 out of 5 "
            break;
        case 5: 
            selected.innerText = " You selected 5 out of 5 "
            break;
    }

}


button.addEventListener('click', () => { 
    if (s === true ) { 
        container.style.display = 'none';
        Tcontainer.style.display = "flex";
    }
})



