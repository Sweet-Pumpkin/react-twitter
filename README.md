## SNS ZAEZAL
> - React & Firebase 사용해 SNS 만들기

<div align="center">
  <img src="./img/01zaezal.gif" alt="title" />
</div>

## Version

![Generic badge](https://img.shields.io/badge/react-18.1.0-blue.svg)
![Generic badge](https://img.shields.io/badge/react_router_dom-6.3.0-blue.svg)
![Generic badge](https://img.shields.io/badge/firebase-9.8.2-blue.svg)
![Generic badge](https://img.shields.io/badge/styled_components-5.3.5-blue.svg)
![Generic badge](https://img.shields.io/badge/react_loading-2.0.3-blue.svg)
![Generic badge](https://img.shields.io/badge/uuid-8.3.2-blue.svg)

## Develop

### Auth

<div align="center">
  <img src="./img/02zaezal_login.gif" alt="title" />
</div>

  - `getAuth()`, `createUserWithEmailAndPassword()` 사용해서 회원가입하기 
  - `onAuthStateChanged()` 사용해서 계정 확인
  - `GoogleAuthProvider()`, `signInWithPopup()`으로 구글 아이디 로그인 서비스 구현

### Write ZAEZAL

<div align="center">
  <img src="./img/03zaezal_zaezal.gif" alt="title" />
</div>

  - `getFirestore()`, `getStorage()`로 DB 생성
  - `addDoc()`, `collection()`으로 메세지 생성
  -  `ref()`, `uploadingString()`, `getDownloadURL()`으로 이미지 파일 업로드
  - `query()`, `onSnapshot()`, `collection()` 사용해서 게시글 가져오기
  - `orderBy()`, `limit()` 사용해 정렬 방법, 개수 지정
  - `doc()`, `deleteDoc()`, `ref()`, `deleteObject()`로 게시글 삭제

  <div align="center">
    <img src="./img/04zaezal_modify.gif" alt="title" />
  </div>

  - `updateDoc()`으로 게시글 수정하기

  <div align="center">
    <img src="./img/05zaezal_infinity.gif" alt="title" />
  </div>

  - `useInView()`로 인피티니 스크롤 구현

### Profile

<div align="center">
  <img src="./img/06zaezal_profile.gif" alt="title" />
</div>

  - `updateProfile()`으로 프로필 수정
  - `ref()`, `uploadString()`, `getDownloadURL()`, `deleteObject()` 사용해서 프로필 이미지 수정
  - `signOut()`으로 로그아웃