// // export let data = [1, 2, 3, 4];

// // function add(num1, num2) {
// //   return num1 + num2;
// // }
// // export { add };

// //classes
// export class Animal {
//   constructor(type, legs) {
//     this.type = type;
//     this.legs = legs;
//   }
//   makeNoise(sound = "Loud Noise") {
//     console.log(sound);
//   }
//   get metaData() {
//     return `Type:${this.type},Legs:${this.legs}`;
//   }
//   static return10() {
//     return 10;
//   }
// }

// export class Cat extends Animal{
//   makeNoise(sound = "Meow") {
//     console.log(sound);
//   }
// }

// export class Player {
//   constructor(name, country) {
//     this.name = name;
//     this.country = country;
//   }
//   get footBall() {
//     console.log(`${this.name} get the FIFA WorldCup 2022 for ${this.country}`);
//   }
// }
// export class TennisPlayer extends Player {
//   constructor(name, country, age) {
//     super(name, country);
//     this.age = age;
//   }
//   get Tennis() {
//     console.log(
//       `${this.name} is ${this.age} years old and knows how to play Tennis`
//     );
//   }
// }
