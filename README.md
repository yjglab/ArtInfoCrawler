# Museum / Gallery InfoCrawler

프로젝트 제작을 위한 전시정보 크롤러

### python

[UK. United Kingdom]

- uk_british.py : 대영 박물관
- uk_london_natl.py : 런던 내셔널 갤러리

[FR. French]

- fr_pompidou.py : 조르주 퐁피두 센터
- fr_orsay.py : 오르세 미술관
- fr_lodin.py : 로댕 미술관

[US. United States]

- us_cincinnati.py : 신시내티 미술관
- us_chicago.py : 시카고 미술관
- us_boston.py : 보스턴 미술관

[AT. Austria]

- at_wien.py : 비엔나 박물관
- at_arsElectronica.py : 아르스 일렉트로니카 미래 박물관
- at_belvedere.py : 벨베데레 뮤지엄

[ES. Spain]

- es_prado.py : 프라도 미술관
- es_malangaAutomovil.py : 말라가 자동차 박물관
- es_thyssen.py : 티센 보르네미사 박물관

[IT. Italy]

- it_uffizi.py : 우피치 박물관
- it_ducale.py : 두칼레 궁전
- it_napoli.py : 나폴리 고고학 박물관

[KR. Republic of Korea]
[JP. Japan]
[CN. China]
이집트,[체코],폴란드,중국,호주,터키,남아공,모로코,캐나다,브라질,그리스
[러시아],룩셈부르크,[스위스],몽골,덴마크,바티칸,이스라엘,인도,헝가리,홍콩

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

### DEV 지점

- makeInfo.js
