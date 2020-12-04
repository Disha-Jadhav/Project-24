class ground
{
    constructor(x, y, width)
    {
        var options = 
        {
            isStatic: true
        } 

        this.body = Bodies.rectangle(width/2, 680, width, 10 , options);
        this.width = width;
        this.height = 50;
        
        World.add(world, this.body);
    }
    display()
    {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y)
        rectMode(CENTER);
        stroke("green");
        fill("green");
        rect(0, 0, this.width, this.height);
        pop();
    }
}