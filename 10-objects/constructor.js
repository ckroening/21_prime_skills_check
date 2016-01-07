// 1 - Create an object constructor
// for RightTriangle that takes 3 arguments
// - side1
// - side2
// - base
// The object should have two functions
// - area returns area of triangle
// - perimeter returns perimeter of triangle


function RightTriangle(side1, side2, base) {
	this.getPerimeter = function() {
		return this.side1 + this.side2 + this.base;
	};
	this.getArea = function() {
		var area = 0.5*(base*side1);
		return area;
	};
	//alternative format:
	//var getArea = function() {
	//	return 0.5*(base*side1);
	//};
	this.side1 = side1;
	this.side2 = side2;
	this.base = base;
};

// 2 - Create two instances of the RightTriangle
// object. Console log the results of calling
// both functions on both instances. 

var misterTriangle = new RightTriangle(1, 3, 5) 
var missTriangle = new RightTriangle(3, 5, 2);

console.log('misterTriangle Area: ' + misterTriangle.getArea());
console.log('misterTriangle Perimeter: ' + misterTriangle.getPerimeter());
console.log('missTriangle Area: ' + missTriangle.getArea());
console.log('missTriangle Perimeter: ' + missTriangle.getPerimeter());
