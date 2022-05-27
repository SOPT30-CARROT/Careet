## 팀원 소개

<div align="center">
	<table>
	<th>정세연 @n0eyes</th>
  <th>서혜은 @henization</th>
	<th>최유진 @choichoijin</th>
	<tr>
		<td><img src="https://github.com/n0eyes.png"></td>
		<td><img src="https://github.com/henization.png"></td>
		<td><img src="https://github.com/choichoijin.png"></td>
	</tr>
	<tr>
	<td>
		<ul>
		<li>마이페이지</li>
		</ul>
	</td>
	<td>
	<ul>
		<li>메인페이지</li>
		<li>요즘사람들이 좋아하는 공간의 비밀, 배너, 이제는 모르시면 안됩니다, 새로나온콘텐츠</li>
	</ul>
	</td>
	<td>
		<ul>
		<li>메인페이지</li>
		<li>지금 꼭 알아야할 트렌드, 관심 키워드 콘텐츠 찾기, 요즘대세!인기콘텐츠, TOP버튼</li>
		</ul>
	</tr>
	</table>
</div>

## 기술 스택

<div align="center">
  <img src="https://img.shields.io/badge/Javascript-F2CE04?style=flat-square&logo=javascript&logoColor=white"/><br>
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/>
  <img src="https://img.shields.io/badge/styled--components-DB7093?style=flat-square&logo=styled-components&logoColor=white"/>
  <img src="https://img.shields.io/badge/github action-2671E5?style=flat-square&logo=GitHub%20Actions&logoColor=white"/>

</div>

## 코드 컨벤션

### 컴포넌트 선언

최상위는 function ~
아래 함수는 const ~

```jsx
function Component() {
  const handleaaaa = () => {};
}
```

### 핸들러 함수

기능 기준으로 쓰되 (`modalOpen` 등),
정말 이 함수가 하는 일이 특정 이벤트 전용이라면 `handle[이벤트당한요소][이벤트]` (`handleInputChange` 등)

### 컴포넌트 이름

1. `buttonSearch`
2. `searchButton` ✅
3. `btnSearch`
4. `searchBtn`

### style 붙인 거

스타일만을 위해서 만든 컴포넌트는 styled를 붙이자

1. ❌ `StyledDiv`
2. `StyledTitle`
3. `StyledWrapper`
4. `StyledImage`

최상위 컴포넌트는 `StyledRoot`로 고정

### export , import

export한 친구의 이름 바꿔서 쓰지 말기!
안 그래도 되도록 변수/함수 이름은 자세하게 쓰기

## commit message 컨벤션

- [gitmoji](https://gitmoji.dev/) 쓸람쓸
- 안쓰면 커밋 컨벤션 대표적인거만 지키자~

## 브랜치 전략 (ex. git flow)

- github flow 사용
- 작업 전에 이슈 생성
- 이슈 번호로 브랜치를 파서 작업
- 작업이 다 끝나면 피쳐 브랜치에서 main 브랜치로 Pull Request 작성
- 같은 팀원 2인의 Approve를 받아야 main 브랜치에 머지 가능

## 기타
- 단위 : rem, em 사용

## 폴더 구조

```
.
├── mock-data 🗂 목 데이터 저장
├── package.json 📦 설치된 패키지를 관리하는 파일
└── src
    ├── App.jsx ✡️ 앱의 라우팅과 글로벌 스타일 지정
    ├── index.js
    ├── component
    │   ├── common 🗂 공통으로 쓰일 컴포넌트 저장
    │   │   ├── Footer
    │   │   ├── Header
    │   │   └── assets
    │   ├── home 🗂 main 페이지에 쓰일 컴포넌트 저장
    │   └── myPage 🗂 question 페이지에 쓰일 컴포넌트 저장
    ├── pages 🗂 라우팅 시 보여질 페이지 컴포넌트 저장
    │   ├── home
    │   └── myPage
    │       └── MyPage
    └── styles
        ├── GlobalStyle.js
        └── color.js
```
