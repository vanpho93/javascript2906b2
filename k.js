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

// const isTall = arrPerson.every(e => e.height > 175);
// console.log(isTall);

// const tiIndex = arrPerson.findIndex(e => e.height > 200);
// console.log(tiIndex);

const e = arrPerson.find(e => e.name === 'Tun');
console.log(e);