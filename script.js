// function getAverageAge(users) {
//     let ages = users.map(users => users.age)
//     let sum = ages.reduce((sum, current) => sum + current, 0)
//     let averageAge = sum/ages.length 
//     return averageAge;
// }
// let john = { name: "John", age: 3 };
// let pete = { name: "Pete", age: 3 };
// let mary = { name: "Mary", age: 3 };
// let users = [john, pete, mary];
// console.log(getAverageAge(users)); // (25 + 30 + 29) / 3 = 28

// function sortByName(users) {
//     users.sort(
//         (current, next) => current.name.localCompare(next,name)
//     );
// }

// function sortByName1(users){
//     let names = users.map(user => user.name);
//     users.sort();
//     return names
// }
// console.log(sortByName(users));
// let obj = {
//     name:'john',
//     age:20
// }
// console.log(Object.values(obj))

// let today = new Date();
// let d = new Date(2015, 11, 20);
// console.log(d)
// console.log(today)
// today.setHours(0)
// console.log(today)

// //Closure
// let name = 'richard'
// function sayHi(){
//     alert("Hi, " + name);
// }
// name = 'peter'
// sayHi()


// function getDateAge(date, days) {
//     let result = new Date(date);
//     result.setDate(date.getDate()- days);
//     return result
// }
// let date = new Date(2015, 1, 2);
// console.log(date.getDate())
// console.log(getDateAge(date, 1));
// console.log(date);

//finding the power of a number (iterative thinking)
// function pow(x,n) {
//     result = 1
//     for (let i=0; i<n; i++) {
//         result *= x
//     }
//     return result
// }
// console.log(pow(2,3))

// // Recursive thinking
// function pow(x, n){
//     if (n==1){
//         return x
//     }else {
//         return x * pow(x,n-1)
//     }
// }
// console.log(pow(2,3))



// let name = 'john';
// function showName(name) {
//     console.log(name);
// }
// showName(name);
// name = 'mary'
// showName(name);

// function sayHi(phrase, who) {
//     alert( phrase + ' , ' + who ) ;
//     }
//     setTimeout(sayHi, 10000, "Hello", "John");

//Objects and Attributes
// let animal = {
//     age:20,
//     color:'black',
//     run: function (){
//         console.log('Running')
//     }
// };
// console.log(animal.age)

//Object inheriting attributes using Prototypal inheritance
// let animal = {
//     eats: true
// };
// let rabbit = {
//     jumps: true
// };

// rabbit.__proto__=animal;
// console.log(rabbit.jumps)
// console.log(rabbit.eats)

//Prototypal inheritance
// let animal = {
//     eats:true ,
//     walk() {
//     alert("Animal walk");
//     }
//     } ;
//     let rabbit = {
//     jumps: true ,
//     __proto__ : animal
//     } ;
//     let longEar = {
//     earLength: 10,
//     __proto__ : rabbit
//     }
//     //walk is taken from the prototype chain
//     longEar.walk(); // Animal walk
//     console.log(longEar.jumps); // true (from rabbit)

// PROTOTYPAL INHERITANCE (THIS)
// let animal = {
//     walk() {
//     if (!this.iSleeping) {
//     alert(`I walk`);
//     }
//     } ,
//     sleep() {
//     this.isSleeping = true ;
//     }
//     } ;

// let rabbit = {
// name: "White Rabbit",
// __proto__ : animal
// } ;
//     // modifies rabbit.isSleeping
//     rabbit.sleep();
//     console.log(rabbit.isSleeping); // true
//     console.log(animal.isSleeping); // undefined (no such property in the prototype)
    

// //Function Prototype
// let animal = {
//     eats: true
//     } ;
//     function Rabbit(name) {
//     this.name = name;
//     }
//     Rabbit.prototype = animal;
//     let rabbit = new Rabbit("White Rabbit"); // rabbit . proto == animal
//     console.log( rabbit.eats ) ; // true
    
//     let rabbit2 =  new Rabbit('Black Rabbit');
//     console.log(rabbit2.name)


// //Classes
// function User(name){
//     this.name=name;
// }
// User.prototype.sayHi = function(){
//     alert(this.name)
// }

// let user = new User('John')
// console.log(user.name)

// //classes syntax
// class User1{
//     constructor(name){
//         this.name = name;
//     }
//     sayHi(){
//         alert(this.name)
//     }
// }
// let user1 = new User1('Richard')
// user1.sayHi();

// Getters/Setters
// class User {
//     constructor(name) {
//     // invokes the setter
//     this.name = name;
//     }
//     get name() {
//     return this._name;
//     }
//     set name(value) {
//     if (value.length < 4) {
//     alert("Name is too short. ");
//     return;
//     }
//     this._name = value;
//     }
//     }
//     let user = new User("John");
//     alert(user.name); // John
//     user = new User(""); // Name too short

//Classes: Static Method
// class Article {
//     constructor(title, date) {
//     this.title= title;
//     this.date = date;
//     }
//     static compare(articleA, articleB) {
//     return articleA.date - articleB.date;
//     }
//     }
//     // usage
//     let articles = [
//     new Article("Mind", new Date(2016, 1, 1 )),
//     new Article("Body", new Date(2016, 0, 1 )),
//     new Article("JavaScript", new Date(2016, 11, 1 ))
//     ] ;
// articles.sort(Article.compare);
// console.log( articles[0].title) ; // Body
// console.log( articles[1].title) ; // Body
// console.log( articles[2].title) ; // Body


