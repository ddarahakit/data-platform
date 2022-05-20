FROM python:3.9-slim

WORKDIR /apps
COPY . /apps/
RUN apt-get update && apt-get -y install gcc libmariadb-dev
RUN pip install -r requirements.txt
EXPOSE 8000
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "--workers", "3", "config.wsgi:application"]