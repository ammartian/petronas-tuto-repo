function JSDate() {
    const date = new Date();
    document.getElementById("dateDemo").innerHTML = 'Date: ' + date; //standard format
    document.getElementById("dateDemoFullYear").innerHTML = 'Year: ' + date.getFullYear(); //get year
    document.getElementById("dateDemoMonth").innerHTML = 'Month: ' + date.getMonth(); //get month 
    document.getElementById("dateDemoDate").innerHTML = 'Date: ' + date.getDate(); //get Date
    document.getElementById("dateDemoHour").innerHTML = 'Hour: ' + date.getHours(); //get Hour
    document.getElementById("dateDemoMinutes").innerHTML = 'Minutes: ' + date.getMinutes(); //get Minutes
    document.getElementById("dateDemoSeconds").innerHTML = 'Seconds: ' + date.getSeconds(); //get Seconds
    document.getElementById("dateDemoDay").innerHTML = 'Day: ' + date.getDay(); //get Day
}
//NOT PRACTICAL BECAUSE DOM TAKES A LOT OF TIME TO LOAD
//Try to minimize DOM


function ageCheck() {
    let age = document.getElementById("age").value;
    let voteable = (age < 18) ? "Too young":"Old enough";
    
    document.getElementById("ageResult").innerHTML = voteable + " to vote.";
}

function tryFunction() {
    const message = document.getElementById("tryDemoResult");
    message.innerHTML = "";

    let x = document.getElementById("tryDemo").value;

    try {
        if(x == "") throw "is empty";
        if (isNaN(x)) throw "is not a number";

        x = Number(x);
        if(x > 10) throw "is too high";
        if(x < 5) throw "is too low";
    }
    catch(err) {
        message.innerHTML = "Input is " + err;
    }
    finally {
        //to empty the input box on every click
        document.getElementById("tryDemo").value = "";
    }
}

//For Syntax Error Demo
function syntaxFunction() {
    try {
        eval("alert('Hello)");
    }
    catch(err) {
        document.getElementById("syntaxDemo").innerHTML = err.name + ", " + err.message;
    }
}


//Class
class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    age() {
        let date = new Date();
        return date.getFullYear() - this.year;
    }
}

getCarAge = () => { //create function using arrow
    let myCar = new Car("Ford", 2014);

    document.getElementById("classDemo").innerHTML =
    "My car is " + myCar.age() + " years old";
}

printJSON = () => {

    let text = '{ "employees" : [' +
    '{ "firstName":"John" , "lastName":"Doe"},' +
    '{ "firstName":"Anna" , "lastName":"Smith"},' +
    '{ "firstName":"Peter" , "lastName":"Pan"} ]}';

    const obj = JSON.parse(text);

    document.getElementById("getJSON").innerHTML =
    obj.employees[2].firstName + " " + obj.employees[2].lastName;
}

//Object
createObject = () => {
    const person = {
        firstName: "Arfah",
        lastName: "Diyanah",
        age: 23,
        eyeColor: "Brown"
    };

    //Entries display all key and value pairs
    //document.getElementById("objectDemo").innerHTML = Object.entries(person);
    document.getElementById("objectDemo").innerHTML = 
    person.firstName + " " + person.lastName;

    let txt = "";
    for(let x in person) {
        txt += person[x] + " ";
    }

    document.getElementById("objectLoopDemo").innerHTML = txt;
}

objectMethod = () => {
    const car = {
        brand: "McLaren",
        name: "P1",
        year: 2021,
        carDetails: function() {
            return this.brand + " " + this.name + " " + this.year;
        }
    };

    document.getElementById("objectMethodDemo").innerHTML = car.carDetails();
}

//Accessor (Getter and Setter)
getterFunction = () => {
    const person = {
        firstName: "John",
        lastName: "Doe",
        language: "en",
        get lang() {
            return this.language;
        }
    };

    document.getElementById("getterDemo").innerHTML = person.lang;
}

setterFunction = () => {
    const person = {
        firstName: "John",
        lastName: "Doe",
        language: "",
        set lang (lang) {
            this.language = lang;
        }
    };

    person.lang = "en";
    document.getElementById("setterDemo").innerHTML = person.language;
}

betterDataQuality = () => {
    const person = {
        firstName: "John",
        lastName: "Doe",
        language: "en",
        get lang() {
            return this.language.toUpperCase();
        }
    };

    document.getElementById("betterDataQualityDemo").innerHTML = person.lang;
}

