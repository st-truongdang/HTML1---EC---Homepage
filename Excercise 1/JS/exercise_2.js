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

  const sum = scores.reduce((sum, num) => sum + num, 0);
  const average = sum / scores.length;

  averageScores[group] = parseFloat(average.toFixed(2));
}
