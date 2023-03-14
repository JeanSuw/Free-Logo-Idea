const {Circle, Square, Triangle} = require('./shape.js');

describe('Circle', () => {
    test('Should have red Circle', () => {
        const circleTest = new Circle("", "ILU", "Black");
        circleTest.setShapeColor("red");
        expect(circleTest.getShapeColor()).toEqual("red");
    });
});
