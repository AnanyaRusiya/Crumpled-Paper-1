class Paper {
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.1,
            friction:0.1,
            density:1.2,
        }
        this.radius=radius;
        this.body=Bodies.circle(x,y,radius,options);
        
        World.add(world,this.body);
    }
    display(){
        this.image=loadImage("paper.png");
        var pos =this.body.position;
         push();
        ellipseMode(RADIUS);
        fill("purple");
        ellipse(pos.x, pos.y, this.radius);
        pop();
    }
}
