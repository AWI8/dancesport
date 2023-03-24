FROM python:3.10-alpine
WORKDIR /backend
COPY requirements requirements
RUN apk update \
    && apk add postgresql-dev gcc python3-dev musl-dev
RUN pip3 install -r requirements
COPY . .
ENTRYPOINT ["python3"] 
CMD ["manage.py", "runserver", "0.0.0.0:8000"]