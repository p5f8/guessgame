// D:\bittorrent\[FreeTutorials.Us] Udemy - the-complete-javascript-course\05 Advanced JavaScript_ Objects and Functions
// 060 Bind_ Call and Apply.mp4

var pablo = {
    name: 'Pablo',
    age: 39,
    job: 'Coder',
    presentation: function(style, timeOfDay) {
        if(style === 'formal') {
            console.log('formal ' + timeOfDay + ' age: ' + this.age + ' ' + this.name);
        } else if(style === 'friendly') {
            console.log('friendly ' + timeOfDay + ' age: ' + this.age + ' ' + this.name);
        }
    }
};

var almerita = {
    name: 'Almerita',
    age: 64,
    job: 'Saleswoman'
}

pablo.presentation('formal', 'morning');
pablo.presentation.call(almerita, 'formal', 'night');

pablo.presentation.apply(almerita, [ 'formal', 'night' ]);

var pabloFriendly = pablo.presentation.bind(pablo, 'friendly');
pabloFriendly('formal', 'night');


var years = [1990, 1965, 1937, 2005, 1998, 2018];

function arrayCalc(arr, fn) {
    var arrRes = [];
    
    for(var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }

    return arrRes;
}

function calculateAge(year) {
    return (2018 - year);
}

function isFullAge(limit, age) {
    return age >= limit;
}

var ages = arrayCalc(years, calculateAge);

var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));

console.log('fullJapan: ' + fullJapan);


// D:\bittorrent\[FreeTutorials.Us] Udemy - the-complete-javascript-course\05 Advanced JavaScript_ Objects and Functions
// 059 Closures.mp4
/*
function retirement(retirementAge) {
    var msg = ' years left until retirement.';
    return function (yearOfBirth) {
        var age = 2018 - yearOfBirth;
        console.log((retirementAge - age) + msg);
    }
}

var retirementUS = retirement(66);
retirementUS(1979);


function interviewQuestion(job) {
    if (job == 'Teacher') {
        return function (name) {
            console.log(name + ' ' + job);

        }
    } else if (job == 'Designer') {
        return function (name) {
            console.log(name + ' ' + job);
        }
    } else if (job == 'Coder') {
        return function (name) {
            console.log(name + ' ' + job);
        }
    } else {
        return function (name) {
            console.log(name + ' ' + job);
        }
    }
}

function interviewQuestion(job) {
    return function (name) {
        if (job == 'Teacher') {
            console.log(name + ' ' + job);
        } else if (job == 'Designer') {
            console.log(name + ' ' + job);
        } else if (job == 'Coder') {
            console.log(name + ' ' + job);
        } else {
            console.log(name + ' ' + job);
        }
    }
}

var teacher = interviewQuestion('Teacher');
teacher('John');

interviewQuestion('Coder')('Pablo');

interviewQuestion('Firefighter')('San');
*/

//retirement(66)(1979);

// D:\bittorrent\[FreeTutorials.Us] Udemy - the-complete-javascript-course\05 Advanced JavaScript_ Objects and Functions
// 058 Immediately Invoked Function Expressions (IIFE).mp4
// Lecture IIFE (Immediately Invoked Function Expressions)

/*
 function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
 }

 game();

 var x = 200;

 // IIFE is for data privace 
 // this pattern doesn't interfere at global scope
 // really nice
 (function (goodluck) {
    var score = Math.random() * 10;
    console.log('inside IIFE - x = ' + x);
    x = 30;
    console.log('inside IIFE - x = ' + x);
    console.log(score >= 5 - goodluck);
})(3); // IIFE

console.log('outside IIFE - x = ' + x);
// console.log('outside IIFE - score = ' + score);// throw an error

*/
// D:\bittorrent\[FreeTutorials.Us] Udemy - the-complete-javascript-course\05 Advanced JavaScript_ Objects and Functions
// 057 First Class Functions_ Functions Returning Functions.mp4
/*
function interviewQuestion(job) {
    if(job === 'Designer') {
        return function(name) {
            console.log(name + ', can you please what UX design is?')
        }
    } else if(job === 'Teacher') {
        return function(name) {
            console.log(name + ', what subject do you teach?')
        }
    } else if(job === 'Coder') {
        return function(name) {
            console.log(name + ', what programming language do you use?')
        }
    } else {
            return function(name) {
                console.log('Hello ' + name + ', what do you do?')
            }
    }
}

var teacherQuestion = interviewQuestion('Teacher');
teacherQuestion('John');

var designerQuestion = interviewQuestion('Designer');
designerQuestion('Maria');

var coderQuestion = interviewQuestion('Coder');
coderQuestion('Pablo');

var defaultQuestion = interviewQuestion('Bricklayer')('José');
//defaultQuestion('José');
*/

