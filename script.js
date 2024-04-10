let body = document.getElementById('bodyHtml');

let btn = document.getElementById('btnDarkMode');

let reverseBtn = document.querySelector('.btn-reverse');


btn.addEventListener('click', function(){
    body.classList.toggle('active');

    reverseBtn.classList.toggle('fa-moon');

})