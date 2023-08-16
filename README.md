포든 폴더 들어가서 `npm install` 패키지 설치해주고

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

### 할일

- 상태 관리
