
//! I. Variables &  Datatypes
//! A. Q=A
/*
1. How do we assign a value to a variable? //& we have to declare it with let or const, then give it a name snailcase, an equal sign, then the variable
2. How do we change the value of a variable? //& the same process but it has to be a let, make sure it isnt nested, and that its under the first declaration of the variable within the code
3. How do we assign an existing variable to a new variable? //& the existing has to be a let, declare the new variable with let, then give it a name, then equal it to the existing variable name
4. Remind me, what are declare, assign, and define? //&
5. What is pseudocoding and why should you do it? //& its when you write out the logic of the code in plain english. it helps keep your thoughts/steps organized as you write out the code
6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it? //& 10% at most thinking
*/

//! B. Strings
console.log("=============================================")

let firstVariable = "Hello World";
firstVariable = 456;
let secondVariable = firstVariable;
secondVariable = "Hello USA";

//& 6. the vaule of firstVariable is 456

let yourName = "Ronnie";

console.log(`Hello, my name is ${yourName}`);



//! C. Booleans
console.log("=============================================")

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false && false && false && false && false || true);
console.log(false == false)
console.log(e == 'Kevin');
console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == '48');



//! D. The Farm
console.log("=============================================")

let animal = "cow";

if (c === "cow") {
    console.log("mooooo")
} else {
    console.log("Hey! You\'re not a cow.");
}; 



//! E. Driver's Ed
console.log("=============================================")

// 1. Make a variable that holds a person's age; be semantic
let driversAge


console.log("=============================================")
//2. Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."
if (driversAge >= 16) {
    console.log("Here are the keys!");

} else {
    console.log("Sorry, you\'re too young.")
}



//! II
//!Loops A. The Basics
console.log("=============================================")

// 1. Write a loop that will print out all the numbers from 0 to 10, inclusive
for(let i = 0; i <= 10; i++) {
    console.log(i)
}


console.log("=============================================")
// 2. Write a loop that will print out all the numbers from 10 up to and including 400
for(let j = 10; j <= 400; j++) {
    console.log(j)
}


console.log("=============================================")
// 3. Write a loop that will print out every third number starting with 12 and going no higher than 4000
for(let n = 12; n <= 4000; n+=3) {
    console.log(n)
}


//! B. Get even
console.log("=============================================")

// 1. Print out the numbers that are within the range of 1 - 100
for (let z = 1; z <= 100; z++) {
    console.log(z)
}

console.log("=============================================")
// 2. Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
for (let x = 1; x <= 100; x++) {
    if(x % 2 === 0) {
        console.log(`${x} <-- is an even number`)
    } else {
        console.log(x)
    }
}

//! C. Give me Five
console.log("=============================================")

// 1. For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
for (let f = 0; f <= 100; f++) {
    if(f % 5 === 0) {
        console.log(`I found a ${f}. High five!`)
    } 
}


console.log("=============================================")
// 2. Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
for (let g = 0; g <= 100; g++) {
    if(g % 5 === 0) {
        console.log(`I found a ${g}. High five!`)
    } else if (g % 3 === 0) {
        console.log(`I found a ${g}. Three is a crowd`) 
    } 
}


console.log("=============================================")
// 3. For numbers divisible by both three and five, be sure your code prints both messages
for (let h = 0; h <= 100; h++) {
    if(h % 5 === 0 && h % 3 === 0) {
        console.log(`I found a ${h}... High five AND three is a crowd!`)    
    } else if(h % 5 === 0) {
        console.log(`I found a ${h}. High five!`) 
    } else if(h % 3 === 0) {
        console.log(`I found a ${h}. Three is a crowd`)
    }
}


//! D. Savings Account
console.log("=============================================")

// 1. Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
let bank_account = 0;

for (let k = 1; k <= 10; k++) {
    bank_account += k
    // console.log(bank_account);
} 
// console.log(k)
console.log(`\$${bank_account}`);


console.log("=============================================")
// 2. You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
let bank_account2 = 0;

for (let l = 1; l <= 100; l++) {
    bank_account2 +=l
} console.log(`\$${bank_account2 * 2}`);


//! 3. Arrays & Control Flow
console.log("=============================================")

// 1. What are the things in an array called? //& - elements
// 2. Do Arrays guarantee those things will be in order? //& - no
// 3. What real-life thing could you model with an array? //& - store, arrange, list, reccomend names of movie titles to a user on a website


