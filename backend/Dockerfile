FROM python:3.10-alpine
WORKDIR /backend
COPY requirements requirements
RUN pip3 install -r requirements
COPY . .
ENTRYPOINT ["python3"] 
CMD ["manage.py", "runserver", "0.0.0.0:8000"]