definePropertyFunction = () => {
    //1. Define object
    const obj = {
        counter: 0
    };

    //2. Define Getter and Setter
    Object.defineProperty(obj, "reset", {
        get : function () {
            this.counter = 0;
        }
    });
    Object.defineProperty(obj, "increment", {
        get : function () {
            this.counter++;
        }
    });
    Object.defineProperty(obj, "decrement", {
        get : function () {
            this.counter--;
        }
    });
    Object.defineProperty(obj, "add", {
        set : function (value) {
            this.counter += value;
        }
    });
    Object.defineProperty(obj, "subtract", {
        set : function (value) {
            this.counter -= value;
        }
    });

    //Change the counter values:
    obj.reset; //reset to 0
    obj.add = 5; //add 5
    obj.subtract = 1; //minus 1 = 4
    obj.increment //5
    obj.decrement //4

    document.getElementById("definePropertyFunctionDemo").innerHTML = obj.counter;
}

//Constructor (Blueprint)
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.nationality = "Malaysian"; //cannot add property to constructor
                                    //so need to hard code it
}

getConstructor = () => {
    //create constructor
    const father = new Person("Annuar", "Abd Ghani", 52, "black");
    const mother = new Person("Zarani", "Hashim", 50, "black");

    //Display constructor's property (person's properties) and nationality
    document.getElementById("constructorDemo").innerHTML = 
    "My father is " + father.firstName + " " + father.lastName + ". He is a " + father.nationality
    + "<br>" +
    "My mother is " + mother.firstName + " " + mother.lastName + ". She is a " + mother.nationality; 
}

getConstructorPrototype = () => {
    //create constructor
    const father = new Person("Annuar", "Abd Ghani", 52, "black");

    //create prototype
    Person.prototype.gender = "Male";
    //create function prototype
    Person.prototype.NameandGender = function() {
        return "My father is " + this.firstName + " " + this.lastName + ". He is " + father.gender;
    };

    //Display constructor's property (person's properties) and nationality
    document.getElementById("constructorPrototypeDemo").innerHTML = father.NameandGender();
}

homemadeIterable = () => {
    //create object
    myNumber = {};

    //Make it iterable
    myNumber[Symbol.iterator] = function () {
        let n = 0;
        done = false;
        return {
            next() {
                n += 10;
                if (n == 100) {done = true;}
                return { value:n, done:done};
            }
        };
    }

    //to iterate
    let text = ""
    for (const num of myNumber) {
        text += num + "<br>"
    }

    document.getElementById("homemadeIterableDemo").innerHTML = text;
}

//Sets
createSets = () => {
    const letters = new Set(["a", "b","c"]);
    console.log(letters)

    //Add values to sets
    letters.add("d");

    //Add variables to sets
    const d = "d";
    letters.add(d);

    //printeach value in sets
    let text = "";
    letters.forEach(function(value) {
        text += value + "<br>";
    })
    document.getElementById("setsValue").innerHTML = text;

    //print size
    document.getElementById("setsSize").innerHTML = letters.size;
}

//Maps
createMaps = () => {
    const fruits = new Map([
        ["apples", 500],
        ["bananas", 300],
        ["oranges", 200]
    ]);

    let text = "";
    for (const x of fruits.entries()) {
        text += x + "<br>"; 
    }

    document.getElementById("mapsDemo").innerHTML = text;
}

// Function
function argsFunction(a, b) {
    return a * b;
}

objfuncArgs = () => {
    const person = {
        fullName: function(city, country) {
            return this.firstName + " " + this.lastName + ", " +
            city + ", " + country;
        }
    }

    const father = {
        firstName: "Annuar",
        lastName: "Abd Ghani"
    }

    const mother = {
        firstName: "Zarani",
        lastName: "Hashim"
    }

    document.getElementById("objfuncArgsDemo").innerHTML = 
    person.fullName.call(father, "Kedah", "Malaysia");
}


preserveThis = () => {
    const person = {
        firstName: "Ammar",
        lastName: "Hakimi",
        display: function (){
            let x = document.getElementById("preserveThisDemo");
            x.innerHTML = this.firstName + " " + this.lastName;
        }
    }

    let display = person.display.bind(person);
    setTimeout(display, 2000) // Display after 3 seconds
}

// Class Inheritance
class Bike {
    constructor(brand) {
        this.bikename = brand;
    }

    ownership() {
        return "I have a " + this.bikename;
    }
}

class Model extends Bike {
    constructor(brand, mod) {
        super(brand);
        this.model = mod
    }

    show() {
        return this.ownership() + ", it is a " + this.model;
    }
}

