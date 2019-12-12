//var,let,const  *let age=30; age=31; console.log=(age)==>31;* const score=10; score=31==>error*
//let we can change the value but const we can't
//data: string,number,boolean,null,undefined
//const age=12; const name='amina'; const x=null;let z; *console.log(typeof age)=number; name=string; x=object; z=undefined
//console.log('my name is'+name+'and my age is'+age);variables
//or=  console.log(`my name is &{name} and i am&{age}`);
//or= const=`my name is &{name} and i am&{age}`;   console.log(hello);


//alert('Hello World');
console.log('Hello World');
console.error('This is an error');
console.warn('This is a warning');

// var, let, const
let agee = 30;
agee = 31;// let can be changed but const can not
console.log(agee);

//data types:string, number, boolean, null, undefined
const name = 'amina';
const age = 18;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z; // undefined

// Check type
console.log(typeof z);

// Concatenation
console.log('My name is ' + name + ' and I am ' + age);

// Template string (mieux)
console.log(`My name is ${name} and I am ${age}`);

//******************string's methodes********************
const s='hello world';
console.log(s);
console.log(s.toLowerCase());

//majuscule
console.log(s.toUpperCase());

//write from 0 to 5 caracteres  majuscule (HELLO )
console.log(s.substring(0,5).toUpperCase());

//get caractere of each value("h" "e"...)
console.log(s.split(''));

//changer le séparateur
const m='technologie, computer, code';
console.log(m.split(', '));

//***************arrays' methdes**********************

//variables that hold multiples value
const numbers= new Array(1,2,3,4);

//or 
const number= [1,2,3,4];

//get an array with 4 values
console.log(numbers);

//we can put multi data types on the same array
const fruits= ['apple','orange','pear',10,true];
console.log(fruits);

//get the second value on the array
console.log(fruits[1]);

//add a value to the array
fruits[5]='grapes';
console.log(fruits);

//add a value on the begening
fruits.push("mangos");
console.log(fruits);

//add a value on the end
fruits.unshift('strawberries');
console.log(fruits);

//gat off the last value
fruits.pop();
console.log(fruits);

//get length
console.log(fruits.length);

//verifie if it is an array or no
console.log(Array.isArray(fruits));

//get the index of a certain value
console.log(fruits.indexOf('orange'));

//*************objetct's methodes***************

//struct's methodes
const person={
    firstname : 'amina',
    lastname : 'bouaziz',
    age : 18,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street:'50 main st',
        city:'el-madher',
        state:'batna'
    }

}

//get all champs
console.log(person);

//get one chaps of struct
console.log(person.firstname);
console.log(person.hobbies[1]);
console.log(person.address.city);

const {firstname , address: {city}}=person;
console.log(city);

//add a champs
person.email='ia_bouaziz@esi.dz';
console.log(person);

//each value of an array is an object
const todos=[
    {
        id: 1,
        text: "take out trash",
        iscopmleted: true,
    },
    {
        id: 2,
        text: "meeting with boss",
        iscopmleted: true,
    },
    {
        id: 3,
        text: "dentist appt",
        iscopmleted: false,
    }
];

console.log(todos);

//get the text of the 2nd object
console.log(todos[1].text);

//sending and reseving data to and from the server on a JSON form
//no single quoats in JSON
//convert the array to the JSON form vgv 
const todoJSON =JSON.stringify(todos);
console.log(todoJSON);

//for
for(let i=0; i<todos.length; i++){
    console.log(i);
    console.log(`for loop  ${todos[i].text}`);
}

for(let x of todos){
    console.log(x.id);
}
//while
let i=0;
while(i<10){
    console.log(`while loop number ${i}`);i++;
}

//forEach
todos.forEach(function(todo) {console.log(todo.text); });

//map  return a champ of struct
const todotext = todos.map(function(todo) { return todo.text; });
console.log(todotext);

//filter get only objects contains true in completed
/*const todocompleted = todos.filter(function(todo) { return todo.iscopmleted===true; });
console.log(todocompleted);*/

//filter: get only the text of objects that contains true in iscompleted
const todocompleted = todos.filter(function(todo) { return todo.iscopmleted===true; }).map(function(todo){return todo.text;});
console.log(todocompleted);

//conditionel
//when we use (==)  '10'=10
//but when we use (===)  '10'!=10
const o = '10';
if(o == 10){console.log('o=10');}
if(o === 10){
    console.log('o=10');
}else{
    console.log('o!=10');
}
//  || ou ,   && et

//if = then ? else :
const u=10;
const color = x>10 ? 'red' : 'blue';

switch(color){
    case 'red':console.log('red');break;
    case 'blue': console.log('blue');break;
    default:console.log('ni blue ni red'); break;
}

//functions
function addnumb(n1,n2){
    console.log(n1+n2);
}
addnumb(5,2);
// addnumb()==>NaN==>not a number

//inisilise functions
function addnumb(n1=5,n2=2){
    console.log(n1+n2);
}
addnumb();

//ecraser les num inisialiser
addnumb(5,5);

//or
const addnum=(n1,n2)=>{
    return n1+n2;
}
console.log(addnum(5+5));

// Constructor Function
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob); 
 // this.getBirthYear = function(){
 //   return this.dob.getFullYear();
 // }
 // this.getFullName = function() {
 //   return `${this.firstName} ${this.lastName}`;
 // }
}

// Instantiate an 
const person1 = new Person('amina', 'bou', '4-2-2001');
const person2 = new Person('oumnia', 'bou', '18-4-2002');

console.log(person2);

// Get Birth Year
Person.prototype.getBirthYear = function () {
    return this.dob.getFullYear();
}
// Get Full Name
Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`
}

class personne{
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    getbirthyear() {
        return this.dob.getFullYear();
    }
    getfullname() {
        return `${this.firstName} ${this.lastName}`;
    }
}

console.log(person1.getBirthYear());
console.log(person1.getFullName()); 

//console.log(window);

// Single Element Selectors
console.log(document.getElementById('my-form'));
console.log(document.querySelector('.container'));

// Multiple Element Selectors
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByTagName('li'));
console.log(document.getElementsByClassName('item'));

const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));

const ul = document.querySelector('.items');
//ul.remove(); remove all
//ul.lastElementChild.remove();  remove one

ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

const btn = document.querySelector('.btn');
//btn.style.background = 'red';

// Mouse Event
btn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>hi</h1>';
  });

// USER FORM SCRIPT
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    const li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    userList.appendChild(li);

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
}