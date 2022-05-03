// //Easy
// const run =(exercise) => `Today's exercise: ${exercise}`;
// const swim =(exercise) => `Today's exercise:  ${exercise}`;    

// console.log(run(`running`));
// console.log(swim(`swimming`));



//Medium
// let sharePizza = (slices, cutSlices) => slices / cutSlices;
// console.log(`Each person gets ${sharePizza(8, 2)} slices`);



//Hard
// class Pii {
//     name = `john`;
//     #priv = 121321; 

//     getName() {
//         return this.name;
//     }
// }

// let pii = new Pii();
// console.log(pii.getName());



// //Very Hard
// function Person(name, job, age) {
//     this.name = name;
//     this.job = job;
//     this.age = age;
// }

// Person.prototype.exercise = String(`running is fun!`);
// Person.prototype.fetchJob = String(`John is a Data Developer`);


// function Programmer(...args) {
//     Person.apply(this, args);
//     this.languages = this.languages;
//     this.isBusy = true;
// }

// Programmer.prototype.languages = String(`HTML, CSS, Javascript`);

// Programmer.prototype.completeTask = function() {
//     this.isBusy = false;
// }

// Programmer.prototype.acceptNewTask = function() {
//     this.isBusy = true;
// }

// Programmer.prototype.offerNewTask = function() {
//     if(this.isBusy === true) {
//         console.log(`Man, I'm so busy`);
//     } else if (this.isBusy === false) {
//         console.log(`Whew, I sure could do some work`);
//     }
// }

// Programmer.prototype.learnLanguage = function() {
//     console.log(`Python, SQL`);
// }

// Programmer.prototype.listLanguage = function() {
//     console.log(`HTML, CSS, Javascript`)
// }

// // function Apprentice(...args){
// //     Programmer.apply(this, args);
// // }
// // Apprentice.prototype.languages = String(`HTML, CSS`);
// // ^ passed in another person to test if it worked


// let person1 = new Person(`John`, `Developer`, 21);
// let programmer1 = new Programmer(`Melissa`, `Programmer`, 29,);
// // let apprentice = new Apprentice(`Micah`, `Apprenctice`, 19);

// console.log(person1, programmer1, /* apprentice */);

   
























