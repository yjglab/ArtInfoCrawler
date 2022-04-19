# ArtWork Info Crawler

졸업프로젝트 제작을 위한 예술관 전시정보 크롤러

[python]

- british.py : 대영박물관 전시정보
- louvre.py : 루브르박물관 전시정보
- pompidou.py : 조르주 퐁피두 센터 전시정보

[js]

- makeMsmInfo.js : 박물관 전시정보 객체 생성

[기본 동작]

- infoCrawler를 통해 원하는 url과 원하는 정보의 selector만 넣으면 selenium으로 데이터를 모아와 JavaScript에서 텍스트 가공 후 템플릿에 자동으로 출력한다.

해당 앱은 프로젝트 제작 시 DOM에서 실시간 정보전달 매개체로써 사용될 예정.

[로그]

- Pompidou museum 크롤링 관련
  동적 페이지라 스크롤클릭 해주는 과정에서 요소를 기다려줘야 해서 1) WebDriverWait()사용했으나
  받아오지 못하였음. 2) time.sleep()을 사용했으나 사용 후 초기 리스트의 내용이 사라지는 문제가 있음(원인을 모르겠음)

[사용]

[bs4 관련]

- 출력물 한글깨짐 from_encoding='cp949' 사용
- 정적 페이지 : bs4, 동적 페이지 : selenium
- chrome driver
- PhantomJS webdriver
