// // Template literals

// let firstName = "lionel";
// let lastName = "Messi";

// const fullName = `${firstName} ${lastName}`;
// console.log(fullName);

// // Destructing objects

// const person = {
//   name: "Messi",
//   Team: "Argentina",
//   Jersey_No: 10,
//   awards: {
//     award1: "World Champion",
//     award2: "Best player in the tournament",
//   },
// };
// const {
//   name,
//   Team,
//   Jersey_No,
//   awards: { award1, award2 },
// } = person;
// console.log(name);
// console.log(Jersey_No);
// console.log(`${name} plays for ${Team}`);
// console.log(`${name} got a ${award1} award`);
// console.log(`${name} got a ${award1} and ${award2} award`);

// // Destructing the array

// let [firstName, experience, interested] = [
//   "sunshine",
//   "Fresher",
//   "Web development",
// ];
// firstName = "Baba Yaga";
// console.log(firstName);

// // object literal

// function obj(firstName, lastName) {
//   let fullName = { firstName, lastName };
//   console.log(fullName);
// }
// obj("sun", "shine");

// for of loop

// ex-1
// let incomes = [10000, 2200, 2500, 1300];
// let total = 0;
// for (let income of incomes) {
//   console.log(income);
//   total += income;
// }
// console.log(total);

// ex-2

// let fullName = "Raviteja Darvemula";

// for (let char of fullName) {
//   console.log(char);
// }
// ex-3
// const students = [
//   { name: "John", city: "New York" },
//   { name: "Peter", city: "Paris" },
//   { name: "Kate", city: "Sidney" },
// ];
// for (let student of students) {
//   let { name, city } = student;
//   console.log(`${name} lives in ${city}`);
// }

// // spread operator

// // arrays

// let contacts = ["Elon musk", "Steve Jobs", "Sundar pichai"];
// // let personalContacts = contacts;
// let personalContacts = ["Tim cook", ...contacts, "Alibaba"];
// contacts.push("Ratan Tata");
// console.log(contacts);
// console.log(personalContacts);

// // objects

// let person = {
//   name: "elon reeve musk",
//   age: 51,
//   Country: "south Africa",
// };
// let updated_person = {
//   ...person,
//   kids: 6,
//   CEO: "Twitter",
// };
// let { name, age } = person;
// console.log(updated_person);

// // rest operator

// function rest(...nums) {
//   console.log(nums);
// }
// rest(1, 2, 3, 4, 5);

// // arrow function

// let functionName = (arg) => `return statement and ${arg} is here`;
// console.log(functionName(1));

// Default parameters --> if there is no arg passed for the function the default arg will be printed

// let leadScorer = (player = "someone") => {
//   console.log(`${player} is the goalscorer in FIFA WorldCup 2022 Qatar.`);
// };
// leadScorer();

// includes()

// let menu = ["Dosa", "Idli", "Poori", "Roti"];
// console.log(menu.includes("Cap"));

// // import and export

// import { data } from "./ex.js";
// let updated_data = data;
// updated_data.push(5);
// console.log(updated_data);

// import { add } from "./ex.js";
// let result = add(1, 2);
// console.log(result);

// // padStart(),padEnd()

// let nm = "Peter";

// console.log(nm.padStart(10, "a"));
// console.log(nm.padEnd(10, "a"));

// // classes

// import { Animal, Cat } from "./ex.js";

// let cat = new Animal("cat", 3);
// cat.makeNoise("meow");
// console.log(cat.type);
// console.log(cat.metaData);

// console.log(Animal.return10());

// let cat = new Cat();
// cat.makeNoise();

// import { Player, TennisPlayer } from "./ex.js";
// let player = new Player("messi", "Argentina");
// console.log(player.footBall);
// console.log(player.Tennis);
// let tplayer = new TennisPlayer("Rafael Nadal", "spain", 34);
// console.log(tplayer.Tennis);
// console.log(tplayer.footBall);

// class Player {
//   constructor(name, country) {
//     this.name = name;
//     this.country = country;
//   }
//   footBall() {
//     console.log(`${this.name} get the FIFA WorldCup 2022 for ${this.country}`);
//   }
// }
// class TennisPlayer extends Player {
//   constructor(name, country, age) {
//     super(name, country);
//     this.age = age;
//   }
//   tennis() {
//     console.log(
//       `${this.name} is ${this.age} years old and knows how to play Tennis`
//     );
//   }
// }
// const player = new Player("Messi", "argentina");
// player.footBall();
// // player.tennis();
// const tplayer = new TennisPlayer("sunshine", "spain", 21);
// tplayer.tennis();
// tplayer.footBall();

// // Promises

// const buyFlightTicket = () => {
//     return new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             const error = true;

//             if( error ) {
//                 reject("Sorry your payment was not successful")
//             } else {
//                 resolve("Thank you, your payment was successful");
//             }
//         }, 3000)
//     })
// }

// buyFlightTicket()
// .then( (success) => console.log(success))
// .catch( (error) => console.log(error) );

// // fetch

// get
// fetch("https://jsonplaceholder.typicode.com/comments/1")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// post
// fetch("https://jsonplaceholder.typicode.com/comments", {
//   method: "POST",
//   body: JSON.stringify({
//     postId: 1,
//     name: "Dylan",
//     email: "dylansemail310@gmail.com",
//     body: "That was dope!",
//   }),
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// // async & await
// const photos = [];

// async function photoUpload() {
//   let uploadStatus = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       photos.push("Profile Pic");
//       resolve("Photo Uploaded");
//     }, 3000);
//   });

//   let result = await uploadStatus;

//   console.log(result);
//   console.log(photos.length);
// }

// photoUpload();
// // with fetch
// const apiUrl = "https://api.chucknorris.io/jokes/random";

// async function getJoke() {
//   const response = await fetch(apiUrl);
//   const data = await response.json();

//   console.log(data.value);
// }

// getJoke();

// sets
// const exampleSet = new Set([1, 1, 1, 1, 2, 2, 2, 2]);

// exampleSet.add(5);
// exampleSet.add(5).add(17);

// console.log(exampleSet.has(5));

// exampleSet.clear();

// console.log(exampleSet.size);
