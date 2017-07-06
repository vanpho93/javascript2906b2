class Person {
    constructor(name, height, age) {
        this.name = name;
        this.height = height;
        this.age = age;
    }
}

const arrPerson = [
    new Person('Teo', 180, 15),
    new Person('Ti', 170, 16),
    new Person('Tun', 190, 14)
];

// arrPerson.forEach(e => console.log(' Xin chao, toi la ' + e.name));

const isTallEnough = arrPerson.some(e => e.height > 185);

// console.log(isTallEnough);

// function checkExist(anyArray, checkFunction) {
//     for (let i = 0; i < anyArray.length; i++) {
//         if (checkFunction(anyArray[i])) return true;
//     }
//     return false;
// }

// console.log(checkExist(arrPerson, e => e.age > 10));

function filter(anyArray, filterFunction) {
    const arrResult = [];
    anyArray.forEach(e => filterFunction(e) ? arrResult.push(e) : null);
    return arrResult;
}

// console.log(filter(arrPerson, e => e.height > 180));

const arr = arrPerson.filter(e => e.height > 175);
console.log(arr);