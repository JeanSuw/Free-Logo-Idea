class Shape{
    constructor(color, text, textColor){
        this.color = setShapeColor(color); // Color for shapes
        this.text = setText(text); // Text initials
        this.textColor = setBackgroundColor(textColor);
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

    render(){
        return ``;
    }
}

class Triangle extends Shape {
    constructor(color, text, colorText){
        super(color, text, colorText);
    }
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <polygon points="150,190 50,50 290,50" style="fill:${this.getShapeColor()};stroke:purple;stroke-width:1"/>
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.getTextColor()}">${this.text}</text>
      
      </svg>`;
    }
}

class Circle extends Shape {
    constructor(color, text, colorText){
        super(color, text, colorText);
    }
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="${this.getShapeColor()}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.getTextColor()}">${this.text}</text>
      
      </svg>`;
    }
}

class Square extends Shape {
    constructor(color, text, colorText){
        super(color, text, colorText);
    }
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <rect x="50" y="50" width="150" height="150" fill="${this.getShapeColor()}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.getTextColor()}">${this.text}</text>
      
      </svg>`;
    }
    
}