// let name = "곰돌이";
// let age = 23;
// let addr = "충남 천안시";

// console.log(name);
// console.log(age);
// console.log(addr);

// 주석

/*
여러 줄 주석
*/

// 스타일 가이드
// 1. 파일 이름 : 소문자, 하이픈(-), 밑줄(_)만 사용
// 2. 파일 확장자 : .js
// 3. 인코딩 : UTF-8
// 4. 줄 바꿈 : ;
// 5. 네이밍 규칙 : camelCase : userName, getUserData

// 식별자 : 변수, 함수, 객체 이름 등프로그래밍 요소를 구분하는 이름
// - 영어 대소문자, _, $ 로 시작해야함
// - 숫자로 시작할 수 없음
// - 예약어 사용 금지 (let, var, const, if ....)

let userName = "안유진";
let _score = 100;
let $value = 50.0;

// 변수와 상수
// - let : 재할당 가능한 변수 선언 (블록 스코프를 따름)
// - const : 상수, 재할당 불가능
// - var : 예전 변수 선언 방식 (사용하지 말 것)

let test1 = 100;
test1 = 200;

const test2 = 100;
//test2 = 100; // 에러 발생

test3 = 100;
var test3 = 100;
var test3 = 200;

console.log(test3);

// 데이터 타입 : 동작 타입의 언어이므로 값이 대입될 때 데이터형이 결정됨
// - 원시 타입 : 값이 저장되는 데이터 타입 : String, Number, Boolean, undefined, null
// - 참조 타입 : Array(순서가 있는 값들의 리스트), Object(키-값 구조의 데이터 집합), Function (코드 블록)

let test10 = 1000;
console.log(typeof test10);

let name = "곰돌이";
let addr = '충남 천안시';
let greeting = `안녕하세요. ${name}님 환영합니다.~`
let age = 18;

console.log(name + " : " + addr);
console.log(greeting);

// 템플릿 문자열을 이용해 구구단 출력하기
for (i = 1; i < 10; i++) {
  for (a = 1; a < 10; a++) {
    b = a * i;
    console.log(i + " * " + a + " = " + b);
  }
}

// prompt-sync 로 입력받은 값 출력하기
const prompt = require("prompt-sync")(); // 키보드를 통해서 입력받기, 기본적으로 문자열로 입력됨
let num1 = parseInt(prompt("첫 번째 정수 입력 : "));
let num2 = parseInt(prompt("두 번째 정수 입력 : "));

console.log(num1 + num2);

// 입력받은 수 양수/음수 판별하기
let n = parseInt(prompt("숫자 입력 : ")); // 입력받은 문자열을 정수로 반환

if (n >= 0) {
  console.log(n + "은 양수입니다.");
} else {
  console.log(n + "은 음수입니다.");
}

// 숫자형(Number) : 정수와 실수를 포함하고 있음
console.log(0.1 + 0.2); // 근사치 계산법이라 정확한 값이 안 나옴

// 논리형 : 참과 거짓을 구분하는 용도
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(' ')) // true(공백)
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false

// 배열 : 여러 개의 데이터를 연속으로 저장할 때 사용, 같은 데이터 타입일 필요없음, 크리 지정이 필요없음
let member = [
  "아이브", 
  ["안유진", "장원영", "이서", "레이"], 
  [23, 22, 19, 19], 
  {"coffee": 2000}
  [123, 456, 789]
];

console.log(member);

// 아이브
console.log(member[0]);

// 이서
console.log(member[1][2]);

// 멤버 이름 전부 출력
console.log(member[1]);

// 커피 가격 출력
console.log(member[3]);

// 장원영의 "원"만 출력
console.log(member[1][1][1]);


// 객체 리터럴 : 객체를 정의하는 가장 간단한 방법
const info = {
  email : "jks2024@gmail.com",
  pwd : "sphb8250",
  name : "곰돌이사육사"
}

console.log(info);

// 프롬프트 입력으로 이름, 학번, 국어, 영어, 수학 성적 입력 받음 => 이름, 학번, 총점, 평균을 객체 리터럴로 만들기
let name1 = parseFloat(prompt("이름 입력 : "));
let num5 = parseInt(prompt("학번 입력 : "));
let kor = parseInt(prompt("국어 성적 입력 : "));
let eng = parseInt(prompt("영어 성적 입력 : "));
let mat = parseInt(prompt("수학 성적 입력 : "));

let total = kor + eng + mat;
let svg = total / 3;

const c = {
  이름 : name1,
  학번 : num5,
  총점 : total,
  평균 : svg
}

console.log(c);