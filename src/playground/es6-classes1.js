class Person {
    constructor(name ='anonymus', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        //return 'Hi. I am ' + this.name + '!' ;
        return `Hi, I am ${this.name}.`;
    }
    getDescription(){
        return `${this.name} is ${this.age} years old.`;
    }

}

class Student extends Person {
    constructor(name, age, major){
        super(name, age);                                             //OVERIDING CONSTRUCTOR
        this.major = major;
    }
    hasMajor(){
       return !!this.major;  //returns true (!this.major returns false)
    }
    getDescription(){
        let description = super.getDescription();                     //OVERIDING METHOD
        if(this.hasMajor()) {
            description += ` Their major is: ${this.major}`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation){
        super(name, age);                                             //OVERIDING CONSTRUCTOR
        this.homeLocation = homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();                           //OVERRIDING METHOD
        if(this.homeLocation)  {
            greeting += ` I'm visiting from ${this.homeLocation}`;
        }
        return greeting;
    }
}

const me = new Traveler('Meleh', 23, 'Hawaii');
console.log(me.getGreeting());


const other = new Traveler(undefined,undefined, 'nowwhere');
console.log(other.getGreeting());

