FROM ddarahakit/ddarahakitshop-main:0.1
WORKDIR /apps
COPY . /apps/
RUN echo "Acquire::Check-Valid-Until \"false\";\nAcquire::Check-Date \"false\";" | cat > /etc/apt/apt.conf.d/10no--check-valid-until
RUN apt-get -y update && apt-get -y install gcc libmariadb-dev
RUN pip install -r requirements.txt
EXPOSE 8000
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "--workers", "3", "config.wsgi:application"]