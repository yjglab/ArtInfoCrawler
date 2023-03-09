# MUG 0.0.3

![DF_깃헙업로드용_19205](https://user-images.githubusercontent.com/70316567/224071275-bd290abd-9683-4598-9ed5-d6a7365376ae.jpg)

MUG(Museum Union Gallery)는 전시 정보를 한 페이지에서 쉽게 확인할 수 있는 인터랙티브 웹 서비스입니다.
[https://mug-lab.fly.dev](https://mug-lab.fly.dev "MUG")

<div> 
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white">
<img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=Express&logoColor=white">
<img src="https://img.shields.io/badge/Pug-A86454?style=for-the-badge&logo=Pug&logoColor=white">
<img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=Sass&logoColor=white">
<img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white">
<img src="https://img.shields.io/badge/Illustrator-FF9A00?style=for-the-badge&logo=AdobeIllustrator&logoColor=white">
</div>

<div >

</div>

## 서비스 소개 / 결과물 바로보기: [Main](https://mug-lab.fly.dev/main) / [Intro](https://mug-lab.fly.dev/)

이곳 저곳 찾아보지 말고 한 페이지에서 확인하자! [서비스 소개 자세히 - WIKI](https://github.com/yjglab/MuG/wiki/%EC%84%9C%EB%B9%84%EC%8A%A4-%EA%B8%B0%ED%9A%8D-%EB%B0%B0%EA%B2%BD%EA%B3%BC-%EA%B8%B0%EB%8A%A5-%EC%86%8C%EA%B0%9C)

- 전시명, 전시장, 전시국으로 구분되어 정보가 담긴 카드를 로드합니다.
- 카드에 마우스를 올리면 전시에 관한 간단한 정보를 마우스 커서에 올려줍니다.
- 카드를 클릭하면 전시의 상세 정보를 보여줍니다.
- 동적 애니메이션을 이용한 카드 필터링 기능을 제공합니다.

## 🛠 [사용된 기술과 선정 이유 - WIKI](https://github.com/yjglab/MuG/wiki/%EC%82%AC%EC%9A%A9%EB%90%9C-%EA%B8%B0%EC%88%A0%EA%B3%BC-%EC%84%A0%EC%A0%95-%EC%9D%B4%EC%9C%A0)

## 기본 동작

- infoCrawler를 통해 원하는 url과 원하는 정보의 selector만 넣고 selenium으로 데이터를 불러와 JavaScript에서 텍스트 가공을 수행합니다.
- MongoDB에 저장한 후 저장된 데이터를 가져와 템플릿으로 전송합니다.

## 사용 방법

1. 전시정보를 가져올 python 파일 생성 후 파일에 필요한 정보들의 selector 저장
2. makeInfo.js에 객체와 파일 정보 입력하여 정보 객체 생성 및 DB저장
3. DB에서 데이터 불러와서 템플릿에 출력
4. 페이지에서 출력 확인

## 📃 페이지

- / `인트로-서비스 소개`
- /main `메인 정보 페이지`

| [인트로-서비스 소개](https://github.com/yjglab/MuG/wiki/%EC%84%9C%EB%B9%84%EC%8A%A4-%EA%B8%B0%ED%9A%8D-%EB%B0%B0%EA%B2%BD%EA%B3%BC-%EA%B8%B0%EB%8A%A5-%EC%86%8C%EA%B0%9C#%EC%9D%B8%ED%8A%B8%EB%A1%9C) | [메인 화면](https://github.com/yjglab/MuG/wiki/%EC%84%9C%EB%B9%84%EC%8A%A4-%EA%B8%B0%ED%9A%8D-%EB%B0%B0%EA%B2%BD%EA%B3%BC-%EA%B8%B0%EB%8A%A5-%EC%86%8C%EA%B0%9C#%EB%A9%94%EC%9D%B8-%ED%99%94%EB%A9%B4) |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                              <img width="1043" alt="image" src="https://user-images.githubusercontent.com/70316567/224076728-d8891fb3-339d-4c55-87bb-cf661de1081d.png">                               |                               <img width="1043" alt="image" src="https://user-images.githubusercontent.com/70316567/224076735-bdd7dba9-267c-4681-b2eb-23bf867afd5a.png">                               |

## 📈 서비스 구조와 흐름

## 🗓 Version Release

[MUG 0.0.3](https://github.com/yjglab/MuG "MUG") / Latest
