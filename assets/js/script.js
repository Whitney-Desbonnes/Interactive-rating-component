let rating = document.querySelector('.rating');
let thankyou = document.querySelector('.thankyou');
let button = document.querySelector('button');
console.log(button);

button.addEventListener('click', () => {
    thankyou.classList.remove('switch');
    rating.classList.add('switch');
})
