class Shape{
    constructor(x, y, color){
        this.x = x;
        this.y = y;
        this.color = color;
    }
    setColor(color){
        this.color = color;
    }
    getColor(){
        return this.color;
    }
    getX(){
        return this.x;
    }
    getY(){
        return this.y;
    }
}

class Triangle extends Shape {
    constructor(x, y, color, base, height){
        super(x, y, color);
        this.base = base;
        this.height = height;
    }
    getBase(){
        return this.base;
    }
    getHeight(){
        return this.height;
    }
}

class Circle extends Shape {
    constructor(x, y, color, radius){
        super(x, y, color);
        this.radius = radius;
    }
    getRadius(){
        return this.radius;
    }
}

class Square extends Shape {
    constructor(x, y, color, width, height){
        super(x, y, color);
        this.width = width;
        this.height = height;
    }
    getWidth(){
        return this.width;
    }
    getHeight(){
        return this.height;
    }
}