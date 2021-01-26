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
* используется транспайлер [Babel](https://babeljs.io/) для поддержки современного JavaScript (ES6) в браузерах
* используется [Webpack](https://webpack.js.org/) для сборки JavaScript-модулей
* используется компонентный подход
* используется CSS-сетка на основе Bootstrap для быстрой адаптивной вёрстки
* используется жёсткий кодгайд
* используется проверка кода на ошибки перед коммитом


## :hammer_and_wrench: Установка локально
* установите ```NodeJS```
* установите ```Gulp``` глобально: ```sudo npm install -g gulp``` или ```npm install -g gulp```
* перейдите в папку со сборкой
* скачайте необходимые зависимости: ```npm i```
* чтобы начать работу с локальным сервером и html, введите команду: ```npm run dev``` (режим разработки)
* чтобы начать работу в проекте с wordpress, введите команду: ```npm run watch``` (режим разработки)
* чтобы собрать проект, введите команду ```yarn run build``` (режим сборки)

Если вы всё сделали правильно, у вас должен открыться браузер с локальным сервером. Режим сборки предполагает оптимизацию проекта: сжатие изображений, минифицирование CSS и JS-файлов.

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
├── .gitignore                    - файлы/папки игнорируемые Git
├── gulpfile.js                   - конфиг для gulp
├── webpack.config.js             - конфиг для webpack
├── package.json                  - зависимости, скрипты и базовая информация
└── README.md                     - описание проекта
```

* Корень папки:
    * ```.eslintrc.json``` — настройки ESLint
    * ```.gitignore``` – запрет на отслеживание файлов Git'ом
    * ```.stylelintrc``` — настройки Stylelint
    * ```.stylelintignore``` – запрет на отслеживание файлов Stylelint'ом
    * ```gulpfile.babel.js``` — настройки Gulp
    * ```webpack.config.js``` — настройки Webpack
    * ```package.json``` — список зависимостей
* Папка ```src``` - используется во время разработки:
    * шрифты: ```src/fonts```
    * изображения: ```src/img```
    * JS-файлы: ```src/js```
    * SCSS-файлы: ```src/styles```
    * HTML-файлы: ```src/views```
* Папка ```assets``` - папка, из которой запускается локальный сервер для разработки (при запуске ```yarn run dev```)
* Папка ```gulp``` - папка с Gulp-тасками

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
  * ```path{``` - установка путей для обрабатываемых файлов. Имеет 3 пути:
    * ```src``` - путь к исходным файлам
    * ```watch``` - путь к файлам на которые настроены вотчеры (пересобрание gulp task, перезагрузка сервера)
    * ```build``` - путь куда будет положен обработан файл
  * ```clean``` - папка которая очищается при первом запуске команды
  * ```server``` - папка на основе которой запускается сервер
  * ```}```


## :bulb: Рекомендации по использованию
### Компонентный подход к разработке сайтов
* каждый БЭМ-блок имеет свою папку внутри ```src/blocks/modules```
* папка одного БЭМ-блока содержит в себе один HTML-файл, один SCSS-файл и один JS-файл (если у блока используется скрипт)
    * HTML-файл блока импортируется в файл ```src/views/index.html``` (или в необходимый файл страницы, откуда будет вызываться блок)
    * SCSS-файл блока импортируется в файл ```src/blocks/modules/_modules.scss```
    * JS-файл блока импортируется в ```src/js/import/modules.js```

Пример структуры папки с БЭМ-блоком:
```
blocks
├── modules
│   ├──header
│   │   ├── header.html
│   │   ├── header.js
│   │   ├── header.scss
```

Чтобы вручную не создавать соответствующие папку и файлы, достаточно в консоли прописать следующие команды:
* ```yarn run bem-m my-block``` - для создания БЭМ-блока в ```src/block/modules``` (для основных БЭМ-блоков), где ```my-block``` - имя БЭМ-блока;
* ```yarn run bem-с my-component``` - для создания компонента в ```src/blocks/components``` (для компонентов), где ```my-component``` - имя компонента

### Страницы проекта
* страницы проекта находятся в папке ```src/views/pages```
    * главная страница: ```src/views/index.html```

### Шрифты
* шрифты находятся в папке ```src/fonts```
    * используйте [форматы](https://caniuse.com/#search=woff) ```.woff``` и ```.woff2```
    * шрифты подключаются в файл ```src/styles/base/_fonts.scss```
    * сконвертировать локальные шрифты можно с помощью [данного сервиса](https://onlinefontconverter.com/)

### Изображения
* изображения находятся в папке ```src/img```
    * изображение для генерации фавиконок должно находиться в папке ```src/img/favicon``` и иметь размер не менее ```1024px x 1024px```
    * изображения автоматически конвертируются в формат ```.webp```. Подробная информация по использованию [тут](https://vk.com/@vk_it-webp).

### Сторонние библиотеки
* все сторонние библиотеки устанавливаются в папку ```node_modules```
    * для их загрузки воспользуйтеcь командой ```yarn add package_name```
    * для подключения JS-файлов библиотек импортируйте их в самом начале JS-файла БЭМ-блока (то есть тот БЭМ-блок, который использует скрипт), например:
    ```javascript
    import $ from "jquery";
    ```
    * для подключения стилевых файлов библиотек импортируйте их в файл ```src/styles/vendor/_libs.scss```
    * JS-файлы и стилевые файлы библиотек самостоятельно изменять нельзя

:warning: Если в вашем проекте используется несколько библиотек, которые необходимо подключать на нескольких страницах, во избежании ошибок нужно:
* по пути ```src/js/import``` создать папку ```pages```
* в папке ```pages``` создать js-файл для страницы, например, ```pageA.js```, и импортировать туда библиотеку, которая будет использоваться только на этой странице
    * аналогично проделать шаг для дополнительных страниц
* в файле ```webpack.config.js``` в точку входа добавить js-файлы страниц, пример:
```javascript
entry: {
    main: "./src/js/index.js",
    pageA: "./src/js/import/pages/pageA.js",
    pageB: "./src/js/import/pages/pageB.js"
}
```
* подключить скомпилированные js-файлы на необходимых страницах

## :hash: CSS-сетка smart-grid
В сборщик включена CSS-сетка [smart-grid](https://github.com/dmitry-lavrik/smart-grid) от [Дмитрия Лаврика](https://dmitrylavrik.ru/). Она позволяет избавиться от
лишних классов в разметке за счёт использования примесей в SCSS и ускоряет адаптивную вёрстку. Конфигурация уже настроена в соответствии с сеткой [Bootstrap](https://getbootstrap.com/). Инструкция по использованию [здесь](https://grid4web.ru/basics).
