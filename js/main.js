// console.log("Hello Word");
// console.log('How are you');
// console.log('Welcome');

// const studentName ='Emmanuel';
// const address ='Festac Town';
// const dept = 'compt Science';
// studentName = 'Loyal';
// console.log(studentName);
// console.log(dept);
// console.log(address);

//CONTENT TYPE

// let a = 500; //Number
// let b = 'Emmanuel is typing'; // String
// let c = ''; // String
// let d = true; // Boolean
// let e = 20.9; //Number
// let f //Undefined

// let name = [];

// let myFunc = function add() {
    
// }

// console.log(a);
// console.log(typeof (a));
// console.log(b);
// console.log(typeof (b));
// console.log(c);
// console.log(typeof (c));
// console.log(d);
// console.log(typeof (d));
// console.log(e);
// console.log(typeof e);
// console.log(f);
// console.log(typeof (f));
// console.log(typeof name);
// console.log(typeof myFunc);
// let ema = 1;
// let one = 'Emmanuel';
// let name;

//OPERATION
 //ADDITION +
 // SUBTRACTION -
 // MULTIPLICATION *
 // DIVISION
 // EXPONENTIAL **
 // MODULUS
 // || OR
 // && AND
 // >= GREATER THAN OR EQUALS TO
 // <= LESS THAN OR EQUALS TO
 // != NOT EQUALS TO
 
 // ==
 // ===

// let studentName = ['Loyal', 'Ikeoluwa', 'Modupe', 'Oyinda', 'Emmanuel', 'Damilola'];
// studentName.push('Balkis');
//  console.log(studentName);
// studentName[0] = 'Irene';
// console.log(studentName);
// studentName.shift();
// console.log(studentName);
// studentName.pop();
// console.log(studentName);
// studentName.unshift('Amat');
// console.log(studentName);
// studentName.splice(0,4);
// console.log(studentName);

// studentName.reverse();
// console.log(studentName);
// studentName.sort();
// console.log(studentName);

// let score = 71;
// let studentName = 'Oyinda';

// if (score >= 70) {
//     console.log(studentName + ' Got A');
    
// } else {
//      console.log(studentName + " TRY AGAIN NEXT YEAR");
// }

//IF ELSE

// let userName = 'loyal102';
// let passWord = 'mypass';

// if (userName == 'loyal102' && passWord == 'mypass') {
//     console.log('Access Granted');
// } else {
//     console.log('Wrong Username or password');
    
// }

// concatenation

let name = 'Loyal';
let lastname = 'Michael';
let address = '22 Road Festac Town';
let occupation = 'Software Engineer';

// console.log('This is your full name ' + name + ' ' + lastname + ' ' + );
// console.log(`NAME:${name}
//  ADDRESS:${address}
//  OCUPATION: ${occupation}`);

 //LOOP FOR DOWHILE WHILE


// 

// 
//FUNCTION

// function ema(name, greet) {
//     console.log(`${name}, ${greet}`);
// }
// ema('Emmanuel', 'How are you');
// ema('grace', 'Whatsup');
// ema('Irene', 'Whats Going on');

// function  myLike(a,b,c) {
//     let total = a - b * c;
//     console.log(total);
    
// }
// myLike(5, 6, 20);
// myLike(10, 1, 2);

let btn = document.getElementById('btn');
let para = document.getElementById('para');
let btn2 = document.getElementById('btn2');
let changeH1Text = document.getElementById('myh1');
let doSomthing = document.getElementById("p1");


btn.addEventListener('click', show);

function show() {
    para.style.display = 'block';
}

btn2.addEventListener('click', ikeoluwa);

function ikeoluwa() {
    changeH1Text.textContent = 'Loyal';
    changeH1Text.style.backgroundColor = 'black';

}

