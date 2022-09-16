# MUG

세계 전시관 전시정보 제공 웹서비스

### 기본 동작

- infoCrawler를 통해 원하는 url과 원하는 정보의 selector만 넣고 selenium으로 데이터를 불러와 JavaScript에서 텍스트 가공을 수행합니다.
- MongoDB에 저장한 후 저장된 데이터를 가져와 템플릿에 자동으로 출력합니다.

### 중심 로그

- infoCrawler 동작 함수, 정보 객체 제작 함수 코드 리팩토링 (22.04.29)
- 분산화 작업용 MongoDB 연결 (22.05.14)
- 전시 개별 데이터 배열->개별 객체로 분리 / 각 페이지 라우트 설정 (22.06.06)

### 사용

1. 전시정보를 가져올 python 파일 생성 후 파일에 필요한 정보들의 selector 저장
2. makeInfo.js에 객체와 파일 정보 입력하여 정보 객체 생성 및 DB저장
3. DB에서 데이터 불러와서 템플릿에 출력
4. 페이지에서 출력 확인

### 기타 기록

- Selenium은 페이지 이동 시 초기 데이터가 모두 초기화됨.
- robots.txt 확인하기.
- stale element reference: element is not attached to the page document -> 가상 브라우저 속도차 문제. sleep으로 해결.

### DEV 지점

- makeInfo.js

### 라우트

<!-- 조회수 -->
