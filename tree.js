class Tree{

    constructor(x,y,r){
    
        var option={
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
            
        }
        
        this.r=r
        this.image=loadImage("stone.png")  
    this.body= Bodies.circle(x,y,r,option);
    World.add(world,this.body);
    
    }
    
    
    
    
    
    
    display(){
    
        var pos= this.body.position;
    
        fill("yellow");
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
    
    }
        
    }
