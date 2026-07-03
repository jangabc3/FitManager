# API

현재 프로젝트는 백엔드 API 없이 순수 HTML, CSS, JavaScript로 동작합니다.

## 데이터 저장 방식

브라우저 `localStorage`를 사용합니다.

저장 키:

```text
fitdesk-members
```

## 나중에 API를 만든다면

```text
GET    /members
POST   /members
PATCH  /members/:id
DELETE /members/:id
PATCH  /members/:id/payment
POST   /members/:id/attendance
```
