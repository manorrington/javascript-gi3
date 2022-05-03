// //Easy
// const run =(exercise) => `Today's exercise: ${exercise}`
// const swim =(exercise) => `Today's exercise:  ${exercise}`    

// console.log(run(`running`))
// console.log(swim(`swimming`))


// //Medium
// let sharePizza = (slices, cutSlices) => slices / cutSlices;
// console.log(`Each person gets ${sharePizza(8, 2)} slices`)


// //Hard
// let func = () =>{
//     function closure () {
//         let pii = {
//             name: ``,
//             ssn: `000-00-0000`,
//             getName() {
//                 return this.name
//             }
//         };
//         return pii.getName()
//     }
//     return closure
// } 
// console.log(closure())



// //Very Hard
function Person(name, job, age){
    this.name = name;
    this.job = job;
    this.age = age;
}
Person.prototype.exercise = String(`running is fun!`)
Person.prototype.fetchJob = String(`John is a Data Developer`)

function Programmer(...args){
    Person.apply(this, args)
    this.languages = this.languages
    this.isBusy = true;
}
Programmer.prototype.languages = String(`English, Japanse, Spanish`)


let person1 = new Person(`John`, `Developer`, 21)
let programmer1 = new Programmer(`Melissa`, `Programmer`, 29, `E`)

console.log(person1, programmer1)
   
























