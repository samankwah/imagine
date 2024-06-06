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
  