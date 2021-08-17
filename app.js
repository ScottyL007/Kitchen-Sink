let firstName = 'Scotty';

const usStates = 50;

let a = 5 + 4;

function sayHello() { alert("Hello World!") }
sayHello();
function checkAge(name, age) {
  if (age < 21)

    alert("Sorry " + name + ",you aren't old enough to view this page!")
}

checkAge("Charles", 21);

checkAge("Abby", 27);

checkAge("James", 18);

checkAge("John,", 17);

let favVegs = ["Tomatoes", "Carrots", "Alvocado", "Spinach", "Grean Bean"]

for (var i = 0; i < favVegs.length; i++) {
  console.log(favVegs[i]);
}


let pet = {
  name: "Dakota",
  breed: "Husky/Lab Mix"
}
console.log(pet)

const Myobjects = [
  {
    name: "Mike",
    age: 21
  }, {
    name: "Caleb",
    age: 18,
  },
  {
    name: "Karen",
    age: 12,
  },
  {
    name: "Tammy",
    age: 48,
  },
  {
    name: "Bryan",
    age: 15,
  }
];

for (i = 0; i < Myobjects.length; i++) { checkAge(Myobjects[i].name, Myobjects[i].age) };

function getLenght(word) {
  return word.length;
}
  let mywordLenght = getLenght("Hello World!");

  console.log(mywordLenght);

  let Even = mywordLenght;
  if (Even % 2 ==0) {
      console.log('The world is nice and even!')
  } else {
      console.log('The world is an odd place!')
  }

