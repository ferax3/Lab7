import { Line } from "./Line";
import { Point } from "./Point";

describe("Line testing", () =>{
    let line: Line;
    beforeEach(()=>{
        line = new Line([new Point(3, 1), new Point(10, 4)]);
    });
    it("Створення екземпляру класу Line", ()=>{
        expect(line).toBeTruthy();
    });
    it("Створення лінії з більшої кількості точок", ()=>{
       expect(() => new Line([new Point(3, 1), new Point(10, 4), new Point(12, 6)])).toThrow(new Error('Line has only 2 points!'));
    });
    it("Перевірка чи створилась Line", ()=>{
        let a = "I'm the line";
        expect(line.create()).toBe(a);
    });
    it("Передвинути фігуру вправо на 2од. та вгору на 3", ()=>{
        let line_temp = [new Point(5, 4), new Point(12, 7)];
        line.moveFigure(2, 3);
        expect(line.pointList).toEqual(line_temp);
    });
    it("Збільшити фігуру на 2", ()=>{
        let line_temp = [new Point(5, 3), new Point(12, 6)];
        line.changeSize(2);
        expect(line.pointList).toEqual(line_temp);
    });
    it("Зміна кольору на 'blue'", ()=>{
        let line_color = 'blue';
        line.changeColor('blue');
        expect(line.color).toEqual(line_color);
    }); 
    it("Поворот Line на 90 градусів", ()=>{
        let line_temp = [new Point(-1, 3), new Point(-4, 10)];
        line.rotateFigure(90);
        expect(line.pointList).toEqual(line_temp);
    });
    it("Поворот Line на 180 градусів", ()=>{
        let line_temp = [new Point(-3, -1), new Point(-10, -4)];
        line.rotateFigure(180);
        expect(line.pointList).toEqual(line_temp);
    });
});