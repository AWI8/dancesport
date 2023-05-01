# DSAM - [DanceSport.AM](https://dancesport.am/)
Full-stack web app:
> [Клиент - NextJS 13](https://github.com/ChehST/dancesport/tree/main/front) - графическая часть \
[Сервер - Django Rest Framework](https://github.com/ChehST/dancesport/tree/main/backend) - обработка вводных данных \
**прочие утилиты для работы приложения** - gunicorn, psql, nginx, postcss, tailwind, docker, psycopg2, axios, cors, recaptcha@v3, GoogleAnalitics, certbot


# Идея проекта -
Популизация танцевального спорта в Армении и привлечение к занятию танцами

## Реализовано в этом релизе
* Графический интерфейс
> Простая и интуитивная навигация по сайту \
Две страницы - главная и отдельно для заведения заявки \
на главной странице перед footer также есть компонент формы
* Форма обратной связи
>   * Компонент формы асснхронно отправляет данные на drf API вместе с  необходимыми заголовкаи (CORS)\
>   * Прежде всего проверяется валидность ReCaptcha, а потом доступ к записи в БД

* DRF
> * Django rest framework - по API создает объекты заявок Feedback если все проверки перед запросом пройдены (ReCaptcha, доступ к бд) \
> * CORS-headers для "дружбы" запросов между контейнерами docker (nextjs_client + drf) \
> * При успешном добавлении Feedback.object отправляется уведомление в телеграм бота