//! B. Easy Does It

// 1. Create an array that contains three quotes and store it in a variable called quotes
let quotes = ['The best things in life are free.', 'On this rock, I shall build my church.', 'Money is the root of all evil.']
console.log(quotes[0])


//! C. Accessing Elements
console.log("=============================================")
const randomThings = [1, 10, "Hello", true]

// 1. How do you access the 1st element in the array?
console.log(randomThings[0]) //or

const firstElement = randomThings[0]
console.log(firstElement)

console.log("=============================================")
// 2. Change the value of "Hello" to "World"
randomThings.splice(2, 1, "World")


// 3. Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
console.log(randomThings);


//! D. Change values
console.log("=============================================")
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

// 1. What would you write to access the 3rd element of the array?
console.log(ourClass[2])

console.log("=============================================")
// 2. Change the value of "Github" to "Octocat"
ourClass.splice(4, 1, "Octocat")

console.log("=============================================")
// 3. Add a new element, "Cloud City" to the array
ourClass.push("Cloud City")
console.log(ourClass);


//! E. Mix It Up
console.log("=============================================")
const myArray = [5, 10, 500, 20]

// 1. Add the string "Aegon" to the end of the array. Add another string of your choice to the end of the array.
myArray.push("Aegon", "Dinarys")
console.log(myArray)

console.log("=============================================")
// 2. Remove the 5 from the beginning of the array.
myArray.shift()
console.log(myArray)

console.log("=============================================")
// 3. Add the string "Bob Marley" to the beginning of the array.
myArray.unshift("Bob Marley")
console.log(myArray)

console.log("=============================================")
// 4. Remove the string of your choice from the end of the array.
myArray.pop()
console.log(myArray)

console.log("=============================================")
// 5. Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse() method return anything?
const reversedArray = myArray.reverse()
console.log(myArray)


//! F. Biggie Smalls
console.log("=============================================")
let num10 = 10;
// 1. console.log()s "little number" if the number is entered is less than 100
// 2. console.log()s big number if the number is greater than or equal to 100.

if (num10 < 100) {
    console.log("little number")
} else {
    console.log("big number")
}


//! G. Monkey in the Middle
console.log("=============================================")
let num8 = 11;
// 1. console.log() little number if the number entered is less than 5.
// 2. If the number entered is more than 10, log big number.
// 3. Otherwise, log "monkey". 

if (num8 < 5) {
    console.log("little number");
} else if(num8 > 10) {
        console.log("big number");
    } else {
        console.log("monkey");
    }


//! H. What's in Your Closet?
console.log("=============================================")

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

// 1. What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`);

console.log("=============================================")
// 2. Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".
console.log(kristynsCloset.length);
kristynsCloset.splice(6, 0, "raybans");
console.log(kristynsCloset);

console.log("=============================================")
// 3. Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.
kristynsCloset.splice(5, 1, "stained knit hat");
console.log(kristynsCloset);

console.log("=============================================")
// 4. Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.
// console.log(thomsCloset[0][0]);
const firstElement2 = thomsCloset[0][0];
console.log(firstElement2)

console.log("=============================================")
// 5. In the same way, access one item from Thom's pants array.
let pants3 = thomsCloset[1][2]
console.log(pants3);

console.log("=============================================")
// 6. Access one item from Thom's accessories array.
const acc1 = thomsCloset[2][0];
console.log(acc1);

console.log("=============================================")
// 7. Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log(`Thom is looking fierce in a ${thomsCloset[0][1]}, ${thomsCloset[1][2]} and ${thomsCloset[2][2]}`);

console.log("=============================================")
// 8. Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
// initially i had pants3 as a const... i changed it to a let in order to change it here.
pants3 = "Footie Pajamas";
console.log(pants3);


//! IV. Functions
console.log("=============================================")
// read entire problems carefully before doing them from now on.
//^ I know it says this but I'm going to do them all anyway, I need the practice.

// A. printGreeting
function printGreeting(name) {
    console.log(`Hello there, ${name}`);
}
printGreeting("Ronnie");


console.log("=============================================")
// B. printCool
function printCool(name) {
    console.log(`${name} is cool`);
}
printCool("Captain Reynolds");

console.log("=============================================")
// C. calculateCube
function calculateCube(number) {
    console.log(number **3);
}
calculateCube(5);

console.log("=============================================")
// D. isVowel
function isVowel(letter) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(letter);
}
console.log(isVowel('U'));

