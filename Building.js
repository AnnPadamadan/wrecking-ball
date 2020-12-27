class Building {
    constructor(x, y, w, h){
        

        this.x = x;
        this.y = y;
        this.w  = w;
         this.h = h;
        this.body = Bodies.rectangle(x, y, w, h);

        World.add(world, this.body);
    }
display(){
    var pos = this.body.position;
    noStroke();
    rectMode(CENTER);
    fill(96, 96, 96);
    rect(pos.x, pos.y, this.w, this.h);

}

}