# ArtWork Info Crawler

졸업프로젝트 제작을 위한 예술관 전시정보 크롤러

프랑스: 오르세, 퐁피두 센터, 루브르, 로댕
영국 : 영국, 내셔널 갤러리, 자연사, 빅토리아 앨버트,
오스트리아 : 빈 미술사, 벨베데레 궁전, 빈 자연사, osterreichische galerie belvedere
스페인 : 프라도, 빌바오 구겐하임, 티센 보르네미사, 피카소

[python]

- british.py : 대영 박물관 전시정보
- louvre.py : 루브르 박물관 전시정보
- pompidou.py : 조르주 퐁피두 센터 전시정보
- london_natl.py : 런던 네셔널 갤러리 전시정보
- wien.py : 비엔나 박물관 전시정보
- prado.py : 프라도 미술관 전시정보

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

1. 전시정보를 가져올 python 파일 생성 후 파일에 URL, 가져올 정보의 selector 저장
2. makeMsmInfo.js에 객체와 파일 정보 입력
3. globalController.js 에서 Main 퍼그 템플릿에 전달할 객체 저장
4. 퍼그 템플릿에서 데이터 전달받아 출력할 태그 추가
5. Main 페이지에서 출력 확인

[bs4 관련]

- 출력물 한글깨짐 from_encoding='cp949' 사용
- 정적 페이지 : bs4, 동적 페이지 : selenium
- chrome driver
- PhantomJS webdriver
