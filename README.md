# Museum / Gallery InfoCrawler

세계 박물관과 미술관 전시정보 크롤링 출력 프로그램

### python

### JavaScript

- index.js : 서버 관리
- db.js : 데이터베이스 연결
- makeInfo.js : 장소별 정보 객체 생성 및 데이터베이스에 저장
- globalController.js : JS자식 프로세스 스폰 및 템플릿에 정보 객체 전달

### 기본 동작

- infoCrawler를 통해 원하는 url과 원하는 정보의 selector만 넣으면 selenium으로 데이터를 모아와 JavaScript에서 텍스트 가공 후 MongoDB에 저장한 후 저장된 데이터를 가져와 템플릿에 자동으로 출력한다.

### 중심 로그

- infoCrawler 동작 함수, 정보 객체 제작 함수 코드 리팩토링 (22.04.29)
- 분산화 작업 위한 MongoDB 데이터베이스 연결 (22.05.14)
- 전시 개별 데이터 배열->개별 객체로 분리 / 각 페이지 라우트 설정 (22.06.06)

### 사용

1. 전시정보를 가져올 python 파일 생성 후 파일에 필요한 정보들의 selector 저장
2. makeInfo.js에 객체와 파일 정보 입력하여 정보 객체 생성 및 DB저장
3. DB에서 데이터 불러와서 템플릿에 출력
4. Main 페이지에서 출력 확인

### 기타 기록

- Selenium은 페이지 이동 시 초기 데이터가 모두 초기화됨.
- robots.txt 확인하기.
- belvedere title, date 못가져오는 문제있음.
- stale element reference: element is not attached to the page document -> 가상 브라우저 속도차 문제. sleep으로 해결.
- rodin: 전시없음.
- belvedere: 타이틀, 데이트 정보 못가져옴 (원인모름)

### DEV 지점

- makeInfo.js

### 라우트

<!-- 조회수 -->

E' stata la mano di Dio
Петр Великий. Усы властелина
Picasso Ingres: Face to Face
나너의 기억

intro 사진 크기일치
nav 새로
하강버튼 새로
디테일진입버튼
scss 수정
배경색
