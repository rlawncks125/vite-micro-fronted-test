모든 폴더 들어가서 `npm install` 패키지 설치해주고

`npm run mfa` 하면 테스트할수 있다.

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

### 동작확인

- 모듈 가져와서 랜더링

### 상태관리

- key값을 다르게 하면 독립적으로 작동됨
- store를 공유할시 KEY 값을 똑같이 하되 구현은 host에서 구현

### 상태관리 value 공유할시

- pinia 생성시 같은 key로 설정하면 최종으로 host가 덮어씌움
- key값을 똑같이 하여 value 공유 가능
- remote에서 구현된 함수 기능으로 작동안돼고
- host에서 구현된 함수 기능으로 작동됨

### 상태 관리 err

- err - nuxt는 shard : pinia 부터 오류가 발생
- err 메시지 - Cannot read properties of undefined (reading '\_s')
- err - nuxt pinia 설정이 Vue설정과 달라서 생긴 오류같음

### 할일

-
