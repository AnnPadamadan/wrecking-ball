class Ball {
    constructor(x, y, r){
        var options = {
            'density': 2,
            'restitution': 0.4,
        }

        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(x, y, r, options);

        World.add(world, this.body);
    }
display(){
    var pos = this.body.position;
    
    ellipseMode(CENTER);
    fill(96, 96, 96);
    ellipse(pos.x, pos.y, this.r, this.r);

}

}