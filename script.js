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