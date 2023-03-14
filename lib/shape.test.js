const {Circle, Square, Triangle} = require('./shape.js');

describe('Color name for Circle', () => {
    it('Should have red Circle', () => {
        const circleTest = new Circle("", "ILU", "black");
        circleTest.setShapeColor("red");
        expect(circleTest.getShapeColor()).toEqual("red");
    });
});

describe('Hex color for Square', () => {
    it('hex color for square is correspond to given value (darkOrchid = "#9932CC")', () => {
        const squareTest = new Square("", "IOU", "pink");
        const darkOrchid = "#9932CC";
        squareTest.setShapeColor(darkOrchid);
        expect(squareTest.getShapeColor()).toEqual(darkOrchid);
    });
});

describe('Triangle Render', () => {
    const favColors = { mediumSpringGreen: "#00FA9A", rebeccaPurple: "#663399" };
    const triangleTest = new Triangle();
    triangleTest.setText("njs");
    triangleTest.setTextColor(favColors.mediumSpringGreen);
    triangleTest.setShapeColor(favColors.rebeccaPurple);
    
    it('Renders a shape of a triangle with color', () => {
        const renderTest =`<polygon points="150,190 50,50 290,50" fill="${favColors.rebeccaPurple}"/>`
        expect(triangleTest.render()).toEqual(renderTest);
    });
    it('Renders initials inside a triangle with color text', () => {
        const renderTextTest =`<text x="150" y="125" font-size="60" text-anchor="middle" fill="${favColors.mediumSpringGreen}">NJS</text>`
        expect(triangleTest.renderText()).toEqual(renderTextTest);
    });
});  