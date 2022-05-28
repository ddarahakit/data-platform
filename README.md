# 앤서블

### 0. 기본 구성요소

1. 제어 노드  
   제어 노드에서 관리 노드들을 관리합니다.

2. 매니지드 노드  
   앤서블로 관리되는 서버를 매니지드 노드라고 합니다.

3. 인벤토리  
   매니지드 노드 목록을 인벤토리라고 합니다. 인벤토리 파일은 호스트 파일이라고도 합니다.
   인벤토리는 각 매니지드 노드에 대한 IP 주소, 호스트 정보, 변수와 같은 정보를 지정할 수 있습니다.

4. 모듈  
   앤서블이 실행하는 코드 단위입니다.
   각 모듈은 데이터베이스 처리, 사용자 관리, 네트워크 장치 관리 등 다양한 용도로 사용됩니다.
   단일 모듈을 호출하거나 플레이북에서 여러 모듈을 호출 할 수도 있습니다.

5. 태스크  
   앤서블의 작업 단위입니다. 애드훅(ad-hoc)명령을 사용하여 단일 작업을 한 번 실행할 수 있습니다.

6. 플레이북  
   순서가 지정된 태스크 목록이 저장되어 지정된 작업을 해당 순서로 반복적으로 실행할 수 있습니다.
   플레이 북에는 변수와 작업이 포함될 수 있습니다. 플레이 북은 YAML로 작성됩니다.

### 01. 설치

> apt install ansible

### 02. 노드 host이름 설정

> 172.30.1.10 ansible  
> 172.30.1.101 namenode-active  
> 172.30.1.102 namenode-standby  
> 172.30.1.103 datanode1  
> 172.30.1.104 datanode2  
> 172.30.1.201 zookeeper1

### 03. ssh 설정

1. ansible 제어 노드
   > ssh-keygen  
   > ssh-copy-id [사용자]@[매니지드 노드들]

### 04. 각 노드 파이썬 설정

> ln -s python3.6 /usr/bin/python

### 05. 인벤토리 생성

> inventory/hosts.yaml

### 06. ansible로 ping테스트

> ansible all -i hosts.yaml -m ping

### 07. ansible로 hadoop 다운

> playbook/hadoop/hadoop-download.yaml  
>  ansible-playbook -i inventory/hosts.yaml playbook/hadoop/hadoop-download.yaml

### 08. ansible로 hadoop 다운

> playbook/zookeeper/zookeeper-download.yaml  
>  ansible-playbook -i inventory/hosts.yaml playbook/zookeeper/zookeeper-download.yaml

### 09. ansible로 hadoop 하둡 디렉토리 및 설정 파일 복사

> playbook/hadoop/hadoop-config.yaml  
>  ansible-playbook -i inventory/hosts.yaml playbook/hadoop/hadoop-config.yaml

### 10.
ansible로 해보기 전에 일단 설정해보고 확인
![platform_image](https://github.com/ddarahakit/ddarahakit-shop-ansible/blob/master/images/nn1.png)
![platform_image](https://github.com/ddarahakit/ddarahakit-shop-ansible/blob/master/images/nn2.png)



### 11.
### 12.
