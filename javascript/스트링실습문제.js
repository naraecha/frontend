const prompt = require("prompt-sync")();

const ex1 = prompt("ex1 숫자 4자리 : ");
console.log(ex1.padStart(8, "*"));

const ex2 = prompt("ex2 이메일 : ");
const ex2Arr = ex2.split("@");
console.log(ex2Arr[0]);

const ex3 = "010-1234-5678";
console.log(ex3.slice(0,4) + "****" + ex3.slice(8,13));

const ex4 = "030527-1234567";
const ex4_2 = "*******";
const ex4_3 = ex4.substring(0,7).concat(ex4_2);
console.log(ex4_3);

const ex5 = "나는 JavaScript와 React를 공부 합니다.";

let result = "";

for (let ch of ex5) {
  if (ch === ch.toUpperCase()) {
    result += ch.toLowerCase();
  } else {
    result += ch.toUpperCase();
  }
}

console.log(result);

const jumin = "990101-1234567";

const birth = jumin.split("-")[0]; // 990101
const genderCode = jumin.split("-")[1][0];

// 생년월일
const year = birth.substring(0, 2);
const month = birth.substring(2, 4);
const day = birth.substring(4, 6);

// 전체 연도 계산
let fullYear;
if (genderCode === '1' || genderCode === '2') {
  fullYear = 1900 + Number(year);
} else {
  fullYear = 2000 + Number(year);
}

// 나이 계산
let today = new Date();
let age = today.getFullYear() - fullYear;

// 성별
let gender;
if (genderCode === '1' || genderCode === '3') {
  gender = "남성";
} else {
  gender = "여성";
}

// 출력
console.log(`생년월일 : ${year}년${Number(month)}월${Number(day)}일`);
console.log(`나이 : ${age}세`);
console.log(`성별 : ${gender}`);