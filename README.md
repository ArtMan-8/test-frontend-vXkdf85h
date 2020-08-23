<h1 align="center">Тестовое задание</h1>

[![Build Status](https://travis-ci.com/ArtMan-8/test-frontend-vXkdf85h.svg?branch=master)](https://travis-ci.com/ArtMan-8/test-frontend-vXkdf85h) <a target="_blank" href="https://artman-8.github.io/test-frontend-vXkdf85h/"><img src="https://img.shields.io/badge/сайт-онлайн-000000?style=flat-square&labelColor=black"/></a>

Сверстать компонент и сделать его адаптивным. Адаптив сделайте на ваше усмотрение. Главное, чтобы ничего не ломалось. При увеличении ширины экрана больше чем 1200 px, контентная часть центрируется. Минимальная ширина экрана, на которой страница не должна иметь горизонтального скролла равна 320px.

### **Обязательно реализовать**
1. Переключение вкладок.
2. Валидацию формы:
    - валидируются только поля открытой вкладки;
    - все поля обязательны;
    - в поле “ФИО” допустимы только кириллица, пробел, тире;
    - в поле “Телефон” допустимы только цифры и должна быть маска ввода.
3. Карта:
    - Разрешается использовать любые карты, например, Яндекс, Гугл или open street map,
    - кастомизировать иконку метки,
    - при первом показе карта должна масштабироваться так, чтобы все метки были в области видимости,
    - предусмотреть вариант, что меток может быть любое количество,
    - на тач устройствах заблокировать скролл карты, чтобы можно было без проблем скроллить страницу

Для решения задачи используйте любые удобные вам инструменты и сборщики. Желательно **не использовать** css-фреймворки типа Bootstrap. Будет плюсом, если сделаете приложение на React.

Компонент должен корректно отображаться в последних версиях современных браузеров.

---
## **Используемые инструменты и пояснения**
<img src="https://img.shields.io/badge/BEM-code-FF0000?style=flat-square&labelColor=black"> <img src="https://img.shields.io/badge/React-code-FF0000?style=flat-square&logo=React&labelColor=black"> <img src="https://img.shields.io/badge/StyledComponents-code-FF0000?style=flat-square&logo=Styled-Components&labelColor=black">

<img src="https://img.shields.io/badge/VSCode-tool-0000FF?style=flat-square&logo=Visual-Studio-Code&labelColor=black"> <img src="https://img.shields.io/badge/ESlint-tool-0000FF?style=flat-square&logo=ESlint&labelColor=black"> <img src="https://img.shields.io/badge/Webpack-tool-0000FF?style=flat-square&logo=Webpack&labelColor=black"> <img src="https://img.shields.io/badge/babel-tool-0000FF?style=flat-square&logo=babel&labelColor=black"> <img src="https://img.shields.io/badge/TravisCI-tool-0000FF?style=flat-square&logo=Travis-CI&labelColor=black"> <img src="https://img.shields.io/badge/ghPages-tool-0000FF?style=flat-square&logo=GitHub&labelColor=black">

<br>

В формах используется ```action="https://echo.htmlacademy.ru/"``` - при отправке показывает какие данные ушли. Для стилизации использовал **StyledComponents**, но базовые стили вынес в паблик. Возможно это излишне и сдесь хорошо вписались бы ***css-modules***, т.к. не использую специфичные вещи из StyledComponents. Хотел опробовать что-то новое. Так же и с пакетом для карт **leaflet**. Для авто-деплоя на **gh-pages** использовал **travic-ci**.

---
<br>
<h2 align="center">Установка и запуск</h2>

### Скачать
```sh
git clone git@github.com:ArtMan-8/test-frontend-vXkdf85h.git
```

### Перейти в папку
```sh
cd test-frontend-vXkdf85h
```

### Установить
```sh
npm install
```

### Запустить
```sh
npm run start
```
