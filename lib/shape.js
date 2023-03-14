class Shape{
    constructor(color, text, textColor){
        this.color = setShapeColor(color); // Color for shapes
        this.text = setText(text); // Text initials
        this.textColor = setTextColor(textColor);
    }

    setShapeColor(color){
        // color is user's input in string
        if (color.includes('#')){ // if the user starts with # for hexadecimal number
            this.color = color.toUpperCase(); 
        }else{
            this.color = color.toLowerCase();
        }
    }

    setTextColor(textColor){
        // text color is user's input in string
        if (textColor.includes('#')){
            this.textColor = textColor.toUpperCase(); 
        }else{
            this.textColor = textColor.toLowerCase();
        }
    }

    setText(text){
        this.text = text.toUpperCase();
    }

    getShapeColor(){
        return this.color;
    }

    getTextColor(){
        return this.textColor;
    }

    getText(){
        return this.text;
    }
    render(){
        return ``;
    }
}

class Triangle extends Shape {
    constructor(color, text, colorText){
        super(color, text, colorText);
    }
    render(){
        return `<polygon points="150,190 50,50 290,50" style="fill:${this.getShapeColor()};stroke:purple;stroke-width:1"/>`;
    }
}

class Circle extends Shape {
    constructor(color, text, colorText){
        super(color, text, colorText);
    }
    render(){
        return `<circle cx="150" cy="100" r="80" fill="${this.getShapeColor()}" />`;
    }
}

class Square extends Shape {
    constructor(color, text, colorText){
        super(color, text, colorText);
    }
    render(){
        return `<rect x="50" y="50" width="150" height="150" fill="${this.getShapeColor()}" />`;
    }
}

// userAnswers in a form of data
function createLogo(userAnswers){
    console.log("Check Create Logo");
    console.log(userAnswers.shape);
    switch (JSON.stringify(userAnswers.shape)){
        case "Triangle":
            const shapeTri = new Triangle(userAnswers.shapeColor, userAnswers.initial, userAnswers.textColor);
            return shapeTri;
        case "Square":
            const shapeSq = new Square(userAnswers.shapeColor, userAnswers.initial, userAnswers.textColor);
            return shapeSq;
        case "Circle":
            const shapeCir = new Circle(userAnswers.shapeColor, userAnswers.initial, userAnswers.textColor);
            return shapeCir;
        default:
            console.log("Something wrong with your input");
            break;
    }
}

function renderSVG(shapeName){
    return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    ${shapeName.render()}
      
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${shapeName.getTextColor()}">${shapeName.getText()}</text>
      
    </svg>`;
}

module.exports = {createLogo, renderSVG};