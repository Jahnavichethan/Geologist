class Stone{
	constructor(x,y,r)
	{
	 
		var options = {
			'restitution':0.8,
			'friction':3,
			'density':30
		}

		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-10)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			fill("grey");
			ellipse(0,0,this.r,this.r);

			pop()
	}

}