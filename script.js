/* Module Assignment 2*/

//Question 1
var petArray = ["cat", "cow", "dog"];

//Question 2
console.log(petArray[1]);

//Question 3
petArray.push("sheep");

//Question 4
console.log(petArray.length);

//Question 5
var catObject = {
	name: "cheshire",
	color: "pink & purple",
	age: 155
};

//Question 6
console.log(catObject.age);

//Question 7
var catArray = [
	{
		name: "cheshire",
		color: "pink & purple",
		age: 155
	}
];

//Question 8
for (var i = 0; i < catArray.length; i++) {
	console.log(catArray[i].name);

	console.log(catArray[i].color);

	console.log(catArray[i].age);
}

//Question 9
function logToConsole(shrek) {
	console.log(
		"You might have seen a housefly, maybe even a super fly, but I bet you ain't never seen a " +
			shrek +
			" fly. "
	);
}
//Question 10

logToConsole("donkey");
