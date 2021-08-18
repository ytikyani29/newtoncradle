class rope{
	constructor(body1, pointB)
	{
    
	

	var options={
		bodyA:body1,
		pointA:{x:0,y:0},
		pointB:pointB,
		length:100,
		stiffness:0.1
	}
	//create rope constraint here
    this.rope = Matter.Constraint.create (options);
	this.pointB=pointB; 
	//this.pointA= pointA;
	World.add(world,this.rope);
	}


    //create display() here 
   display(){
   var pointA=this.rope.bodyA.position;
   var pointB=this.pointB;
   console.log(pointA,pointB);
   strokeWeight(2);
   line(pointA.x,pointA.y,pointB.x,pointB.y);
   }
}
