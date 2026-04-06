// ES5 (ECMAScript5) : 2009년 발표
// - JSON객체 : JSON.parse(), JSON.stringify()
// - Array 메서드 : 
//   forEach() : 배열의 각 요소를 순회하면 요소에 대해 지정한 함수를 실행하는 메서드
//   map() : 배열의 모든 요소를 순회하면서 새로운 배열을 만듭니다.
//   filter() : 배열의 요소 중에서 조건을 만족하는 요소만 추출하여 새로운 배열 생성
// reduce() : 배열의 모든 요소를 순회하며, 순회 과정에서 누적값을 사용하여 하나의 결과값을 만듦

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// forEach를 이용한 출력
numbers.forEach(e => {process.stdout.write(e + " ");});
console.log;

// map을 이용해 각 요소 값에서 100을 더한 값 출력
const result = numbers.map(e => e + 100);

console.log(result);

// filter를 이용해 홀수만 출력
const odds = numbers.filter(e => e % 2 !== 0);

console.log(odds);

// 짝수만 골라서 10을 곱한 배열 만들어서 출력
const asd = numbers
  .filter(e => e % 2 === 0)
  .map(e => e * 10);       

console.log(asd);

// reduce를 이용해 값을 누적하기
const sum = numbers.reduce((acc, cur) => acc + cur);

console.log(sum);

// 1 ~ 10 중에서 3의 배수 합 구하기
const three = numbers
  .filter(e => e % 3 === 0)
  .reduce((acc, cur) => acc + cur, 0);

console.log(three);

// 가변 변수와 불변 변수
// 변수 : let (블록 스코프)
// 상수 : const (블록 스코프)

const num = 1;
// num = 3; // 에러 여부

const arr = [1, 2, 3];
// arr.push[4]; // 에러는 나지 않지만 재할당은 좋은 방법이 아님 (불변성의 원칙 위배)
const arr2 = arr.concat(4);
const arr3 = [...arr, 4]; // 전개 연산자 사용

console.log(arr2);
console.log(arr3);

// 템플릿 리터럴
const name = "안유진";
const message = `안녕하세요. ${name}`;
console.log(message);

// 전개 연산자 : 배열이나 객체를 개별 요소로 분리. 이를 이용해 배열을 합치거나 개체를 병합할 수 있음
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [...array1, ...array2, 10, 20 , 30];
console.log(array3);

// 객체에서 전개 연산자
const members = {
  email: "nare0527@gmail.com",
  pwd: "asd1234",
  name: "곰돌이"
};

const newMember = {...members, pwd: "qwer1234"};
console.log(newMember);

// 우수 사원 성과급 계산
// 1. filter() : 점수가 80점 이상인 사원만 추출
// 2. map() : 추출된 사원의 급여에 성과급 20% 추가한 새 배열 생성
// 3. reduce() : 성과급 지급 대상자의 총 급여 환산

const employees = [
  {name: "강대한", score: 91, salary: 3200000},
  {name: "윤지민", score: 74, salary: 2800000},
  {name: "송민호", score: 88, salary: 3500000},
  {name: "임수연", score: 65, salary: 2600000},
  {name: "조현우", score: 95, salary: 4000000},
];

const totalBonus = employees
  .filter(e => e.score >= 80)
  .map(e => e.salary * 1.2)
  .reduce((acc, e) => acc + e);

console.log(`성과급 포함 총 급여: ${totalBonus.toLocaleString()}원`);
