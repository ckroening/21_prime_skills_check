// 1 - Add the value 32 to the end of
// the following array.
var arr = [3, 4, 6, 0];
	arr.push(32);
	console.log(arr);

// 2 - Remove the values 4 & 6 from
// arr using the splice method.
var remove = arr.splice(1,2);
	console.log(remove);
	console.log(arr);

// 3 - Use the sort method to order
// each array value from smallest
// to largest.
var remove = [40, 100, 1, 5, 25, 10];
remove.sort(function(a, b){return a-b});
console.log(remove);
// NOTES: sort is a comparison function, which defines the sort behavior according to how it returns. 
// The comparison function itself accepts two arguments, usually referred to as a and b, 
// which represent the two values being compared in each operation. Then:
// if the function returns less than zero, sort a before b
// if the function returns greater than zero, sort b before a
// if the function returns zero, leave a and b unchanged with respect to each other.
// (from http://www.sitepoint.com/sophisticated-sorting-in-javascript/)

// 4 - Use the map method to 
// halve the value of each
// value in the array.
remove.map = function(change) {
	this.forEach(function(item) {
		item *= 0.5;
		remove.push(change(item));
	});
	return remove;
}
console.log(remove);
// Got stuck on this part. Return to fix later.