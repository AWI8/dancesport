# чтобы запустить отдельно бэк ->

```
~ git clone "https://github.com/ChehST/dancesport/"
~ cd dsam/backend
```

потом нужно виртуальное окружение, активировать его и установить pip зависимости.

# ./backend это корень DRF приложения

``` (venv)
~ python -m venv venv
~ source venv/bin/activate
(venv) ~ pip3 install -r requirements
```
И важно! в настройках settings.py перед запуском вначале вставить импорт
```python
from django.core.management.utils import get_random_secret_key # добавляем импорт
...
# SECRET_KEY = os.environ.get('SECRT_KEY') # комментируем
SECRET_KEY = get_random_secret_key() # Либо без присвоения к переменной простовызватьфункцию первый раз вижу этот метод :)
```

мы все ещё в (venv)
```
(venv) ~ python manage.py runserver
```

127.0.0.1:8000/api_fdsam/ в корневом urls.py описано

