const students = [
	{
		name: 'Nam',
		age: 24,
		gender: 'male',
	},
	{
		name: 'Mai',
		age: 22,
		gender: 'female',
	},
	{
		name: 'Trang',
		age: 23,
		gender: 'female',
	},
	{
		name: 'An',
		age: 20,
		gender: 'male',
	},
	{
		name: 'Thien',
		age: 27,
		gender: 'male',
	},
];

var temp1 = 0;
students.forEach((e) => (e.gender === 'female' ? (temp1 += 1) : temp1));
console.log('Số học sinh nữ: ' + temp1);

var temp2 = 0;
students.reduce((x, y) => (y.gender === 'male' ? (temp2 += 1) : temp2), 0);
console.log('Số học sinh nam: ' + temp2);
// const count = students.reduce(
// 	(initial, student) => (students.gender === 'male' ? initial + 1 : initial),
// 	0
// );

var result = students.map((i) => i.name);
console.log(result);
