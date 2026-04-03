// 1. 각 이름 앞에 "학생: " 을 붙인 새 배열
const names = ["김철수", "이영희", "박민준"];
// 출력 ["학생 : 김철수", "학생 : 이영희", "학생 : 박민준"]
const result = names.map(name => "학생: " + name);
console.log(result);

// 2. 부가세(10%)를 포함한 금액 배열 출력
const prices = [10000, 25000, 8000, 45000];
const prices2 = prices.map(e => e + (e / 100 * 10));
console.log(prices2);

// 3. 아래 배열에서 20세 이상인 사람만 골라내기
const people = [
  { name: "김철수", age: 17 },
  { name: "이영희", age: 25 },
  { name: "박민준", age: 29 },
  { name: "최수지", age: 22 },
]
const people2 = people.filter(e => e.age >= 20);
console.log(people2);

// 4. com으로 끝나는 이메일만 걸러내기
const emails = [
  "kim@naver.com",
  "lee@daum.net",
  "park@gmail.com",
  "choi@kakao.net",
];

const emails2 = emails.filter(e => e.endsWith("com")); // includes : 포함된
console.log(emails2);

// 5. 연봉 5000만 원 이상 직원의 이름과 연봉(만원 단위)만 추출
const employees = [
  { name: "김부장", salary: 72000000, active: true },
  { name: "이과장", salary: 48000000, active: true },
  { name: "박대리", salary: 38000000, active: false },
  { name: "최주임", salary: 55000000, active: true },
  { name: "정사원", salary: 32000000, active: true },
];
const employees2 = employees
  .filter(e => e.salary >= 50000000)
  .map(e => ({
    name: e.name,
    salary: e.salary / 10000
  }));
console.log(employees2);