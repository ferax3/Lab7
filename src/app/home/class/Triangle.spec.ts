import { Point } from "./Point";
import { Triangle } from "./Triangle";

describe("Triangle testing", () =>{
    let triangle: Triangle;
    beforeEach(()=>{
        triangle = new Triangle([new Point(3, 1), new Point(10, 4), new Point(3, 9)]);
    });
    it("Створення екземпляру класу Triangle", ()=>{
        expect(triangle).toBeTruthy();
    });
    it("Створення трикутника з меншої кількості точок", ()=>{
       expect(() => new Triangle([new Point(3, 1), new Point(10, 4)])).toThrow(new Error('Triangle has only 3 points!'));
    });
    it("Перевірка чи створилась Triangle", ()=>{
        let a = "I'm the triangle!";
        expect(triangle.create()).toBe(a);
    });
    it("Передвинути фігуру вправо на 2од. та вгору на 3", ()=>{
        let tria_temp = [new Point(5, 4), new Point(12, 7), new Point(5, 12)];
        triangle.moveFigure(2, 3);
        expect(triangle.pointList).toEqual(tria_temp);
    });
    it("Збільшити фігуру на 2", ()=>{
        let tria_temp = [new Point(5, 3), new Point(12, 6), new Point(5, 11)];
        triangle.changeSize(2);
        expect(triangle.pointList).toEqual(tria_temp);
    });
    it("Зміна кольору на 'purple'", ()=>{
        let tria_color = 'purple';
        triangle.changeColor('purple');
        expect(triangle.color).toEqual(tria_color);
    }); 
    it("Поворот Triangle на 90 градусів", ()=>{
        let tria_temp = [new Point(-1, 3), new Point(-4, 10), new Point(-9, 3)];
        triangle.rotateFigure(90);
        expect(triangle.pointList).toEqual(tria_temp);
    });
    it("Поворот Triangle на 180 градусів", ()=>{
        let tria_temp = [new Point(-3, -1), new Point(-10, -4), new Point(-3, -9)];
        triangle.rotateFigure(180);
        expect(triangle.pointList).toEqual(tria_temp);
    });
});