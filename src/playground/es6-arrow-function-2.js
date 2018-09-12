
const add = function (a, b) {
    console.log(arguments);
    return a + b;
}

console.log(add(55,1));

const user = {
    name: 'Andrew',
    cities: ['New York', 'Dublin', 'Sydney'],
    printPlacesLived(){
        //console.log(this.name);
        //console.log(this.cities);

        return this.cities.map((city) => this.name + ' has lived in '+ city);


    }
}

console.log(user.printPlacesLived()); 

const muliplier = {
    number: [1,2,3],
    multiplyBy: 2,
    multiply(){
        return this.number.map((numberValue) => numberValue * this.multiplyBy);
    }
}

console.log(muliplier.multiply());