// class Animal {
//     constructor(name) {
//     this.speed = 0;
//     this.name = name;
//     }
//     run(speed) {
//     this.speed += speed;
//     alert(`${this.name} runs with speed ${this . speed }.`);
//     }
//     stop(){
//     this.speed = 0;
//     alert(`${this.name} stopped.`);
//     }
//     }
//     // Inherit from Animal
//     class Rabbit extends Animal{
//     hide() {
//     alert(`${this.name} hides ! `);
//     }
//     }
//     let rabbit = new Rabbit("White Rabbit");
//     rabbit.run(5); // White Rabbit runs with speed 5.
//     rabbit.hide () ; // White Rabbit hides!

// let tag = document.getElementsByTagName('td');



// for (let i=0; i <= tag.length; i=i+5 )
//         {
//             tag[i].style.backgroundColor = 'red'
//         }

// const table = document.getElementById('mytable');
// const tablerows = table.getElementsByTagName("tr")

// for (let i=0; i <= tablerows.length; i++ )
//     {
//         const tableCells = tablerows[i].getElementsByTagName('td');
//         tableCells[i].style.backgroundColor = 'red';
        
//     }


// const button = document.querySelector('button');
// const header = document.querySelector('hi')
// button.onkeydown=(event) => {
//     console.log(event.key)
// }

// window.addEventListener('keydown', (event) => {
//     if (event.key = 'k'){
//         console.log('The K key was clicked')
//     }
// })


// function sumFirstLast(number){
//     num = number.toString()
//     let x =  parseInt(num[num.length-1])
//     let y =  parseInt(num[0])
//     sum = x+y
//     return sum
// }
// num = 549867538953985953985757
// console.log(sumFirstLast(num))

 const os = require('os')
 const fs = require('fs') //communicate with filesystem

// let revWord = []
// function reverseString(word){
//     for (i=word.length-1; i >= 0; i--){
//         revWord.push(word[i])
//     }
//     d = revWord.join('')
//     return d
// }

// // console.log(reverseString('drahcir'))

// module.exports = { firstValue : reverseString}

// console.log(os)

// fs.writeFile('/textfile.txt','Hi,Guys', (err) => {
//     if (err){
//         throw err;
//     }
//     console.log('File has been written successfully')
// })

// fs.readFile('textfile.txt', 'utf8', (err, data) => {
//     if (err){
//         console.error(err);
//         return;
//     }
//     console.log(data)
// });

// fs.mkdir('./newdir', (err) => {
//     if (err){
//         console.log(err);
//     } else {
//         console.log('Successfuly created a new directory')
//     }
// });

// try{
//     if (!fs.existsSync('newdir')){
//         fs.mkdirSync('newdir')}
// }
// catch(err){
//     console.error(err)
// }

// fs.rmdir('./newdir', (err) => {
//     if (err){
//         console.log(err);
//     } else {
//         console.log('Successfuly removed directory')
//     }
// });

//------------------------------------------------------------------------------------
// // Line 1: const http = require('http')
// // This is like getting a special toy box (called 'http') that helps us make websites
// const http = require('http');

// // Line 2: const server = http.createServer((req, res) => {
// // This is like building a lemonade stand! 
// // - 'req' is like when someone comes to ask for lemonade
// // - 'res' is like giving them their lemonade back
// const server = http.createServer((req, res) => {

//     // Line 3: console.log(req.url);
//     // This is like writing down in your notebook what drink each person asked for
//     console.log(req.url);

//     // These lines are commented out (not working) but they would:
//     // - Tell the person their lemonade is coming (writeHead)
//     // - Give them their lemonade (end)
//     // res.writeHead(200, {'content-Type':'text/plain'});
//     // res.end('Hello world!')
// });

// // Line 8-10: server.listen(8000, 'localhost', () => {
// // This is like opening your lemonade stand:
// // - 8000 is like your street address
// // - 'localhost' is like saying "I'm selling from my house"
// // - The message tells you your stand is ready for customers!
// server.listen(8000, 'localhost', () => {
//     console.log('Server is listening');
// });
//------------------------------------------------------------------------------------------------
//CREATING A WEB SERVER
const http = require('http')
const server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url==('/')){
        fs.readFile('home.html', 'utf8', (err, data) => {
            if (err){
                console.log('Oops, something went wrong:', err);
            }
            res.writeHead(200, {'content-Type':'text/html;'});
            res.end(data);   
        })
            
    }
    else if (req.url==('/about')){
        fs.readFile('about.html', 'utf8', (err, data) => {
            if (err){
                console.log('Oops, something went wrong:', err);
            }
            res.writeHead(200, {'content-Type':'text/html;'});
            res.end(data);
        })
            
    }
    else {
        fs.readFile('404error.html', 'utf8', (err, data) => {
            if (err){
                console.log('Oops, something went wrong:', err);
            }
        res.writeHead(200, {'content-Type':'text/html;'});
        res.end(data);
                
    })
            
    }
})
server.listen(8000, 'localhost', () => {
    console.log('Server is listening')
})
//--------------------------------------------------------------------------------------------------





















































































































































































