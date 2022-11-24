let nameArr = ['resad', 'raul', 'timur', 'lale', 'kerim'];
let lastNameArr = ['ibrahimov(-a)', 'Mammadov(-a)', 'Rasulov(-a)', 'Xeyyam'];
let mailArr = ['natigagharzayev@gmail.com', 'elonmusk@gmail.com', 'bill@gmail.com', 'buffet@gmail.com'];
let numberArr = ['+994 70 501 04 07', '+994 77 347 87 67', '+994 51 353 90 15'];

const name = document.querySelector('.input__name'),
    lastName = document.querySelector('.input__lastname'),
    date = document.querySelector('.input__date'),
    mail = document.querySelector('.input__email'),
    number = document.querySelector('.input__number'),
    gender = document.querySelectorAll('.gender > input'),
    btn = document.querySelector('.btn');
    

btn.addEventListener('click', function (){
    randMail(mail);
    randName(name);
    randSurname(lastName);
    randDate(date);
    randNumber(number);
    randGender(gender);
});


function randMail(input) {
    input.value = mailArr[Math.floor(Math.random() * mailArr.length)];
}
function randName(input) {
    input.value = nameArr[Math.floor(Math.random() * nameArr.length)];
}
function randSurname(input) {
    input.value = lastNameArr[Math.floor(Math.random() * lastNameArr.length)];
}
function randDate(input) {
    input.value = `${Math.floor(Math.random() * (2023 - 2000) + 2000)}-${Math.floor(Math.random() * (13 - 10) + 10)}-${Math.floor(Math.random() * (31 - 10) + 10)}`;
}
function randNumber(input) {
    input.value = numberArr[Math.floor(Math.random() * numberArr.length)];
}
function randGender(check){
    check[Math.floor(Math.random() * check.length)].setAttribute('checked', true);
}