console.log("=============================================")
// E. getTwoLength

function getTwoLengths(arryone, arrytwo) {
    return {
        arry1: arryone.length,
        arrytwo: arrytwo.length
    } 
}
console.log(getTwoLengths("Hank", "Hippopopalous"));


console.log("=============================================")
// F. getMultipleLengths

// function getMultipleLengths(arry3); {
//     return {
//         arry3: arry3[0].length,
//         arry3: arry3[1].length,
//         arry3: arry3[2].length,
//         arry3: arry3[3].length,
//         arry3: arry3[4].length 
//        }
// }

function getMultipleLengths(strs) {
    let lengths = [];
    for (let m = 0; m < strs.length; m++) {
        lengths.push(strs[m].length);
    }
    return lengths;
}
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

console.log("=============================================")
// G. maxOfThree

function maxOfThree(num7, num8, num9) {
    if (num7 >= num8 && num9) {
        return num7;
    } else {
        if(num8 >= num7 && num9) {
            return num8;
        } else {
            if (num9 >= num7 && num8) {
                return num9;
            }
        }
    }
}
console.log(maxOfThree(7, 6, 4));

console.log("=============================================");

// H. printLongestWord

// function printLongestWord(arry9) {
//     let lengthy = [];
//     for (let p = 0; p < arry9.length; p++) {
//         lengthy.push(arry9[p].length); {
//             if (lengthy[p] > lengthy[p]++) {
//                 return lengthy[p]; 
//             } else {
//                 if ()
//             }
//         }
//     }
//     return lengthy;
// }

function printLongestWord(arry9) {
    let lengthy = [0].length;
    let ans1 = arry9[0];
    for (let p = 1; p < arry9.length; p++) {
        let maxim = arry9[p].length;
        if (maxim > lengthy) {
            ans1 = arry9[p];
            lengthy = maxim;
        }
    }
        return ans1;
}

console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));


//! Objects

console.log("=============================================");
// A. Make a user object
let user = {
    name: 'Ronnie',
    email: 'ronpowell156@gmail.com',
    age: 22,
    purchased: []
}
console.log(user);


console.log("=============================================");
// B. Update the user
user.email = 'notesmane@gmail.com'
user.age++
console.log(user);


console.log("=============================================");
// C. Adding keys and values
user.location = 'Tokyo'
console.log(user);


console.log("=============================================");
// D. Shopoholic!
user.purchased.push('carbohydrates');
user.purchased.push('peace of mind');
user.purchased.push('Merino jodhpurs');

console.log(user.purchased[2]);


console.log("=============================================");
// E. Object-within-object
user.friend = {
    name: 'Adam',
    age: 25,
    location: 'Miami',
    purchased: []
}
console.log(user.friend.age);
console.log(user.friend.location);
user.friend.age = 55
user.friend.purchased.push('The One Ring', 'A latte');
console.log(user.friend.purchased[1]);


console.log("=============================================");
// F. Loops
// 1. Write a for loop that iterates over the User's purchasedarray (NOT the friend's purchased array), and prints each element to the console.

// for (let q = 0; q < user.purchased.length; q++);
// console.log(q);

// let purchased1 = user.purchased; {
//     console.log(purchased1);
// }

for (let q = 0; q < user.purchased.length; q++) {
    console.log(user.purchased[q]);
  }

console.log("=============================================");
// 2. Write a for loop that iterates over the Friend's purchasedarray, and prints each element to the console.
for (let r = 0; r < user.friend.purchased.length; r++) {
    console.log(user.friend.purchased[r]);
}


console.log("=============================================");
// G. Functions can operate on objects
// 1. Write a single function updateUser that takes no parameters. When the function is run, it should:
// 2. it should increment the user's age by 1
// 3. make the user's name uppercase

function updateUser() {
    user.name = user.name.toUpperCase();
    user.age +=1;
} 
console.log(user); //^ its not working and im not sure what I'm doing wrong here.. spent too much time on it.. i'm skipping it

console.log("=============================================");
// 2. Write a function oldAndLoud that performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our userobject, 
// make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoudfunction 
// with useras the argument.
// function oldAndLoud

function oldAndLoud(person) {
    user.name = user.name.toUpperCase();
    user.age += 1;
};
const user = {
    person.name: "John",
    person.age: 30
};
  
oldAndLoud(user);
console.log(user);

//^ not sure how to complete this problem either.. skippping it