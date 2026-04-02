// 프롬프트 입력으로 이름, 학번, 국어, 영어, 수학 성적 입력 받음 => 이름, 학번, 총점, 평균을 객체 리터럴로 만들기
const prompt = require("prompt-sync")();

let name = prompt("이름 입력 : ");
let id = prompt("학번 입력 : ");
let kor = Number(prompt("국어 성적 입력 : "));
let eng = Number(prompt("영어 성적 입력 : "));
let mat = Number(prompt("수학 성적 입력 : "));

let total = kor + eng + mat;
let avg = total / 3;

const student = {
  // 이름 : name,
  // 학번 : id,
  // 총점 : total,
  // 평균 : avg
  name,
  id,
  total,
  avg,
}

console.log(student);

// 정수를 입력받아 정수 범위 이내의 숫자 중 7의 배수를 구하고 한 줄에 10개씩 출력하기
let num = Number(prompt("정수 입력 : "));

for (i = 1; i <= num; i++) {
  if (i % 7 == 0) {
    console.log(i);
  }
}