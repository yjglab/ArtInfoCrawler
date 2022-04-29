# ArtWork Info Crawler

졸업프로젝트 제작을 위한 전시정보 크롤러

### python

[UK. United Kingdom]

- uk_british.py : 대영 박물관
- uk_london_natl.py : 런던 내셔널 갤러리
- uk_victoriaAlbert.py : 빅토리아 알베르트 박물관

[FR. French]

- fr_pompidou.py : 조르주 퐁피두 센터
- fr_orsay.py : 오르세 미술관
- fr_lodin.py : 로댕 미술관

[US. United States]

- us_cincinnati.py : 미국 신시내티 미술관

[AT. Austria]

- at_wien.py : 비엔나 박물관

[ES. Spain]

- es_prado.py : 프라도 미술관

### JavaScript

- index.js : 라우팅 관리
- makeInfo.js : 장소별 정보 객체 생성
- makeAllPlaceInfo.js : 컨트롤러에 전달할 전체 정보 객체 수집 및 생성
- globalController.js : JS자식 프로세스 스폰 및 템플릿에 정보 객체 전달

### 기본 동작

- infoCrawler를 통해 원하는 url과 원하는 정보의 selector만 넣으면 selenium으로 데이터를 모아와 JavaScript에서 텍스트 가공 후 템플릿에 자동으로 출력한다.
  해당 앱은 프로젝트 제작 시 DOM에서 실시간 정보전달 매개체로써 사용될 예정.

### 로그

- infoCrawler 동작 함수, 정보 객체 제작 함수 코드 리팩토링 (22.04.29)

### 사용

1. 전시정보를 가져올 python 파일 생성 후 파일에 필요한 정보들의 selector 저장
2. makeInfo.js에 객체와 파일 정보 입력하여 정보 객체 생성
3. makeAllPlaceInfo.js에 컨트롤러에 전달할 정보 객체명 입력
4. 퍼그 템플릿에서 데이터 전달받아 출력할 태그 추가 (리팩토링 예정)
5. Main 페이지에서 출력 확인

### 기타 기록

- Selenium은 페이지 이동 시 초기 데이터가 모두 초기화됨.

### DEV 지점

- makeAllPlaceInfo.js
- makeInfo.js
