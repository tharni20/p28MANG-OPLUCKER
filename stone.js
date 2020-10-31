class Stone {    
    constructor(x, y,radius) {
        var options = {
            'isStatic': false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
    
        this.body = Bodies.circle(x,y,radius,options)
        this.radius = radius;
        
        this.image = loadImage ("stone.png");
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle =this.body.angle;
        push ();
        translate(pos.x,pos.y);
        rotate(angle);
       // ellipseMode(RADIUS);
        strokeWeight(4);
        stroke("pink");
        fill("purple");
        //ellipse(0,0,this.radius,this.radius);
        imageMode (CENTER);
        image(this.image,0,0,40,40);
        pop();
      }
    };