const students = [
  {
    username: "Arrizal",
    scores: [90, 80, 60, 100],
    gender: "male",
  },
  {
    username: "Meimei",
    scores: [90, 80, 80, 80],
    gender: "female",
  },
  {
    username: "Jack",
    scores: [40, 10, 15, 60],
    gender: "male",
  },
];

// const evaluate = students.map((val) => {
//   return {
//     ...val,
//     scores: val.scores.reduce((prev, cur) => prev + cur, 0) / val.scores.length,
//   };
// });
// evaluate.forEach((val) => {
//   console.log("======================");
//   console.log(
//     `${val.gender === "male" ? "Mr. " : "Mrs. "}${val.username} report card`
//   );
//   console.log(`average score : ${val.scores}`);
//   console.log(`status : ${val.scores >= 75 ? "PASSED" : "FAILED"}`);
//   console.log("======================");
// });

students.forEach((student) => {
  const average =
    student.scores.reduce((prev, cur) => prev + cur, 0) / student.scores.length;
  console.log("======================");
  console.log(
    `${student.gender === "male" ? "Mr. " : "Mrs. "}${
      student.username
    } report card`
  );
  console.log(`average score : ${average}`);
  console.log(`status : ${average >= 75 ? "PASSED" : "FAILED"}`);
  console.log("======================");
});
