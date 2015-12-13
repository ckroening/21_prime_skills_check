// 1 - Create an object constructor
// for RightTriangle that takes 3 arguments
// - side1
// - side2
// - base
// The object should have two functions
// - area returns area of triangle
// - perimeter returns perimeter of triangle

var area = function(base, side1) {
	return 0.5*(base*side);
};

function RightTriangle(side1,side2,base) {
	this.side1 = side1;
	this.side2 = side2;
	this.base = base;
	this.area = area;
	this.perimeter = function(base, side1, side2) {
		return side1 + side2 + base;
	};
};

// 2 - Create two instances of the RightTriangle
// object. Console log the results of calling
// both functions on both instances.
var misterTriangle = new RightTriangle(1, 3, 5);
console.log(misterTriangle);

var missTriangle = new RightTriangle(3, 5, 2);
console.log(missTriangle);