class Raindrops {
    construc(random(50,350),30,random(50,80),random(50,80)){
      
      this.image = loadImage("sprites/bird.png");
    }
    display(){
      this.body.position.x = mouseX;
      this.body.position.y = mouseY;
      super.display();
    }
}