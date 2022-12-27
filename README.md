# Cat Energy (pet-project)

---

[Клонирование репозитория](#repo-clone)

[Версионность](#versions)

[Работа с npm](#npmcommands)

[Файловая структура](#Файловая структура)

---

## <a name='repo-clone'></a>Клонирование репозитория

    git@github.com:hellsgor/cat-energy.git

## <a name='versions'>Версионность</a>

- node js - v.18.7.0
- npm - 8.15.0

## <a name='npmcommands'>Работа с npm</a>

- `npm i` - установка пакетов;
- `npm start` - запуск dev-сервера;
- `npm run dev` - сборка билда dev;
- `npm run build` - сборка билда prod;
- `npm run deploy` - сборка билда prod и публикация в gitHub Pages.

## <a name='file-structure'></a>Файловая структура

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
  - libs/ - библиотеки;
  - pages/ - страницы;
    - _partials/ - части страниц, которые не являются компонентами ввиду отсутствия необходимости в их переиспользовании;
    - catalog - файлы страницы "подбор программы";
    - main/ - файлы главной страницы;
    - program-selection - файлы страницы "подбор программы";
    - ui-kit/ - файлы страницы uiKit;
  - ui-kit/ - микро-компоненты (кнопки, чек-боксы, инпуты и пр.);
  - utils/ - части js-кода используемые в проекте вынесены в отдельную папку, например, отправка или валидация полей формы и пр.

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
- Mixins (pug) - './src/mixins/';
- JSON - './src/assets/json'.

## Страницы

- главная страница - https://hellsgor.github.io/cat-energy/;
- каталог продукции - https://hellsgor.github.io/cat-energy/catalog.html;
- подбор программы - https://hellsgor.github.io/cat-energy/programSelection.html;
- UI-kit - https://hellsgor.github.io/cat-energy/uiKit.html;

## Использованные ресурсы

- сборка WebPack - https://github.com/hellsgor/myWebpackBuild. Доработана под проект;
- макет - https://www.figma.com/file/rYCcZmhY8aIUGQXRV9yNCA/%D0%9A%D1%8D%D1%82-%D1%8D%D0%BD%D0%B5%D1%80%D0%B4%D0%B6%D0%B8-%2B?t=uHUFcRc25TQkzBUX-1. С изменениями - не все экранные формы, элементы, микроэлементы присуствуют в макете.
