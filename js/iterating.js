(function(){
    "use strict";

    // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.

    // TODO: Create a log statement that will log the number of elements in the names array.

    // TODO: Create log statements that will print each of the names array elements individually.
})();

var names = ['Thomas', 'Patrice', 'Nick', 'Phillip'];

console.log("There are " + names.length + "names in the names array.")

for (var i = 0; i < names.length; i++) {
    console.log('The name at index ' + i + ' is: ' + names[i]);
}

	
names.forEach(function (element, index, array) {
	console.log('The name at index ' + index + ' is: ' + element);
});