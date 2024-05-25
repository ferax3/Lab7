import { Point } from "./Point";

export abstract class Figure {
    name!: string;
    pointList!: Point[];
    color!: string;
    constructor(name: string, pointList: Point[]) {
        this.name = name;
        this.pointList = pointList;
        this.color = 'red';
    }
    abstract create(): any;
    moveFigure(x: number, y: number){
        for(let point of this.pointList){
            point.move(x, y);
        }
    }
    changeSize(a:number){
        for(let point of this.pointList){
            point.move(a, a);
        }
    }
    changeColor(a:string){
        this.color = a;
    }
    rotateFigure(a: number){
        for(let point of this.pointList){
            point.rotate(a);
        }
    }
    // abstract moveFigure(x: number, y: number): any;
    // abstract changeSize(a:number): any;
    // abstract changeColor(a:string):any;
    // abstract rotateFigure(a: number):any;
}