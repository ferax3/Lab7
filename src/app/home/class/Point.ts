export class Point{
    x!: number;
    y!: number;
    constructor(x: number, y: number){
        this.x = x;
        this.y = y;
    }
    move(x_change: number, y_change:number){
        this.x += x_change;
        this.y += y_change;
    }
    rotate(a: number){
        const radians = a * (Math.PI / 180);
        const cos = Math.cos(radians);
        const sin = Math.sin(radians);
    
        const newX = Math.round(this.x * cos - this.y * sin);
        const newY = Math.round(this.x * sin + this.y * cos);
    
        this.x = newX;
        this.y = newY;
    }
}