//Bài 1

const users = [
  { name: "A", age: 16 },
  { name: "B", age: 24 },
  { name: "C", age: 70 },
  { name: "D", age: 40 },
  { name: "E", age: 13 },
];

const getAgeGroup = (age) => {
  if (age >= 13 && age <= 19) {
    return "teen";
  }
  if (age >= 20 && age <= 64) {
    return "adult";
  }
  if (age >= 65) {
    return "senior";
  }
};

const result = users.reduce(
  (acc, user) => {
    const group = getAgeGroup(user.age);

    if (group) {
      acc[group].push(user.name);
    }
    return acc;
  },
  {
    teen: [],
    adult: [],
    senior: [],
  }
);

// console.log(result);

//bài 2
const students = [
  { name: "Alice", group: "A", score: 85 },
  { name: "Bob", group: "B", score: 92 },
  { name: "Charlie", group: "A", score: 78 },
  { name: "David", group: "C", score: 91 },
  { name: "Eve", group: "B", score: 88 },
  { name: "Frank", group: "A", score: 94 },
  { name: "Grace", group: "C", score: 75 },
  { name: "Hannah", group: "B", score: 77 },
  { name: "Isaac", group: "C", score: 80 },
];

const groupScores = students.reduce((acc, student) => {
  const group = student.group;

  if (!acc[group]) {
    acc[group] = [];
  }

  acc[group].push(student.score);
  return acc;
}, {});

const averageScores = {};

for (let group in groupScores) {
  const scores = groupScores[group];
  console.log(scores);

  const sum = scores.reduce((sum, num) => sum + num, 0);
  const average = sum / scores.length;

  averageScores[group] = parseFloat(average.toFixed(2));
}

console.log(averageScores);
