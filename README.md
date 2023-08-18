<del>모든 폴더 들어가서 `npm install` 패키지 설치해주고</del>

<del>`npm run mfa` 하면 테스트할수 있다.</del>

### yarn berry 로 마이그레이션

zero-install 기능으로 인하여

git clone 후 `yarn` 명령후 `yarn mfa:yarn` 명령시 테스트 할수 있음.

---

host 주소는 localhost:5000(http://localhost:5000/) 로 접속하면된다.

build 하면 assets/remoteEntry.js 위치에 파일이 생긴다.

[vite federation 문서](https://github.com/originjs/vite-plugin-federation)

```
<!-- Rmote -->
federation({
    name: "remote-name",
    filename: "remoteEntry.js", <-- output파일
    // Modules to expose
    exposes: {
      "./Button": "./components/RButton.jsx",
    },
    shared: ['vue', 'pinia']
  }),

<!-- Host -->
   federation({
      name: 'host',
      <!-- 참조되는 원격 모듈 파일 -->
      remotes: {
        remote: 'http://localhost:5001/assets/remoteEntry.js',
        'remote-react': 'http://localhost:5003/assets/remoteEntry.js',
        'remote-nuxt': '/nuxt/_nuxt/remoteEntry.js'
      },
      shared: ['vue', 'pinia']
    })
```

## 동작확인

- 모듈 가져와서 랜더링
- 상태 관리
- 라이브 러리
- yarn berry

---

## 상태관리

- key값을 다르게 하면 독립적으로 작동됨
- store를 공유할시 KEY 값을 똑같이 하되 구현은 host에서 구현

#### 상태관리 value 공유할시

- pinia 생성시 같은 key로 설정하면 최종으로 host가 덮어씌움
- key값을 똑같이 하여 value 공유 가능
- remote에서 구현된 함수 기능으로 작동안돼고
- host에서 구현된 함수 기능으로 작동됨

#### 상태 관리 err

- err - nuxt는 shard : pinia 부터 오류가 발생
- err 메시지 - Cannot read properties of undefined (reading '\_s')
- err - nuxt pinia 설정이 Vue설정과 달라서 생긴 오류같음

---

## yarn berry 마이그레이션

[참고 블로그](https://kasterra.github.io/setting-yarn-berry)

#### zero-install 기능시 장점

- Yarn PnP은 의존성을 압축 파일로 관리 하므로 용량이 작다.
- 저장소를 복제하거나 브랜치를 꿔도 yarn install 실하여 의존성을 설치하지 않아도 된다.
- CI에서 의존성 설치 시간을 크게 절약할수 있다.

#### yarn berry 실습 하면서 아직 잘모르는 개념

- worckSpace
- 패키지 의존성 관리 ( --save-dev 하는 라이브러리 기준을 아직 모르곘음)

---

## 라이브러리 확인

#### tailwind

- tailwind - 'jit' 모드를 사용하니 host에 tailwind.css 깔아도 jit는 사용하는 css가져오지 못함 ( host 가 remote의 해당 jit 값을 가지고 있지 않음)
- tailwind jit 모드는 build,dev 시 class를 탐색하여 해당 class들을 css파일로 만들어주기때문에 원격에서 사용하는 값들을
  host 에서 `<el class='jit값 , ... ~~~'>` 이렇게 정의해줘도 탐지하여 css 파일로 만들어준다.
- 결론 : 모든 라이브사용시 host도 해당 라이브가 있어야한다.

---

### 할일

- package 충돌 확인
- 1. tailwind.css ( css 라이브러리 )
- 2. vue-simpe-alert ( js 라이브러리 )
