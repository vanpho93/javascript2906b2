/*
    Class Point -> x: ? y: ?
    Class Line -> diemA: Point, diem: Point, getLength -> phuong thuc
*/

function Point(x, y) {
    this.x = x;
    this.y = y;
}

function Line(pointA, pointB) {
    this.pointA = pointA;
    this.pointB = pointB;
    this.getLength = function() {
        const dx = this.pointA.x - this.pointB.x;
        const dy = this.pointA.y - this.pointB.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}

const pA = new Point(0, 0);
const pB = new Point(0, 1);
const lAB = new Line(pA, pB);
console.log(lAB.getLength());