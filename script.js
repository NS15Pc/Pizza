let dropdown = document.querySelector('#dropdown');
let close = document.querySelector('#close');
let nav = document.getElementById('nav');
dropdown.addEventListener('click', () => {
   nav.style.display = 'inline-block';
});
close.addEventListener('click', () => {
   nav.style.display = 'none';
});

// move home button menu
let menu = document.querySelector('#menu');
let main = document.querySelector('#main');

let Home = document.querySelector('#Home').addEventListener("click",()=>{
   menu.style.display = 'none';
   main.style.display = 'inline-block';
})
let Menu = document.querySelector('#Menu').addEventListener("click",()=>{
   menu.style.display = 'inline-block';
   main.style.display = 'none';
})
let order = document.querySelector('#order').addEventListener("click",()=>{
   menu.style.display = 'inline-block';
   main.style.display = 'none';
})



// Alert Show
let pizzaboxs = document.querySelectorAll('.pizzabox');
pizzaboxs.forEach(pizzabox => {
    pizzabox.addEventListener('click', () => {
        alert("Inter nat not working try again later!🍕");
    });
});
