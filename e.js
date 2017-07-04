//function class

// name, age

function Car(brach, year) {
    this.brach = brach;
    this.year = year;
}

function Employee(name, age, car) {
    this.name = name;
    this.age = age;
    this.car = car;
    this.sayHello = function () {
        console.log('Xin chao, toi la ' + this.name);
    }
    this.incrAge = function() {
        this.age++;
    }
}

const y = new Car('Honda', 2017);

const khoa = new Employee('Khoa Pham', 30, y);
const pho = new Employee('Pho', 18);
console.log(khoa.car.brach);
// pho.incrAge();
// console.log(pho);
// pho.sayHello();

// console.log(khoa.name);
// console.log(pho);
