// Выбираем кнопку
const btn = document.querySelector('.btn-toggle');
// Отслеживаем щелчок по кнопке
btn.addEventListener('click', function() {
  // Затем переключаем (добавляем/удаляем) класс .dark-theme для body
  document.body.classList.toggle('dark-theme'); 
})


window.onload = function() {
let preloader = document.getElementById('preloader')
preloader.style.display = 'none'
};

