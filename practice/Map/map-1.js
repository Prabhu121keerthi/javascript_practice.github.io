const arr = [1, 2, 3, 4];

const doubled = arr.map(x => x * 2);
console.log(doubled);


const tasks = [
  {
    'name'     : 'Write for Envato Tuts+',
    'duration' : 120
  },
  {
    'name'     : 'Work out',
    'duration' : 60
  },
  {
    'name'     : 'Procrastinate on Duolingo',
    'duration' : 240
  }
];

const taskName = tasks.map(x => x.name);
console.log(taskName);