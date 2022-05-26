# 따라하면서 배우는 IT 온라인 샵 데이터 플랫폼


### 데이터 파이프라인 설계도
![platform_image](https://github.com/ddarahakit/data-platform/blob/master/images/platform_white.png)


## 플랫폼 설명

### HDFS - HA 구성
zookeeper 알아보자....


### 1. RBD - Logstash - Elasticsearch

RDB에서 상품 데이터를 역색인 
사용자의 이벤트 로그를 저장
웹 서버의 로그를 저장

### 2. django - Kafka - Logstash - Elasticsearch

사용자의 이벤트 로그를 카프카를 통해서 전달

### 3. django - Kafka - ConsumerApp - Hadoop

사용자의 이벤트 로그를 카프카를 통해서 전달

### 4. Hadoop - Spark - Elasticsearch
