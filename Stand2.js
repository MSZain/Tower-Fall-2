class Stand2 {
    constructor(x, y, width, height) {
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image= loadImage("st2.png")
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos = this.body.position
        push();
        //fill(196, 164, 132)
        //stroke(152,251,152);
        //strokeWeight(3);
        //translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width, this.height);
        pop();
      }
}