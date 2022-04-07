let rating = document.querySelector('.rating');
let thankyou = document.querySelector('.thankyou');
let button = document.querySelector('button');


button.addEventListener('click', () => {
    thankyou.classList.remove('switch');
    rating.classList.add('switch');
})

let ratingNumbers = document.querySelectorAll('.rating__numbers div');
let insertText = document.querySelector('.insertText');



ratingNumbers.forEach (item => {
    item.addEventListener('click', () => {

        for(i=0; i < ratingNumbers.length; i++) {
            ratingNumbers[i].classList.remove('btnActive');
        }

        item.classList.toggle('btnActive');
        insertText.textContent = item.dataset.numbers;

    })
})

