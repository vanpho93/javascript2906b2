/*
    Class Point -> x: ? y: ?
    Class Line -> diemA: Point, diem: Point, getLength -> phuong thuc
*/

// function Point(x, y) {
//     this.x = x;
//     this.y = y;
// }

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

// function Line(pointA, pointB) {
//     this.pointA = pointA;
//     this.pointB = pointB;
//     this.getLength = function() {
//         const dx = this.pointA.x - this.pointB.x;
//         const dy = this.pointA.y - this.pointB.y;
//         return Math.sqrt(dx * dx + dy * dy);
//     }
// }

class Line {
    constructor(pointA, pointB) {
        this.pointA = pointA;
        this.pointB = pointB;
    }

    getLength() {
        const dx = this.pointA.x - this.pointB.x;
        const dy = this.pointA.y - this.pointB.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}

// function Triangle(pointA, pointB, pointC) {
//     this.pointA = pointA;
//     this.pointB = pointB;
//     this.pointC = pointC;
//     this.getPerimeter = function() {
//         const l1 = new Line(this.pointA, this.pointB);
//         const l2 = new Line(this.pointC, this.pointB);
//         const l3 = new Line(this.pointA, this.pointC);
//         return l1.getLength() + l2.getLength() + l3.getLength();
//     }
// }

class Triangle {
    constructor(pointA, pointB, pointC) {
        this.pointA = pointA;
        this.pointB = pointB;
        this.pointC = pointC;
    }

    getPerimeter() {
        const l1 = new Line(this.pointA, this.pointB);
        const l2 = new Line(this.pointC, this.pointB);
        const l3 = new Line(this.pointA, this.pointC);
        return l1.getLength() + l2.getLength() + l3.getLength();
    }
}

const pA = new Point(0, 0);
const pB = new Point(0, 1);
const pC = new Point(1, 0);
const lAB = new Line(pA, pB);
const tABC = new Triangle(pA, pB, pC);
// console.log(lAB.getLength());
console.log(tABC.getPerimeter());