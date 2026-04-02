// 산술연산자 : +, -, *, /, %, **(거듭 제곱 연산자)

let x = 10;
let y = 4;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y); // 결과값이 실수이면 실수 타입으로 결정남
console.log(parseInt(x / y));
console.log(x ** y);


// 비교연산자
let a = 10;
let b = "10";

console.log(a == b); // 동등연산자 : 두 값이 같은지를 비교
console.log(a === b); // 일치연산자 : 두 값과 데이터 타입이 같은지 비교

console.log(a != b); 
console.log(a !== b);

const prompt = require("prompt-sync")();

// 예제 1. 홀짝 판별기
let ex1 = prompt("홀짝 판별 : ");
if (ex1 % 2 == 0) {
  console.log(ex1 + "은 짝수입니다.");
} else {
  console.log(ex1 + "은 홀수입니다.")
}

// 예제 2. 학점 계산기 : 90점 이상 A, 80점 이상 B, 70점 이상 C, 60점 이상 D, 나머지 F
let ex2 = prompt("학점 계산 : ");
if (ex2 >= 90) {
  console.log("A");
} else if (ex2 >= 80) {
  console.log("B");
} else if (ex2 >= 70) {
  console.log("C");
} else if (ex2 >= 60) {
  console.log("D");
} else {
  console.log("F");
}

// 예제 3. 입력받은 구구단 출력하기
let ex3 = prompt("구구단 : ");
for (i = 1; i < 10; i++) {
  console.log(ex3 + " * " + i + " = " + (ex3 * i))
}

// 예제 4. 입력받은 수까지의 합을 구하기
let ex4 = prompt("입력받은 수까지의 합 : ");
let cnt = 0;
for (i = 1; i <= ex4; i++) {
  cnt += i;
} 
console.log(cnt);

// 예제 5. 별 출력
let ex5 = prompt("별 출력 : ");
for (i = 1; i <= ex5; i++) {
  console.log("*");
}

// 예제 6. 10개의 수를 입력받아 양수, 음수 개수 구하기
let ex6 = prompt("음수 양수 구분(10개의 수 입력) : ");
