// 자바스크립트의 배열은 연속된 데이터를 저장, 여러 개의 타입이 섞여 있을 수 있음. 크기 지정 필요없음
// - 파괴적 메서드 : 배열 객체의 내용을 변경하거나 추가, 삭제함
// - 비파괴적 메서드 : 배열 객체의 내용이 변경되거나, 추가, 삭제되면 새로운 배열 객체를 생성

// forEach() : 배열 순회, 비파괴적 메서드
const arr = [10, 20, 30, 40, 50];
arr.forEach(e => {
  process.stdout.write(e + " ");
});
console.log();

// toString()
console.log(arr.toString());

// join() : 배열 요소를 지정한 문자를 이용해 결합
console.log(arr.join(" * "));

// pop() : 배열의 마지막 요소를 제거하고, 반환
console.log(arr.pop());
console.log(arr);

// push() : 배열 마지막에 새로운 요소를 삽입, 파괴적 메서드
console.log(arr.push(100)); // 갯수 출력?
console.log(arr);

// 현대 문법에서 배열을 변경하려면 concat() 또는 전개연산자 사용
const fruits = ["딸기", "사과", "배", "바나나"];
const newFruits = fruits.concat("오렌지");
console.log(newFruits);