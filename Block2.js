class Block2 {
  constructor(x,y,width,height) {
      var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':0.5
      }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.visibility = 255;
    World.add(world, this.body);
  }
  display(){
   
    if(this.body.speed<12){
      var pos =this.body.position;
      push();
      rectMode(CENTER);
      
      stroke(30,30,30);
      fill(255,192,203);
      rect(pos.x ,pos.y, this.width, this.height);
      pop();
    }
    else{
      World.remove(world,this.body)
      push();
      this.visibility = this.visibility-5
      pop();
    }
      
    }
    score(){
      if(this.visibility<0 && this.visibility>-105){
        score++;
      }
    }
};