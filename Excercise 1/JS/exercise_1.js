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
