# ERD

현재 프로젝트는 브라우저 `localStorage`에 회원 데이터를 저장합니다.

## Member

```text
Member
├── id
├── name
├── phone
├── membershipType
├── startDate
├── endDate
├── paymentAmount
├── paymentStatus
└── attendanceDates
```

## 설명

- `id`: 회원 고유 ID
- `name`: 회원 이름
- `phone`: 연락처
- `membershipType`: 회원권 종류
- `startDate`: 회원권 시작일
- `endDate`: 회원권 만료일
- `paymentAmount`: 결제금액
- `paymentStatus`: 완료 또는 미납
- `attendanceDates`: 출석 날짜 배열
