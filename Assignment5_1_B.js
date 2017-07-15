var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Shape = (function () {
    function Shape() {
    }
    return Shape;
}());
var Polygon = (function (_super) {
    __extends(Polygon, _super);
    function Polygon() {
        _super.apply(this, arguments);
    }
    Polygon.prototype.Area = function () {
        console.log("Area of Polygon calculated");
    };
    return Polygon;
}(Shape));
var Hexagon = (function (_super) {
    __extends(Hexagon, _super);
    function Hexagon() {
        _super.apply(this, arguments);
    }
    Hexagon.prototype.Area = function () {
        console.log("Area of Hexagon calculated");
    };
    return Hexagon;
}(Shape));
var Rectangle = (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        _super.apply(this, arguments);
    }
    Rectangle.prototype.Area = function () {
        console.log("Area of Rectangle calculated");
    };
    return Rectangle;
}(Shape));
// let s = new Shape();     //ERROR
var s = new Polygon(); //pointer to base class can contain a derived class object
s.Area(); //call Area() of Polygon
s = new Hexagon();
s.Area(); //call Area() of Hexagon
var p = new Polygon();
var h = new Hexagon();
var r = new Rectangle();
CalculateArea(p);
CalculateArea(h);
CalculateArea(r);
function CalculateArea(s) {
    s.Area();
}
