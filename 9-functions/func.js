// 1 - Write a function declaration
// that takes no arguments and
// returns the value 4
var gimmeFour = function() {
	return 4;
}
console.log(gimmeFour());

// 2 - Write a function declaration
// that takes two arguments and
// returns the value of the result
// of the multiplication of both
// arguments
var multiplyTwo = function(a,b) {
	return a*b;
}
console.log(multiplyTwo(4,5));

// OR, Write like this:
function multiplyTwo(a,b) {
	return a * b;
}
console.log(multiplyTwo(6,9));

// 3 - Write a function expression
// that takes one argument and
// console logs that value.
var oneThing = function(ataTime) {
	return ataTime;
}
console.log(oneThing(4));

// 4 - Write a function that takes
// another function as an argument.
// This function merely executes the
// given function.
var fy = function(value) {
	return value *=3;
}
var foo = function(fy) {
	return fy(2);
}
console.log(foo(fy));

// 5 - Call the function from 4 and
// pass the function from 3 in as an
// argument.
console.log(foo(oneThing));
