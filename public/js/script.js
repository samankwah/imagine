const myButton = document.getElementById('btn');
myButton.onclick = function () {
    // alert('You click me!');
    const name = prompt('Enter your full name');
    document.getElementById('name').innerText = name;
    // document.getElementById('name').style.backgroundColor = 'red';
}

// Variables
const pi = 3.142;
let name = 'Stephen Amankwah';
let age = 288;
let present = false;
console.log(name);


// Objects
const car = {
    numberPlate: 'GR-123-23',
    model: 'Bentley',
    color: 'black',
    weight: 50,
    weightUnit: 'KG',
    owner: {
        name: 'Stephen Amankwah',
        driver:{
            name: 'Buddy'
        }
    }
}

console.log(car.numberPlate);
console.log(car.owner.driver.name);
console.log(car);

// car = {
//     model: 'porche'
// }
car.owner.driver.name = 'Future';
console.log(car.owner.driver.name);




// Arrays
const tweet1 = {
    text: 'I am learning js today',
    likes: 5,
    shares: 2,
    retweets: 1
  }
  
  const tweet2 = {
    text: 'I am learning arrays today',
    likes: 25,
    shares: 20,
    retweets: 10
  }
  
  const tweets = [];
  tweets.push(tweet1);
  tweets.push(tweet2);
  tweets.length;
  tweets[1];
  
  
  // Dates
  const today =  new Date();
  today.toString();
  today.toLocaleDateString();
  today.getHours();
  
  
  // If/Else
  if (today.getHours() >= 16) {
    console.log('Class has ended!');
  } else {
    console.log('Class is in session!');
  }
  
  // For loop
  for(let i = 0; i <= 10; i++) {
    console.log('Notify friends!', i);
  }
  




  
  // Functions
// Defining functions

function login(username, password) {
  if (username == 'ovaFuture' && password == '1234') {
    return 'User is logged in!';
  } else if (username != 'ovaFuture') {
    return 'Invalid username!';
  } else if (password != '1234') {
    return 'Invalid password!';
  } else{
    return 'Invalid username or password!';
  }
}

// Invoking functions
login('ovaFuture', '1234');


// Basic Arithmetic
12 + 34;
45 - 16;
7 * 12;
78 / 4;
78 % 4;
23 % 13;
30 % 13;
13 % 30

// Comparison operators
2 === 2;
3 !== 2;
3 !== 3;

// Built-in Math functions
Math.round(37 / 24);
Math.floor(34 / 24);
Math.ceil(34 / 24);
Math.random();
Math.max(78, 12, 98, 14, 89,);

Math.ceil(Math.random() * 1000000);

// Order of operations
1 * 2 + 3 - 4 / 2 + 2**2;

// Handling user inputs
1200 + Number('250');




// String concatenation
const firstname = 'Supa';
const lastname = 'Future';
firstname.trim() + ' ' + lastname.trim();

// Template literal
`${firstname.trim()} ${lastname.trim()}`;

// String methods
firstname.length;
lastname.length;
`${firstname.trim()} ${lastname.trim()}`.length;
(firstname.trim() + ' ' + lastname.trim()).length;
firstname.toUpperCase();
lastname.charAt(4);
`${firstname.trim()} ${lastname.trim()}`.charAt(3);
`${firstname.trim().charAt(0)} ${lastname.trim().charAt(0)}`;

// String conversion
String(2014);



// write a function that will add a participant to our google classroom 

const participants = [];
function addParticipant(email) {
  // check if email was provided
  if (!email) {
    return 'Email not provided!';
  }
  // check if email is valid
  if (!email.includes('@')) {
    return 'Invalid email provided!';
  }
  // Add email to the participants
  participants.push(email);
  // Notify them via mail
  // return response
    return 'Participant added!';
  }

addParticipant('ovafuture@meteo.gov.gh');



// Arrays in JavaScript

const alphabets = ['A', 'B', 'C', 'D'];
alphabets;
alphabets.join('');
alphabets.join('').split('');


// write a function that will take a user with firstname, lastname and return fullname

const user = {
  firstname: 'supa',
  lastname: 'future',

}
function fullname(user) {
  return {
    ...user, 
    fullname: `${user.firstname} ${user.lastname}`
  }
}

// Example
 fullname(user);

// Array map
const users = [
  {firstname: 'supa', lastname: 'future'},
  {firstname: 'babe', lastname: 'sadiq'},
  {firstname: 'ova', lastname: 'wise'},
  {firstname: 'stephen', lastname: 'amankwah'},
  {firstname: 'kojo', lastname: 'kymani'}
]
users.map(fullname);


// Map and return square of numbers
function square (number) {
  return number ** 2;
}
const numbers = [0,1,2,3,4,5]
numbers.map(square);


// Filter and return even numbers
function even (number) {
  return number % 2 === 0;
}
numbers.filter(even);


// write a function that takes a user with name and dateOfBirth and return true if their birthday is today else false

// const user = {
//   name: "King Kunta",
//   dateOfBirth: "1990-06-12",
// };

function isBirthday(user) {
  const today = new Date();
  const birthDate = new Date(user.dateOfBirth);
  if (
    today.getMonth() === birthDate.getMonth() &&
    today.getDate() === birthDate.getDate()
  ) {
    return true;
  } else {
    return false;
  }
}
isBirthday(user);

// write a function that takes a user with name and dateOfBirth and return birthday, with username if their birthday is today else return not your day

function getBirthdayMessage(user) {
  const today = new Date();
  const userBirthday = new Date(user.dateOfBirth);

  if (
    today.getMonth() === userBirthday.getMonth() &&
    today.getDate() === userBirthday.getDate()
  ) {
    const age = today.getFullYear() - userBirthday.getFullYear();
    return `Happy birthday, ${user.name}! You are ${age} years old today!`;
  } else {
    return "Not your day!";
  }
}

getBirthdayMessage(user);



// Bottle class
class Bottle {
  constructor(color, shape, volume) {
    this.color = color;
    this.shape = shape;
    this.volume = volume;
  }
  
  getInfo() {
    return `This is a ${this.color} ${this.shape} bottle with a capacity of ${this.volume}ml`;
  }
}

const bottle1 = new Bottle('black', 'circle', 300);
bottle1.getInfo();
const bottle2 = new Bottle('yellow', 'square', 100);
bottle2.getInfo();



// Object methods

const bottle = {
  color: 'red',
  shape: 'square',
  volume: 100,
  getInfo: function () {
    return `This is a ${this.color} ${this.shape} bottle with a capacity of ${this.volume}ml`;
  }
}

bottle.color;
bottle.getInfo();

































































