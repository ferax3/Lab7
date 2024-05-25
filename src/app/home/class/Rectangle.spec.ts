import { Point } from "./Point";
import { Rectangle } from "./Rectangle";

describe("Rectangle testing", () =>{
    let rectangle: Rectangle;
    beforeEach(()=>{
        rectangle = new Rectangle([new Point(2, 1), new Point(8, 1), new Point(8,4), new Point(2,4)]);
    });
    it("Створення екземпляру класу Rectangle", ()=>{
        expect(rectangle).toBeTruthy();
    });
    it("Створення прямокутника з меншої кількості точок", ()=>{
       expect(() => new Rectangle([new Point(3, 1), new Point(10, 4)])).toThrow(new Error('Quadrangle has only 4 points!'));
    });
    it("Створення чотирикутника, що не є прямокутником", ()=>{
        expect(() => new Rectangle([new Point(2, 1), new Point(8, 1), new Point(8, 4), new Point(4, 4)])).toThrow(new Error('The given points do not form a rectangle!'));
     });
    it("Перевірка чи створилась Rectangle", ()=>{
        let a = "I'm the Rectangle!";
        expect(rectangle.create()).toBe(a);
    });
    it("Передвинути фігуру вправо на 2од. та вгору на 3", ()=>{
        let rect_temp = [new Point(4, 4), new Point(10, 4), new Point(10,7), new Point(4,7)];
        rectangle.moveFigure(2, 3);
        expect(rectangle.pointList).toEqual(rect_temp);
    });
    it("Збільшити фігуру на 2", ()=>{
        let rect_temp = [new Point(4, 3), new Point(10, 3), new Point(10,6), new Point(4,6)];
        rectangle.changeSize(2);
        expect(rectangle.pointList).toEqual(rect_temp);
    });
    it("Зміна кольору на 'orange'", ()=>{
        let rect_temp = 'orange';
        rectangle.changeColor('orange');
        expect(rectangle.color).toEqual(rect_temp);
    }); 
    it("Поворот Rectangle на 90 градусів", ()=>{
        let rect_temp = [new Point(-1, 2), new Point(-1, 8), new Point(-4, 8), new Point(-4, 2)];
        rectangle.rotateFigure(90);
        expect(rectangle.pointList).toEqual(rect_temp);
    });
    it("Поворот Triangle на 180 градусів", ()=>{
        let rect_temp = [new Point(-2, -1), new Point(-8, -1), new Point(-8, -4), new Point(-2, -4)];
        rectangle.rotateFigure(180);
        expect(rectangle.pointList).toEqual(rect_temp);
    });
});