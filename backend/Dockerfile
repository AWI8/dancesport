FROM python:3.10-alpine

ENV HOME=/usr/src
ENV APP_HOME=/usr/src/backend
RUN mkdir $APP_HOME
RUN mkdir $APP_HOME/staticfiles
WORKDIR $APP_HOME

# install psycopg2 dependencies
RUN apk update \
    && apk add postgresql-dev gcc python3-dev musl-dev

# install dependencies
RUN pip install --upgrade pip
COPY ./requirements .
RUN pip install -r requirements

# copy entrypoint.sh
COPY ./entrypoint.sh .
RUN sed -i 's/\r$//g' /usr/src/backend/entrypoint.sh
RUN chmod +x /usr/src/backend/entrypoint.sh

# copy project
COPY . .

# run entrypoint.sh
ENTRYPOINT ["/usr/src/backend/entrypoint.sh"]
