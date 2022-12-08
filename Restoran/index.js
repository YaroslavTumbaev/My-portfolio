function a() {
    alert("")
}

let button = document.getElementById('English');
let p = document.getElementById('main-text-1');

button.addEventListener('click',() =>{
    p.innerText = ''
})