# 원티드 프리온보딩 프론트엔드 인턴십 1주차 과제
> 원티드 프리온보딩 프론트엔드 5팀입니다.<br>
원티드 프리온보딩 사전과제로 만든 로그인/회원가입 기능이 있는 간략한 Todo List를 리팩토링한 레포지토리입니다.<br>
해당 프로젝트에서는 원티드에서 제공한 API를 사용하였습니다.

## [🔗 배포 URL](https://wanted-pre-onboarding-team5.github.io/wanted-pre-onboarding-frontend-week1/)
완성한 프로젝트를 github pages를 활용하여 배포하였습니다.

<br>

## ⏯️ 프로젝트 실행

> ❗️ 실행 시 .env 파일 생성 후 환경변수를 설정하지 않으면 정상적으로 동작하지 않을 수 있습니다.

```
git clone URL 

cd project wanted-pre-onboarding-frontend-week1

.env 생성 & REACT_APP_API_URL={API_URL}

npm install

npm start
```

<br>

## 📆 진행 기간
**2023. 02. 21 ~ 2023. 02. 24**
<br>
<br>

## 👤 참여 멤버
|   강승훈   |   김은우   |   박준수   |   박한나   |   석창환   |   이자윤   |   조현오   |
|:----------:|:----------:|:----------:|:----------:|:----------:|:----------:|:----------:|
|[@seunghoonKang](https://github.com/seunghoonKang)|[@eunoo1995](https://github.com/eunoo1995)|[@junsu1220](https://github.com/junsu1220)|[@hannaax](https://github.com/hannaax)|[@Seok-CH](https://github.com/Seok-CH)|[@jaypedia](https://github.com/jaypedia)|[@letsjo](https://github.com/letsjo)|
|<img src="https://avatars.githubusercontent.com/seunghoonKang" width="100">|<img src="https://avatars.githubusercontent.com/eunoo1995" width="100">|<img src="https://avatars.githubusercontent.com/junsu1220" width="100">|<img src="https://avatars.githubusercontent.com/hannaax" width="100">|<img src="https://avatars.githubusercontent.com/Seok-CH" width="100">|<img src="https://avatars.githubusercontent.com/jaypedia" width="100">|<img src="https://avatars.githubusercontent.com/letsjo" width="100">|
<br>

## 🔥 진행 방식

### 🔥 Discord 채널을 활용한 주기적인 회의 진행
- 주기적인 회의를 통해 서로의 의견을 나누고, 다음 할 일에 대한 계획을 수립하였습니다.

### 🔥 Notion을 활용한 관리
- 진행한 프로젝트의 문서화를 위해 notion을 활용하여 모든 구성원이 의견을 남기고, 진행 과정을 정리하였습니다.

### 🔥 [Issue 생성](https://github.com/wanted-pre-onboarding-team5/wanted-pre-onboarding-frontend-week1/issues)
- 프로젝트 개발의 요구사항을 분석하여 큰 단락으로 나누어 issue를 생성하였습니다.

### 🔥 [Pull requests](https://github.com/wanted-pre-onboarding-team5/wanted-pre-onboarding-frontend-week1)
- 로그인/회원가입 구현, TodoList(create/read), TodoList(update/delete), refactoring 네 번의 PR과 코드 리뷰를 진행하였습니다.


<br>

## 🤙 팀 컨벤션

<details>
<summary><h3>💬 커밋 컨벤션</h3></summary>
<div markdown="1">

#### 💬 Commit Type and Description
| Type | Description |
| --- | --- |
| Feat | 새로운 기능 추가 |
| Design | CSS 등 UI 디자인 변경 |
| Refactor | 코드 리팩토링 |
| Fix | 버그 수정 |
| Docs | 문서 작업, 수정 |
| Style | 코드 스타일 및 포맷 변경(코드 자체의 변경은 없는 경우, 함수/ 변수명 변경 포함) |
| Test | 테스트 코드 작성, 테스트 리팩토링(프로덕션 코드 변경 X) |
| Chore | 소스 코드를 건들지 않는 작업 - 빌드 테스트 업데이트, 패키지 매니저를 설정하는 경우 |
| Init | 초기화 |
| Build | 빌드 관련 파일 수정 |
| CI | CI 관련 설정 수정 |
| Rename | 파일 혹은 폴더명을 수정하거나 옮기는 작업만 수행 |
| Remove | 파일을 삭제하는 작업만 수행 |

#### 💬 Commit message & Description

```tsx
[#Issue Number] Type: commit title

Description 
```
 
</div>
</details>

<details>
<summary><h3>💬 eslint/prettier 설정</h3></summary>
<div markdown="1">
 
####  💬 .eslintrc.js
 
```
 module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'no-var': 'error', // var 금지
    'no-multiple-empty-lines': 'error', // 여러 줄 공백 금지
    'no-console': ['error', { allow: ['warn', 'error', 'info'] }], // console.log() 금지
    eqeqeq: 'error', // 일치 연산자 사용 필수
    'dot-notation': 'error', // 가능하다면 dot notation 사용
    'no-unused-vars': 'error', // 사용하지 않는 변수 금지
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
  },
};

```
 
####  💬 .prettierrc.js
 
```
module.exports = {
  bracketSpacing: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  printWidth: 100,
  endOfLine: 'auto',
  useTabs: false,
  semi: true,
  jsxSingleQuote: true,
  arrowParens: 'always',
};

```
 
</div>
</details>

<br>



## 🔧 사용 라이브러리

<div>
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">
  <img src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=React Router&logoColor=white">
  <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white"> 
  <img src="https://img.shields.io/badge/husky-5D4F85?style=for-the-badge&logo=husky&logoColor=white">
  <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=Prettier&logoColor=white"> 
  <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=ESLint&logoColor=white"> 
</div>

<br>

**React** : 요구사항의 필수 스택인 react를 사용하였습니다. <br>
**axios** : 서버와 비동기 통신을 위해 사용했습니다. <br>
**react-router-dom** : 직관적인 API로 SPA를 구축할 때 라우팅을 수월하게 할 수 있어 사용했습니다. <br>
**eslint** : 팀원간 코드 컨벤션을 통일하기 위해 사용했습니다. <br>
**prettier** : 팀원간 코드 포맷을 통일하기 위해 사용했습니다. <br>
**husky** : git hook의 사용을 강제하여 전원이 동일한 컨벤션을 유지하기 위해 사용했습니다.

<br>

## 📂 디렉토리 구조

```
📦src
 ┣ 📂apis
 ┃ ┣ 📜authApi.js
 ┃ ┗ 📜todoApi.js
 ┣ 📂components
 ┃ ┗ 📂TodoList
 ┃ ┃ ┣ 📂TodoItem
 ┃ ┃ ┃ ┣ 📜index.jsx
 ┃ ┃ ┃ ┗ 📜useTodoItem.jsx
 ┃ ┃ ┗ 📜index.jsx
 ┣ 📂constants
 ┃ ┣ 📜index.js
 ┃ ┣ 📜path.js
 ┃ ┗ 📜storage.js
 ┣ 📂hooks
 ┃ ┣ 📜useAuthForm.jsx
 ┃ ┣ 📜useInput.jsx
 ┃ ┗ 📜useMovePage.jsx
 ┣ 📂pages
 ┃ ┣ 📂Error
 ┃ ┃ ┗ 📜index.jsx
 ┃ ┣ 📂Root
 ┃ ┃ ┗ 📜index.jsx
 ┃ ┣ 📂SignIn
 ┃ ┃ ┗ 📜index.jsx
 ┃ ┣ 📂SignUp
 ┃ ┃ ┗ 📜index.jsx
 ┃ ┣ 📂Todo
 ┃ ┃ ┣ 📜index.jsx
 ┃ ┃ ┗ 📜useTodo.jsx
 ┃ ┗ 📜index.js
 ┣ 📂router
 ┃ ┣ 📂loaders
 ┃ ┃ ┣ 📜authLoader.js
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┣ 📜rootLoader.js
 ┃ ┃ ┗ 📜todoLoader.js
 ┃ ┗ 📜index.js
 ┣ 📂utils
 ┃ ┣ 📜index.js
 ┃ ┣ 📜storage.js
 ┃ ┗ 📜validator.js
 ┣ 📜.DS_Store
 ┣ 📜App.jsx
 ┗ 📜index.js
```
<br>

## 📄 Assignments

> 디자인은 필수사항이 아니므로 팀원 전체가 TODO LIST를 다시 구현하며 서로의 코드 리뷰를 중점으로 진행하였습니다.

### #1 로그인/회원가입 기능 구현
<details>
<summary><h4>요구사항 및 구현</h4></summary>
<div markdown="1">

- [x]  회원가입, 로그인 페이지에 이메일과 비밀번호의 유효성 검사기능 구현
- [x] 회원가입 페이지에서 버튼 클릭 시 회원가입을 진행하고 회원가입이 정상적으로 완료되었을 시 /signin 경로로 이동
- [x] 로그인 페이지에서 버튼 클릭 시, 로그인을 진행하고 로그인이 정상적으로 완료되었을 시 /todo 경로로 이동
- [x] 로그인 여부에 따른 리다이렉트 처리를 구현

#### 구현 GIF
 <img src="https://user-images.githubusercontent.com/95074093/221157788-57128534-5644-4316-a695-794d63a2aff2.gif" width="300"/>

</div>
</details>

### #2  Todo Create / Read

<details>
<summary><h4>요구사항 및 구현</h4></summary>
<div markdown="1">

- [x] /todo경로에 접속하면 투두 리스트의 목록 보이기
- [x] 목록에서는 TODO의 내용과 완료 여부가 표시
- [x] TODO의 완료 여부는 <input type="checkbox" />를 통해 표현
- [x] TODO는 li tag를 이용해 감싸기 
- [x] 리스트 페이지에 새로운 TODO를 입력할 수 있는 input과 추가 button 만들기

#### 구현 GIF
  <img src="https://user-images.githubusercontent.com/95074093/221158080-b3261967-6ec8-4452-b3fe-318b9bee0ab5.gif" width="300"/>
 
</div>
</details>

### #3  Todo Update / Delete

<details>
<summary><h4>요구사항 및 구현</h4></summary>
<div markdown="1">

 - [x] TODO의 체크박스를 통해 완료 여부를 수정할 수 있도록 구현
 - [x] TODO 우측에 수정버튼과 삭제 버튼 구현
 - [x] 투두 리스트의 삭제 기능을 구현
 - [x] 투두 리스트의 수정 기능을 구현
 
 #### 구현 GIF
  <img src="https://user-images.githubusercontent.com/95074093/221206396-b69e5a17-ae95-440c-b3fb-649045ed96d1.gif" width="300"/>

 </div>
</details>

### #4  Refactoring

<details>
<summary><h4>요구사항 및 구현</h4></summary>
<div markdown="1">

 - [x] PR의 코드 리뷰와 의견을 종합한 리팩토링 진행
 - [x] 로그인/회원가입 리팩토링
 - [x] TODO LIST 리팩토링
 - [x] 선정된 Best Practice 최종 리팩토링
 
 </div>
</details>



