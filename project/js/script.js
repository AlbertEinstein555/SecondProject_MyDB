/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';


const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img'),
    poster = document.querySelector('.promo__bg'),
    genre = document.querySelector('.promo__genre'),
    //получаем родителя для 4 задачи
    //используем именно querySelector, так как у 1 элемента есть html
    movieList = document.querySelector('.promo__interactive-list');

//Используем forEach, так как он есть у querySelectorAll, а у нас псевдомассив и мы будем
//удалять все его элементы последовательно, иначе не сработает
adv.forEach(item => {
    item.remove();
});
//Можно использовать обычную функцию, но предпочтительнее стрелочную
/* adv.forEach(function (item){
    item.remove();
}); */

genre.textContent = 'драма';

//Чтобы не было синтаксической ошибки - комбинируем кавычки
poster.style.backgroundImage = 'url("img/bg.jpg")';

//если поместить пустой html, то элемент очистится
movieList.innerHTML = '';

//сортируем элементы по алфавиту
movieDB.movies.sort();

//перебираем все элементы массива и используем колбэк-функцию,
//которая будет содержать фильм и номер по порядку для 5 задачи 
movieDB.movies.forEach((film, i) => {
    //помещаем в созданный movieList
    //+= это дополнительное присваивание (a = a + 1 или a += 1)
    //${i + 1} чтобы начать с 1
    
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
    `;
});