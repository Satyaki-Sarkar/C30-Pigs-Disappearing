class Log extends BaseClass{
  constructor(x,y,height,angle){
    super(x,y,20,height,angle);
    this.image = loadImage("sprites/wood2.png");
    Matter.Body.setAngle(this.body, angle);
    this.visibility=255;
  }

    display(){
    if (this.body.speed<4.5){
      super.display();
    }else {
      World.remove(world,this.body);
      this.visibility=this.visibility-5;
      push();
      tint(255,this.visibility);
      image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
      pop();
    }
  }
}