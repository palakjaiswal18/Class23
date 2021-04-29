class Box{
    constructor(x,y,width,height){

        var options = {
            restitution:1.0
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.w = width;
        this.h = height;
        World.add(world,this.body);
        console.log(this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        //store /save the current settings
         push();
         translate(pos.x, pos.y);
         rotate(angle);
        rectMode(CENTER);
        rect(0,0, this.w,this.h);
        //revert back to original settings
        pop();
    }
}