classInheritance = () => {
    let myBike = new Model("Yamaha", "R1");
    document.getElementById("inheritanceDemo").innerHTML = myBike.show();
}

class BikeGS {
    constructor(brand) {
        this._bikename = brand; // use _
    }

    get bikename() {
        return this._bikename; // use _
    }
    
    set bikename(x) {
        this._bikename = x;
    }
}

classGetterSetter = () => {
    let myBikeGS = new BikeGS("Honda");
    document.getElementById("getterSetterDemo").innerHTML =
    myBikeGS.bikename; // dont use () to call;
}

// Async
// Callback
simpleCallback = () => {

    // nested function
    myDisplayer = (something) => {
        document.getElementById("simpleCallbackDemo").innerHTML = something;
    }

    myCalculator = (num1, num2, myCallback) => {
        let sum = num1 + num2;
        myCallback(sum);
    }

    myCalculator(5, 5, myDisplayer)
}

getTime = () => {

    currTime = () => {
        let d = new Date();

        document.getElementById("getTimeDemo").innerHTML =
        d.getHours() + ":" +
        d.getMinutes() + ":" +
        d.getSeconds();
    }

    setInterval(currTime, 1000); // Every 1 second
}

// Promise
promiseCode = () => {
    function myDisplayer(something) {
        document.getElementById("promiseDemo").innerHTML = something;
    }

    // Check if x == 0
    let myPromise = new Promise(function(myResolve, myReject) {
        let x = 0; //Change here to get another results

        if (x == 0) {
            myResolve("OK"); //set myResolve and myReject
        }else {
            myReject("Error");
        }
    });

    // print Promise result
    myPromise.then(
        function(value) {myDisplayer(value);},
        function(error) {myDisplayer(error)}
    );
}

// Async and Await
asyncAwait = () => {
    async function displayMessage() { // async here
        let myPromise = new Promise(function(resolve) {
            resolve("We hold onto our promises <3");
        });

        document.getElementById("asyncAwaitDemo").innerHTML = 
        await myPromise; // await here
    }

    displayMessage();
}

// HTML DOM
getFormValues = () => {
    const x = document.forms["form1"];
    let text = "";

    for (let i = 0; i < x.length; i++) {
        text += x.elements[i].value + "<br>";
    }

    document.getElementById("formValues").innerHTML = text;
}

function eventListenerFx() {
    let p1 = 5;
    let p2 = 7;

    const message = document.getElementById("ELmessage");
    message.innerHTML = "";

    var el = document.getElementById("ELFXBtn");

    try {
        if(el){
            el.addEventListener("click", function () {
                calculatePs(p1, p2);
            });
        }

        function calculatePs(a, b) {
            document.getElementById("ELDemo").innerHTML = a * b;
        }
    } catch(err) {
        message.innerHTML = "Error: " + err;
    }
}

// JS BOM
confirmBox = () => {
    var txt;
    if (confirm("Press a button!")) {
        txt = "You pressed OK!";
    } else {
        txt = "You pressed Cancel!";
    }

    document.getElementById("confirmDemo").innerHTML = txt;
}


promptBox = () => {
    let text;
    let person = prompt("Please enter your name:", "Ren");

    if(person == null || person == "") {
        text = "User cancelled the prompt.";
    } else {
        text = "Hello " + person + "! How are you today?";
    }

    document.getElementById("promptDemo").innerHTML = text;
}

// API
getExactLocation = () => {
    const x = document.getElementById("getLocationDemo");

    function getLocation() {
        try {
            navigator.geolocation.getCurrentPosition(showPosition);
        } catch {
            x.innerHTML = err;
        }
    }

    function showPosition(position) {
        x.innerHTML = "Latitude: " + position.coords.latitude + 
        "<br>Longitude: " + position.coords.longitude;
    }
}


// Web Storage API
localStorageFx = () => {
    localStorage.setItem("name", "Ammar Hakimi");
    document.getElementById("localStorageDemo").innerHTML = 
    "Local stored name: " + localStorage.getItem("name");
}

sessionStorageFx = () => {
    sessionStorage.setItem("name", "Arfah Diyanah");
    document.getElementById("sessionStorageDemo").innerHTML = 
    "session stored name: " + sessionStorage.getItem("name");
}

// JSON
accessJSON = () => {
    // JSON String
    const myJSON = '{"name": "John", "age":30, "car":null}';

    // Parse JSON String into JS Object
    const myObj = JSON.parse(myJSON);
    x = myObj.name;
    
    document.getElementById("jsonDemo").innerHTML = x;
}