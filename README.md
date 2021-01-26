<!-- ## Version environment

Node: 14.6.0
Npm: 6.14.6
Gulp CLI: 2.2.0
Gulp : 4.0.2

## Project structure

| Folder   | Description                     |
| -------- | ------------------------------- |
| `build/` | Production code (autogenerated) |
| `src/`   | Development sources             |

## Development

1. Install development dependencies, run:

   `npm install`

2. Start the watch mode (Browsersync will serve files from the `build` folder), run:

   `npm run watch`

3. Edit files in the `src` folder, and watch the result in your browser.

   P.S. If your browser doesn't automatically open a new tab, type in `localhost:3000` in your browser.

## Production

1. To build the sources run:

   `npm run build`





 -->




# Gulp + Webpack
## :gear: Версия окружения
| Программа    | Версия          |
| --------     | ----------------|
| `Node`       | v14.6.0         |
| `Npm`        | v6.14.6         |
| `Gulp`       | v4.0.2          |
| `Gulp CLI`   | v2.2.0          |

## :fire: Особенности
* используется препроцессор [SCSS](https://sass-lang.com/)
* используется [Webpack](https://webpack.js.org/) для сборки JavaScript-модулей
* используется транспайлер [Babel](https://babeljs.io/) для поддержки современного JavaScript (ES6) в браузерах
* используется компонентный подход
* используется CSS-сетка на основе Bootstrap для быстрой адаптивной вёрстки
<!-- * используется жёсткий кодгайд
* используется проверка кода на ошибки перед коммитом -->


## :hammer_and_wrench: Установка локально
* установите ```NodeJS```
* установите ```Gulp``` глобально: ```sudo npm install -g gulp``` или ```npm install -g gulp```
* перейдите в папку со сборкой
* скачайте необходимые зависимости: ```npm i```
* чтобы начать работу с локальным сервером и html, введите команду: ```npm run dev``` (режим разработки)
* чтобы начать работу в проекте с wordpress, введите команду: ```npm run watch``` (режим разработки)
* чтобы собрать проект, введите команду ```yarn run build``` (режим сборки)

Если вы всё сделали правильно, у вас должен открыться браузер с локальным сервером. Режим сборки предполагает оптимизацию проекта: сжатие изображений, минифицирование CSS и JS-файлов.

<!-- ## :hammer_and_wrench: Установка Docker -->

## :open_file_folder: Файловая структура

```
gulp-webpack-starter
├── assets                        - папка в которую попадаю обработаные файлы
├── gulp                          - папка для конфигураци gulp
│   ├── tasks                     - тут собраны все таски gulp
│   ├── config-sample.js          - пример настройки проекта
│   └── config.js                 - настройка проекта
├── src                           - все основные файлы, которые вам нужны
│   ├── fonts                     - папка с подключаемыми шрифтами
│   ├── helpers                   - вспомогательные файлы
│   │   ├── ajax                  - примеры ajax для тестирования локально
│   │   └── libs                  - тут лежат библиотеки если нельзя их подключить с npm
│   ├── img                       - графика
│   │   ├── delete                - картинки которые используются как заглушки для верстки
│   │   ├── favicon               - фавикон сайта
│   │   ├── images                - растровые картинки проекта
│   │   └── svg                   - svg картинки проекта
│   │        └── sprites          - svg для спрайта
│   ├── js                        - скрипты сайта
│   │   ├── module                - отдельные модули
│   │   └── example.js            - пример одного файла для страницы
│   ├── scss                      - стили проекта
│   │   ├── blocks                - примеры стилей вынесенных в блоки
│   │   │    ├── common           - папка с переиспользуемыми блоками
│   │   │    ├── page             - папка с уникальными блоками для страницы
│   │   │    └── example.scss     - пример файла с блоками для страницы
│   │   ├── default               - папка с дефолтными стилями для сайта
│   │   │    ├── components.scss  - компоненты проекта
│   │   │    ├── default.scss     - дефолтные стили для тегов
│   │   │    ├── fonts.scss       - подключение шрифтов
│   │   │    ├── grid.scss        - настройка контейнера для сайта
│   │   │    └── reset.scss       - сброс стилей всех браузеров
│   │   ├── helpers               - вспомагательные файлы
│   │   │    ├── function.scss    - функции
│   │   │    ├── mixins.scss      - миксины
│   │   │    └── variables.scss   - переменные
│   │   ├── vendors               - папка для внешних скриптов и библиотек
│   │   │    └── libs.scss        - место где подключать все стили внешних библиотек
│   │   └── example.scss          - файл где собраны все стили для проекта/страницы
│   └── views                     - HTML компоненты сайта
│        ├── includes             - блоки
│        │    ├── common          - папка с переиспользуемыми блоками
│        │    └── front           - пример папки с блоками для одной страницы
│        └── example.html         - пример страницы
├── .babelrc                      - настройки Babel
├── .gitignore                    - файлы/папки игнорируемые Git
├── gulpfile.js                   - настройки Gulp
├── webpack.config.js             - настройки Webpack
├── package.json                  - список зависимостей
└── README.md                     - описание проекта
```
<!--
* Корень папки:
    * ```.eslintrc.json``` — настройки ESLint
    * ```.stylelintrc``` — настройки Stylelint
    * ```.stylelintignore``` – запрет на отслеживание файлов Stylelint'ом -->

## :keyboard: Команды
* ```npm run dev``` - запуск сервера для разработки проекта с HTML
* ```npm run watch``` - запуск вотчеров которые следят за изменениями без запуска сервера
* ```npm run build``` - собрать проект с оптимизацией без запуска сервера

## :scroll: gulp/config.js
* Настройки которые задаються для режимов сборки проекта
  * ```openServer``` - запуск локального сервера (используеться только при разработке с HTML)
  * ```isProdMode``` - если true то сборка происходит в прод режиме и файлы минимизируються, удаляются sourcemap
  * ```isDevMode``` - если true то сборка происходит в дев режиме
* Настройки которые задаються непосредствено для проекта
  * ```isUseJquery``` - глобальное использование Jquery. Автоматически импортиться в каждый файл
  * ```path{}``` - установка путей для обрабатываемых файлов. Имеет 3 пути:
    * ```src``` - путь к исходным файлам
    * ```watch``` - путь к файлам на которые настроены вотчеры (пересобрание gulp task, перезагрузка сервера)
    * ```build``` - путь куда будет положен обработан файл
    * ```cash``` - путь к файлам для которых будет создан hash и entrypoints.json (только js и css)
  * ```clean``` - папка которая очищается при первом запуске команды
  * ```server``` - папка на основе которой запускается сервер
<!-- ================= -->
## :bulb: Рекомендации по использованию
### Компонентный подход к разработке сайтов
* один БЭМ-блок состоит из одного HTML-файла, одного SCSS-файл и одного JS-файл (если у блока используется скрипт). Идеально если все три файла будут иметь одно название
    * HTML-файл блока лежит в  ```src/views/blocks/```
    * SCSS-файл блока лежит в ```src/scss/blocks/```
    * JS-файл блока лежит в ```src/js/blocks/```

### Страницы проекта
* страницы проекта находятся в папке ```src/views/```
    * главная страница: ```src/views/front-page.html```
    * Её стили: ```src/scss/front-page.scss```
    * главная страница: ```src/js/front-page.js```

### Стили
### Скрипты

### Изображения
* изображения находятся в папке ```src/img```
    * изображение для генерации фавиконок должно находиться в папке ```src/img/favicon``` и иметь размер не менее ```1024px x 1024px```
    * картинки которые используются как заглушки для верстки и в последствии можно удалить за ненадобностью лежат в  ```src/img/delete```.
    * изображения автоматически конвертируются в формат ```.webp```.
    * svg изображения которые находяться в папке  ```src/img/svg/sprite``` автоматически собираються в спрайт. Пример использования на сайте:
     ```html
     <svg><use xlink:href="{pathToSprite}#{nameFile}"></use></svg>
     ```
    где ```{pathToSprite}``` путь к спрайту, а  ```{nameFile}``` имя файла.

### Шрифты
* шрифты находятся в папке ```src/fonts/fontName```
    * используйте форматы ```.woff``` , ```.woff2``` и  ```.ttf```
    * шрифты подключаются в файл ```src/default/_fonts.scss``` с помощью миксина ```@mixin font-face()```
    * при билде попадают в одну папку ```assets/fonts/``` что бы уменьшить вложеность запроса
    * сконвертировать локальные шрифты можно с помощью [данного сервиса](https://transfonter.org/)

### Сторонние библиотеки
* все сторонние библиотеки устанавливаются в папку ```node_modules```
    * для их загрузки воспользуйтеcь командой ```npm i package_name```
    * для подключения JS-файлов библиотек импортируйте их в самом начале JS-файла страницы где эта библиотека будет использоваться(например ```src/js/front-page```):
    ```javascript
      import Swiper from 'swiper';;
    ```
    * для подключения стилевых файлов библиотек импортируйте их в файл ```src/scss/vendors/_libs.scss```
    * JS-файлы и стилевые файлы библиотек самостоятельно изменять нельзя
:warning: если нужной библиотеки нету положите ее в ```src/helpers/libs```
* подключить скомпилированные js-файлы на необходимых страницах

## :hash: CSS-сетка smart-grid
В сборщик включена CSS-сетка [smart-grid](https://github.com/dmitry-lavrik/smart-grid) от [Дмитрия Лаврика](https://dmitrylavrik.ru/). Она позволяет избавиться от
лишних классов в разметке за счёт использования примесей в SCSS и ускоряет адаптивную вёрстку. Конфигурация уже настроена в соответствии с сеткой [Bootstrap](https://getbootstrap.com/). Инструкция по использованию [здесь](https://grid4web.ru/basics).
