// 1. 배열 메소드 체이닝 (ES5)
// 아래 배열에서 짝수만 골라서, 각각 제곱한 값의 합계를 구하세요. filter(), map(), reduce() 모두 사용
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const num = numbers
  .filter(e => e % 2 === 0)
  .map(e => e * e)
  .reduce((e1, e) => e1 + e);

console.log(num);

// 2. 전개 연산자 활용 (ES6)
// 아래 조건을 전개 연산자(Spread operator) 만 사용해서 구현 (push, concat 등 배열 메소드 사용 금지)
const front = ["HTML", "CSS", "JavaScript"];
const back = ["Java", "Spring", "MySQL"];

// 조건 1) front와 back을 합친 새로운 배열 fullStack을 만드세요
const fullStack = [...front, ...back];
// 조건 2) front 배열을 복사한 frontCopy를 만드세요
const frontCopy = [...front];
// 조건 3) frontCopy에 "React"를 맨 뒤에 추가한 새 배열을 만드세요(원본 변경X)
const frontReact = [...frontCopy, "React"];

console.log(fullStack);
console.log(frontCopy);
console.log(frontReact);

// 3. 템플릿 리터럴 + 객체 확장 (ES6)
const basicInfo = { name: "홍길동", age: 25};
const jobInfo = { job: "개발자", stack: "React" };

// 조건 1) 두 객체를 병합한 profile 객체를 만드세요
const profile = {...basicInfo, ...jobInfo};
// 조건 2) 템플릿 리터럴로 아래 형식에 맞게 출력
console.log(`
  안녕하세요! 저는 ${profile.name}입니다.
  나이는 ${profile.age}살이고, 직업은 ${profile.job}입니다.
  주요 스택 기술은 ${profile.stack}입니다.
`);

// 4. 가변 인수 함수 만들기 (ES6 종합)
// 학생들의 점수 목록을 받아 아래 정보를 출력하는 함수 scoreReport()
// 전개 연산자 rest parameter(...), reduce(), filter(), 템플릿 리터럴을 모두 활용

function scoreReport(subject, ...score) {
  // subject : 과목명 (문자열)
  // score : 점수 목록 (가변 인수)

  // 구현 내용 : 
  // 1) 전체 평균 (소수점 첫째 차리)
  const avg = (score.reduce((acc, cur) => acc + cur) / score.length).toFixed(1);
  // 2) 최고점 / 최저점
  const max = Math.max(...score);
  const min = Math.min(...score);
  // 3) 80점 이상인 학생 수
  const count = score.filter(e => e >= 80).length;

  console.log(`
    ===== JavaScript 성적 리포트 =====
    전체 평균: ${avg}점
    최고점: ${max}점 / 최저점: ${min}점
    80점 이상: ${count}명
    `)
}

scoreReport("JavaScript", 92, 78, 85, 60, 95, 73, 80);