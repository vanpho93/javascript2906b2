function Employee(name, age) {
    this.name = name;
    this.getAge = function() {
        return age;
    }
    this.setAge = function(newAge) {
        if (newAge > 0) {
            age = newAge;
        } else {
            throw 'Tuoi khong the nho hon 0';
        }
    }
}
const khoa = new Employee('Khoa Pham', 30);
console.log(khoa.getAge());
try {
    khoa.setAge(-32);
} catch(err) {
    console.log(err);
}
console.log(khoa.getAge());
