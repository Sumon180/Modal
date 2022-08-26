

let open = document.getElementById('openbtn');
let closebtn = document.getElementById('closebtn');
let modal = document.getElementById('modal');

open.addEventListener('click',() => {
    modal.classList.add('show');
});

closebtn.addEventListener('click',() => {
    modal.classList.remove('show');
});