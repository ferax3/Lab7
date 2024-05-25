import { Figure } from "./Figure";
import { Point } from "./Point";

export class Rectangle extends Figure{
    constructor(pointList: Point[]){
        if(pointList.length!==4){
            throw new Error("Quadrangle has only 4 points!");
        }
        if (!Rectangle.isRectangle(pointList)) {
            throw new Error("The given points do not form a rectangle!");
        }
        super("Rectangle", pointList);
    }
    static isRectangle(pointList: Point[]) {
        const distanceSquared = (p1: Point, p2: Point): number => {
            return (p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2;
        };

        const diag1 = distanceSquared(pointList[0], pointList[2]);
        const diag2 = distanceSquared(pointList[1], pointList[3]);

        return diag1 === diag2;
    }
    create(){
        return "I'm the Rectangle!";
    }
    // moveFigure(x: number, y: number){
    //     for(let point of this.pointList){
    //         point.move(x, y);
    //     }
    // }
    // changeSize(a:number){
    //     for(let point of this.pointList){
    //         point.move(a, a);
    //     }
    // }
    // changeColor(a:string){
    //     this.color = a;
    // }
    // rotateFigure(a: number){
    //     for(let point of this.pointList){
    //         point.rotate(a);
    //     }
    // }
}