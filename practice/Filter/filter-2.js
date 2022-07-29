const employee = [
  {id: 55, name:'Dheeraj', designation:'Team Lead', age:34, salary: 50000, phone: '8934562892'},
  {id: 56, name:'Kate', designation:'Developer', age:25, salary: 87000, phone: '8945648902'},
  {id: 57, name:'Suzi', designation:'Developer', age:35, salary: 65000, phone: '9003444426'},
  {id: 58, name:'Mike', designation:'Tester', age:29, salary: 55000, phone: '8944447667'},
  {id: 59, name:'Fiona', designation:'Analyst', age:26, salary: 88000, phone: '9012645639'},
];

// developers

const developer = employee.filter(emp => emp.designation == 'Developer');
console.log(developer);