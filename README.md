# MUG

세계 전시관 전시정보 제공 웹서비스
![image](https://user-images.githubusercontent.com/70316567/193456602-bb92fe44-5067-4a13-b8da-3c075efeba42.png)

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

- Introduction Page: /
- Main Page: /main

<!-- 조회수 -->

### 사용자 경험 반영사항

- filter 버튼 상시 플로트 되어있으면 좋을 것 같음. (적용)
- 여러 이름으로 불리는 국가들 (고려 중)
- 전시 닫기 버튼이 잘 안눌림 (적용)
- 인트로 페이지 스크롤 게이지 표시 (적용 중)
- 배너 클릭시 이동 확인 이벤트 (적용)
