# Cat Energy (learning project)

## Клонирование репозитория

    git@github.com:hellsgor/cat-energy.git

## Версионность

- node js - v.18.7.0
- npm - 8.15.0

## Работа с npm

- установка пакетов - `npm i`;
- запуск dev-сервера - `npm start`;
- сборка билда dev - `npm run dev`;
- сборка билда prod - `npm run build`.

## Файловая структура

- src/
  - assets/
    - favicon/ - фавиконки;
    - fonts/ - шрифты;
    - icons/ - иконки;
    - image/ - изображения;
    - json/ - для json-файлов;
    - styles/ - основные файлы стилей;
  - components/ - компоненты;
    - common/ - компоненты обязательные для всех страниц;
  - layouts/ - шаблоны страниц;
  - libs/ - для хранения сторонних библиотек;
  - pages/ - страницы;
    - _partials/ - части страниц, которые не являются компонентами ввиду отсутствия необходимости в их переиспользовании;
    - main/ - файлы main.html;
    - ui-kit/ - файлы uiKit.html
  - ui-kit/ - микро-компоненты (кнопки, чек-боксы, инпуты и пр.);
  - utils/ - сервисы используемые в проекте вынесены в отдельную папку, например, файл send-form.js или inputs-validation.js.

## Alias'ы

- Img - './src/assets/image/';
- Icons - './src/assets/icons/';
- Fonts - './src/assets/fonts/';
- Components - './src/components/';
- Layouts - './src/layouts/';
- UIKit - './src/ui-kit/';
- Styles - './src/assets/styles/';
- Libs - './src/libs/' (на момент публикации не используется);
- NodeModules - './node_modules/';
- Partials - './src/pages/\_partials/';
- Utils - './src/utils/';

## Использованные ресурсы

- сборка WebPack - https://github.com/hellsgor/myWebpackBuild;
