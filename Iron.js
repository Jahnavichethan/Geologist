class Iron {
	constructor(x, y) {
	  var options = {
		'density':4,
		'friction': 1.0,
		'restitution':1.0
	  };
	  this.body = Bodies.rectangle(x, y, 50, 50, options);
	  this.width = 100;
	  this.height = 100;
	  World.add(world, this.body);
	};
	display(){
	  var pos = this.body.position;
	 
	  var angle = this.body.angle;
  
	  push();
	  translate(pos.x, pos.y);
	  rotate(angle);
	  fill("black")
	  rectMode(CENTER)
	  rect(0, 0, this.width, this.height);
	  pop();
	};
  };
  