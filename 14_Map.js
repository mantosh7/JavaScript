//  # What is Map ?
// => A Map holds key-value pairs where the keys can be any datatype.
// => A Map remembers the original insertion order of the keys.
// => A Map is a collection of key-value pairs where:
//    => Keys can be of any type (not just strings like in regular objects).
//    => Keys are ordered.
//    => It is iterable, so you can loop through it easily.
//    => It provides methods like set(), get(), delete(), has(), and clear().

//  # How to create a Map ?
const myMap = new Map();

//  # How to add data to Map ?
myMap.set("name", "Mantosh");
myMap.set(100, "marks");
myMap.set(true, "passed");

console.log(myMap);  // Map(3) { 'name' => 'Mantosh', 100 => 'marks', true => 'passed' }

// # How to get data ?
console.log(myMap.get("name")); // Mantosh
console.log(myMap.get(100));    // marks

// # How to check if key exists ?
console.log(myMap.has("name")); // true
console.log(myMap.has("age"));  // false

// # How to delete key ?
myMap.delete(100);
console.log(myMap); // Map(2) { 'name' => 'Mantosh', true => 'passed' }

// # How to find size of a map ?
console.log(myMap.size); // 2
