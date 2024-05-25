import { Figure } from "./Figure";
import { Point } from "./Point";

export class Line extends Figure{
    constructor(pointList: Point[]){
        if(pointList.length!==2){
            throw new Error("Line has only 2 points!");
        }
        super("Line", pointList);
    }
    create(){
        return "I'm the line";
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