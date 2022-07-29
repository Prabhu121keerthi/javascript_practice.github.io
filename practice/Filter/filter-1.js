const arr = [1, 2, 3, 4];

const even = arr.filter(x => x % 2 === 0);
console.log(even);




const students = [
  { name: 'Quincy', grade: 96 },
  { name: 'Jason', grade: 84 },
  { name: 'Alexis', grade: 100 },
  { name: 'Sam', grade: 65 },
  { name: 'Katie', grade: 90 }
];

const studentGrade = students.filter( x => x.grade >= 90);
console.log(studentGrade);


const words = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];

const sub = words.filter(word => word.length < 8);
console.log(sub);