// Good questions JS
// https://github.com/h5bp/Front-end-Developer-Interview-Questions
// https://www.youtube.com/watch?v=MY0UBGX2FtA
// 1.) What is the return type of logical operators (||, &&)? If the candidate answers 'Boolean', I ask them to explain, how does "var a = a || {};" work. 
// 
// 2.) How is the length of an array determined? What will be the output of this code?
// var a = []; 
// a[10] = 5; 
// console.log(a.length);
// a[-1] = 5; 
// console.log(a.length);
// 
// 3.) Do we get keys from the prototypes of an object in the for..in loop? Why don't we get the properties of Object, like 'toString'?
// 
// 4.) Explain the behavior of the keyword 'this'? 
// 
// 5.) What happens if you invoke a constructor, but forget to add keyword 'new' before it? 
// 
// 6.) How many times can we call 'then' on the same promise? What will happen in this code:
// var a = callServer();
// a.then(...);
// a.then(...);
// 
// What happens if we call 'then' on a promise that was already resolved before? 
// 
// 7.) What is a clojure? Most people know the practical aspects, but have a probelm explaining it, so here it is best just to ask for code sample.
// 


// D:\bittorrent\[FreeTutorials.Us] Udemy - the-complete-javascript-course\05 Advanced JavaScript_ Objects and Functions
// 056 First Class Functions_ Passing Functions as Arguments.mp4

/*
var years = [1990, 1965, 1937, 2005, 1998, 2018];

function arrayCalc(arr, fn) {
    var arrRes = [];
    
    for(var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }

    return arrRes;
}

function calculateAge(year) {
    return (2018 - year);
}

function isFullAge(age) {
    return age >= 18;
}

function maxHeartRate(age) {
    return 207 - (0.67 * age);
}

var funcaoDoida = function (year) {
    return 2018 - year + 1 * 9;
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var maxRates = arrayCalc(ages, maxHeartRate);
var doidos = arrayCalc(years, funcaoDoida);


console.log(ages);
console.log(fullAges);
console.log(maxRates);
console.log(doidos);
*/

// D:\bittorrent\[FreeTutorials.Us] Udemy - the-complete-javascript-course\05 Advanced JavaScript_ Objects and Functions
// 055 Primitives vs_ Objects.mp4

/*
// Primitives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

// Objects
var obj1 = {
    name : 'Pablo',
    age : 39
};
var obj2 = obj1;
obj1.age = 40;

console.log(obj1.age);
console.log(obj2.age);

// Functions
var age = 27;
var obj  = {
    name: 'John',
    city: 'Lisbon'
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
};

change(age, obj);

console.log(age);
console.log(obj.city);
*/

// D:\bittorrent\[FreeTutorials.Us] Udemy - the-complete-javascript-course\05 Advanced JavaScript_ Objects and Functions
// 054 Creating Objects_ Object_create.mp4

// Object creator
// MOST USED IS FUNCTION CONSTRUCTOR
/*
var personProto = {
    calculateAge: function() {
        console.log(2018 - this.yearOfBirth)
    },
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1999;
john.job = 'Teacher';


var jane = Object.create(personProto, 
{
    name : { value : 'Jane'},
    yearOfBirth : { value : 1969},
    job : { value : 'Designer'}
});
    
john.calculateAge();
jane.calculateAge();
*/

// D:\bittorrent\[FreeTutorials.Us] Udemy - the-complete-javascript-course\05 Advanced JavaScript_ Objects and Functions
// 053 The Prototype Chain in the Console.mp4
/*

// Function constructor

var pablo = {
    name : 'Pablo',
    yearOfBirth : 1979,
    job : 'coder'
};

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.calculateAge2016 = function() {
       console.log(2016 - this.yearOfBirth);
    }
};

Person.prototype.calculateAge = function() {
    console.log(2018 - this.yearOfBirth);
}

Person.prototype.lastName = 'Silva';

var john = new Person('John', 1989, 'teacher');
var almerita = new Person("Almerita", 1954, 'vendor');
var danilo = new Person('Danilo', 1941, 'retired');

john.calculateAge();
almerita.calculateAge();
danilo.calculateAge();

console.log(john.lastName);
console.log(almerita.lastName);
console.log(danilo.lastName);

*/

// D:\bittorrent\[FreeTutorials.Us] Udemy - the-complete-javascript-course\05 Advanced JavaScript_ Objects and Functions
// 052 Creating Objects_ Function Constructors.mp4

// Function constructor
/*
var pablo = {
    name : 'Pablo',
    yearOfBirth : 1979,
    job : 'coder'
};

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.calculateAge2016 = function() {
       console.log(2016 - this.yearOfBirth);
    }
};

Person.prototype.calculateAge = function() {
    console.log(2018 - this.yearOfBirth);
}

Person.prototype.lastName = 'Silva';

var john = new Person('John', 1989, 'teacher');
var almerita = new Person("Almerita", 1954, 'vendor');
var danilo = new Person('Danilo', 1941, 'retired');

john.calculateAge();
almerita.calculateAge();
danilo.calculateAge();

console.log(john.lastName);
console.log(almerita.lastName);
console.log(danilo.lastName);

*/

// type coercion study - convertion between types (type casting)

// There are only 3 types of convertion: 
//  To string
//  To boolean
//  to number

/*
// some nice tricks!!!!
// Enjoy, :-)

console.log(foo());

function foo() {
    return bar();
    var bar = function() {
        return 3;
    };
    var bar = function() {
        return 8;
    };
}

function foo() {
    var bar = function() {
        return 3;
    }
    return bar();

    var bar = function() {
        return 8;
    }
}

function foo() {
    function bar() {
        return 3;
    }
    return bar();
    function bar() {
        return 8;
    }
}

*/