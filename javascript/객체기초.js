// 자바스크립트는 원시 타입을 제외한 모든 값이 객체임
// 객체는 {} 중괄호를 만듦, 속성(promperty)과 값(value)의 쌍으로 구성
// 객체는 객체 리터럴로 만들 수 있음
// 주로 JSON과 결합해 서버와 데이터를 주고 받을 때 사용됨

// 회원가입 : 이메일, 비밀번호, 이름, 전화번호
const member =  {
  email: "asd123@gmail.com",
  pwd: "asd123",
  name: "곰돌이",
  phone: "010-1234-1234"
};

// 게시글 등록 : 이메일, 제목, 글 내용

// 댓글 등록 : 이메일, 게시글 번호, 댓글 내용


// 1. 회원정보를 배열로 생성하기 : 10개
const members = [
  { email: "user1@gmail.com", pwd: "1234", name: "유저1", phone: "010-0000-0001" },
  { email: "user2@gmail.com", pwd: "1234", name: "유저2", phone: "010-0000-0002" },
  { email: "user3@gmail.com", pwd: "1234", name: "유저3", phone: "010-0000-0003" },
  { email: "user4@gmail.com", pwd: "1234", name: "유저4", phone: "010-0000-0004" },
  { email: "user5@gmail.com", pwd: "1234", name: "유저5", phone: "010-0000-0005" },
  { email: "user6@gmail.com", pwd: "1234", name: "유저6", phone: "010-0000-0006" },
  { email: "user7@gmail.com", pwd: "1234", name: "유저7", phone: "010-0000-0007" },
  { email: "user8@gmail.com", pwd: "1234", name: "유저8", phone: "010-0000-0008" },
  { email: "user9@gmail.com", pwd: "1234", name: "유저9", phone: "010-0000-0009" },
  { email: "user10@gmail.com", pwd: "1234", name: "유저10", phone: "010-0000-0010" }
];
// 2. 게시글 목록 : 10개, 게시글 번호 필요
const posts = [
  { id: 1, email: "user1@gmail.com", title: "제목1", content: "내용1" },
  { id: 2, email: "user2@gmail.com", title: "제목2", content: "내용2" },
  { id: 3, email: "user3@gmail.com", title: "제목3", content: "내용3" },
  { id: 4, email: "user4@gmail.com", title: "제목4", content: "내용4" },
  { id: 5, email: "user5@gmail.com", title: "제목5", content: "내용5" },
  { id: 6, email: "user6@gmail.com", title: "제목6", content: "내용6" },
  { id: 7, email: "user7@gmail.com", title: "제목7", content: "내용7" },
  { id: 8, email: "user8@gmail.com", title: "제목8", content: "내용8" },
  { id: 9, email: "user9@gmail.com", title: "제목9", content: "내용9" },
  { id: 10, email: "user10@gmail.com", title: "제목10", content: "내용10" }
];
// 3. 댓글 목록 : 10개 댓글 번호
const comments = [
  { email: "user1@gmail.com", postId: 1, content: "댓글1" },
  { email: "user2@gmail.com", postId: 1, content: "댓글2" },
  { email: "user3@gmail.com", postId: 2, content: "댓글3" },
  { email: "user4@gmail.com", postId: 2, content: "댓글4" },
  { email: "user5@gmail.com", postId: 3, content: "댓글5" },
  { email: "user6@gmail.com", postId: 3, content: "댓글6" },
  { email: "user7@gmail.com", postId: 4, content: "댓글7" },
  { email: "user8@gmail.com", postId: 5, content: "댓글8" },
  { email: "user9@gmail.com", postId: 6, content: "댓글9" },
  { email: "user10@gmail.com", postId: 7, content: "댓글10" }
];