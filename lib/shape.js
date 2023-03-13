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
    render(){
        return ``;
    }
}

class Triangle extends Shape {
    constructor(x, y, color, text, colorText){
        super(x, y, color);
        this.text = text;
        this.colorText = colorText;
    }
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <polygon points="150,190 50,50 290,50" style="fill:${this.color};stroke:purple;stroke-width:1"/>
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.colorText}">${this.text}</text>
      
      </svg>`;
    }
}

class Circle extends Shape {
    constructor(x, y, color, text, colorText){
        super(x, y, color)
        this.text = text;
        this.colorText = colorText;
    }
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="${this.color}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.colorText}">${this.text}</text>
      
      </svg>`;
    }
}

class Square extends Shape {
    constructor(x, y, color){
        super(x, y, color);
    }
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="${this.color}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.colorText}">${this.text}</text>
      
      </svg>`;
    }
    
}