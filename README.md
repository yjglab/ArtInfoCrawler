# MUG

세계 전시관 전시정보 제공 웹서비스

![logo-01](https://user-images.githubusercontent.com/70316567/193456858-265fad0e-cbf4-45f4-9402-ebf5332404dc.png)

### Version

- 0.0.0
  - Launched
- 0.0.1
  - 공통
    - 필터 박스 디자인, 배치 수정
    - 카드 내부 좌우 아이콘 배치 수정
  - PC
    - 카드 애니메이션 프레임 드랍 수정
  - Mobile
    - footer 디자인 수정
    - card inf0 floater 제거
    - 필터 박스 클릭시 옵션 클릭되는 버그 수정
- 0.0.2
  - PC
    - Introduction Page 사용자 스크롤 이벤트 추가

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
- 3860 box shadow + 텍스트 오류

### 디자이너 친구 조언

- filter 백 색상 블랙+투명
- 전시 내부 동그란 아이콘 사방 여백 동일하게
- 그라데이션 과함(모바일 기준 5 웹 8)
- 슬라이드 전체화면으로 하는게..?
- 섹션 넘어갈 때 여백 확실히(특히 모바일)
- 감각 익히기.. (apple.com, https://toss.im/, toss.com)
- 스크롤 글자들 애니메이션 참고(https://www.plus-ex.com/, https://www.plus-ex.com/about)
- filter blur 빼기+ 블랙으로.. 뉴모피즘X
- 모바일 인트로 로고 작게
- 폰트는 noto sans || pretendard (실무자들 주로 사용)
- 웹 pc버전은 good
