# Клиент графического интерфейса
nextjs 13 с эксперементальной папкой **'app'**


Графическая часть **NextJS** отвечает за отображение страницы, то есть вся графика и ее логика работает независимо от сервера бизнес логики

## Запуск фронта
 После того как клонировали репозиторий на машину и перешли внутрь него, мы делаем ->
 ```
 @user ~/dancesport cd front
 @user ~/dancesport/front _
 ```

 Далее мы можем запустить следующим способом

 **yarn:**
 ```
 @user ~/dancesport/front yarn install --frozen-lockfile
 @user ~/dancesport/front yarn run dev

 ```
 **docker**


 ```
 @user ~/dancesport/front docker build . -t front
 @user ~/dancesport/front docker run -p 3000:3000 front exec yarn run dev
 ```
 
 Образ может называться иначе что-то типа front:latest надеюсь на вашу осведомленность в docker и внимательность