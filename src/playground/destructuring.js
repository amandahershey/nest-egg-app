//
// ES6: OBJECT DESTRUCTURING - one line declaration
//
// const person = {
//   name: 'Amanda',
//   age: 30,
//   location: {
//     city: 'Orlando',
//     temp: 86,
//     weather: 'raining'
//   },
//   // gender: 'female'
// };

// const {name, age} = person;
// // const name = person.name;
// // const age = person.age

// console.log(`${name} is ${age}.`);

// const {city, temp} = person.location;
// if(city && temp){
//   console.log(`It's ${temp} in ${city}`);
// }

// // Renaming syntax (if renamed, cannot use old name)
// const { weather: forecast } = person.location;
// if (forecast) {
//   console.log(`It's currently ${forecast}`);
// }

// // Set up defaults if a value does not exist
// const { gender = 'not specified' } = person;
// console.log(`${name}'s gender is ${gender}`);

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);

//
// ES^: ARRAY DESTRUCTURING
//

// const address = ['123 S Juniper Street', 'Orlando', 'Florida', '32808'];

// const [street, city, state, zip] = address;
// console.log(`You are in ${city}, ${state}`);

// Leaving out items in an array
// const [, , state] = address;
// console.log(`You are in ${state} state`);

// Set up a default value
// const address = [];
// const [, , state = 'New York'] = address;
// console.log(`You are in ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

// console.log(`A medium coffee (hot) costs $2.50`);
const [hotCoffee, , medPrice] = item;
console.log(`A medium ${hotCoffee} costs ${medPrice}`);