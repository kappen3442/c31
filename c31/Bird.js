class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
this.smokeimage=loadImage("sprites/smoke.png")
this.prr=[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.velocity.x>10 && this.body.position.x>220){
    var post=[this.body.position.x,this.body.position.y]
    //console.log(post)

    this.prr.push(post)
    }
    for(var i=0;i<this.prr.length;i++){
    image(this.smokeimage,this.prr[i][0],this.prr[i][1])

    }
  }
}
