class Bob {
    constructor(x,y,r) {
      var options = {
          'restitution':1.3,
          'friction':2.0,
          'density':3.0,
          'isStatic':false
      }
      this.x=x;
        this.y=y;
        this.r=r;
      this.body = Bodies.circle(x, y,40, options);
      this.width = 90;
      this.height = 90;
   this.body.collisionradius=100;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle=this.body.angle;
      push();
      translate(pos.x,pos.y);
      ellipseMode(CENTER);
      strokeWeight(4);
      stroke("black");
      fill("lightgrey");
      ellipse(0,0, this.width, this.height);
      pop();
    }
  } 
