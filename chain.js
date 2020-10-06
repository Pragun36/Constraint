class Chain{
constructor(x,y){

var options = {
bodyA:x,
bodyB:y,
length:75,
stiffness:0.75}

this.chain = Constraint.create(options)
World.add(world,this.chain)}

display(){
line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y)}}