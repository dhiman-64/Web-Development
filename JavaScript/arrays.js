let days = ['Monday', 'Tuseday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

console.log(days);
let n  = days.length;
console.log(n);

console.log(days[3])
console.log(days[3][0])

let colors = ['red', 'oranges', 'yellow'];
console.log(colors);
colors[0] = 'Red';
colors[1] =  'Yellow'
colors[2] = 'Green'
console.log(colors);


let movieLine = ['Ikshit', 'Ishaan'];
movieLine.push('Mom');
console.log(movieLine);
movieLine.push('Papa', 'Family');
console.log(movieLine);
movieLine.pop();
console.log(movieLine);

movieLine.unshift('HelloJi');
console.log(movieLine);
movieLine.shift();
console.log(movieLine);


let array1 = [1,2,3];
let array2 = [4,5,6];
let array3 = array1.concat(array2);
console.log(array3);

let ans = array1.includes(2);
console.log(ans);

let rev = array2.reverse();
console.log(rev);

let index = array1.indexOf(3);
console.log("ARRAY1: " + array1);
console.log(index);

console.log(array3);
let sort1 = array3.sort();// Wrong way
console.log(sort1);

let color = ['red', 'orange', 'yellow', 'green', 'blue', 'voilet', 'indigo'];

let splice1 = color.splice(1,0,'red-orange');
console.log(color);
let splice2 = color.splice(5,1);
console.log(splice2);