//arguments object - no longer bound with arrow functions
const add = (a, b) => {
    //console.log(arguments);
    return a+b;
};
console.log(add(55,1));


//this keyword - no longer bound
const user = {
    name:'Meleh',
    cities: ['Dubai', 'Hawai'],
    printPlacesLived() {
        const cityMessages = this.cities.map((city) =>  this.name + ' has lived in ' + city);
        return cityMessages;
    }
};
console.log(user.printPlacesLived());


//Challenge area
const multiplier = {
    numbers: [ 2, 3, 5, 1 ],
    multiplyBy : 2,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};
console.log(multiplier.multiply());