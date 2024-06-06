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














