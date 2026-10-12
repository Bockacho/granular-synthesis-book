# Гранулярный синтез: учебник для электронных музыкантов

[![Читать онлайн](https://img.shields.io/badge/читать-онлайн-e8832a?style=for-the-badge)](https://bockacho.github.io/granular-synthesis-book/)
[![Сборка сайта](https://github.com/Bockacho/granular-synthesis-book/actions/workflows/deploy.yml/badge.svg)](https://github.com/Bockacho/granular-synthesis-book/actions/workflows/deploy.yml)

![Один звук: сплошной, нарезанный на куски и рассыпанный облаком зёрен](docs/images/1-1.png)

Учебник по гранулярному синтезу: от первого зерна до игры вживую. Основной текст написан так, что его поймёт школьник лет двенадцати, а врезки «Под капотом» дают физику и формулы для тех, кто хочет глубже. Разобраны три инструмента: Xfer Serum 2, Ableton Granulator III и Arturia Pigments.

**📖 Читать удобнее на сайте: [bockacho.github.io/granular-synthesis-book](https://bockacho.github.io/granular-synthesis-book/)** — там меню глав, поиск, тёмная тема и формулы.

Книга некоммерческая. Названия программ и интерфейсы принадлежат их правообладателям.

## Содержание

- [Как читать эту книгу](docs/kak-chitat.md)
- [Часть 1. Что такое звуковое зерно](docs/chast-1-zerno/index.md)
  - [Глава 1. Звук можно разрезать](docs/chast-1-zerno/01-zvuk-mozhno-razrezat.md)
  - [Глава 2. Анатомия зерна и облака](docs/chast-1-zerno/02-anatomiya-zerna.md)
  - [Глава 3. Откуда это взялось](docs/chast-1-zerno/03-istoriya.md)
- [Часть 2. Параметры вглубь](docs/chast-2-parametry/index.md)
  - [Глава 4. Источник и позиция](docs/chast-2-parametry/04-istochnik-i-poziciya.md)
  - [Глава 5. Размер зерна и огибающая](docs/chast-2-parametry/05-razmer-i-ogibayushchaya.md)
  - [Глава 6. Плотность и синхронность](docs/chast-2-parametry/06-plotnost-i-sinkhronnost.md)
  - [Глава 7. Высота, направление и разброс высоты](docs/chast-2-parametry/07-vysota-i-napravlenie.md)
  - [Глава 8. Пространство, случайность и голоса](docs/chast-2-parametry/08-prostranstvo-i-golosa.md)
  - [Глава 9. Модуляция: звук, который живёт сам](docs/chast-2-parametry/09-modulyaciya.md)
- [Часть 3. Три инструмента](docs/chast-3-instrumenty/index.md)
  - [Глава 10. Xfer Serum 2](docs/chast-3-instrumenty/10-serum-2.md)
  - [Глава 11. Ableton Granulator III](docs/chast-3-instrumenty/11-granulator-iii.md)
  - [Глава 12. Arturia Pigments](docs/chast-3-instrumenty/12-pigments.md)
- [Часть 4. Бесконечность на практике](docs/chast-4-praktika/index.md)
  - [Глава 13. Карта звука и двадцать инструментов из одной ложки](docs/chast-4-praktika/13-karta-zvuka.md)
  - [Глава 14. Рецепты по источнику](docs/chast-4-praktika/14-recepty-po-istochniku.md)
  - [Глава 15. Рецепты по задаче](docs/chast-4-praktika/15-recepty-po-zadache.md)
  - [Глава 16. Гранулярность вживую](docs/chast-4-praktika/16-vzhivuyu.md)
  - [Глава 17. Кто так делает](docs/chast-4-praktika/17-kto-tak-delaet.md)
- [Часть 5. Дальше сам](docs/chast-5-dalshe-sam/index.md)
  - [Глава 18. Типичные ошибки](docs/chast-5-dalshe-sam/18-oshibki.md)
  - [Глава 19. Задания](docs/chast-5-dalshe-sam/19-zadaniya.md)
  - [Глава 20. Словарь](docs/chast-5-dalshe-sam/20-slovar.md)
  - [Глава 21. Бесплатные инструменты и что читать дальше](docs/chast-5-dalshe-sam/21-chto-dalshe.md)

## Нашли ошибку?

[Откройте issue](https://github.com/Bockacho/granular-synthesis-book/issues/new/choose) или нажмите на карандаш ✎ вверху любой страницы сайта, чтобы предложить правку.

## Как собрать сайт локально

```bash
pip install -r requirements.txt
mkdocs serve
```

Сайт откроется на http://127.0.0.1:8000. После пуша в `main` GitHub Actions сам пересобирает и публикует его.
