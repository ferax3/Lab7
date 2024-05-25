import { Figure } from "./Figure";
import { Point } from "./Point";

export class Triangle extends Figure{
    constructor(pointList: Point[]){
        if(pointList.length!==3){
            throw new Error("Triangle has only 3 points!");
        }
        super("Trianlge", pointList);
    }
    create(){
        return "I'm the triangle!";
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