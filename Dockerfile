FROM python:3.9

WORKDIR /apps
COPY requirements.txt /apps/
RUN pip install -r requirements.txt
COPY . /apps/
EXPOSE 8000
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "--workers", "3", "config.wsgi:application"]