// Скрипт для смены темы
const THEME = document.querySelector('.logo'); //выбираем кнопку для смены темы
// Я прицепил наблюдение на логотип в nav. 

// Далее навешиваем эвент на кнопку.
// При клике на кнопку выполняется функция, которая добавляет на body класс ".dark-theme".
// При повторном нажатии - снимает класс. (toggle).
THEME.addEventListener('click', function() {
  document.body.classList.toggle('dark-theme');
})