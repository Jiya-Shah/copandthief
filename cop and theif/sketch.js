var cop, copImage;
var bg, bgImage;
var car, carImage;
var bike, bikeImage;
var thief, thiefImage;
var coinBag, coinBagImage;
var coin, coinImage;
var jewel, jewelImage;

function preload()
{
    bgImage=loadImage("./assets/background3.png");
    copImage=loadImage("./assets/cop.png");
    thiefImage=loadImage("./assets/thief.png");
    
    coinImage=loadImage("./assets/coin.jpg");
    coinBagImage=loadImage("./assets/coinBag.png")
    jewelImage=loadImage("./assets/jewels.jpg");


}
function setup() {
  createCanvas(900, 600);
  //adding the background
  bg  = createSprite(450,300,width*2,height);
  bg.addImage(bgImage);
 // bg.scale=0.9;
  bg.velocityX=-4;
  bg.x=bg.width/2;

  //creating cop chasing the thief
  cop = createSprite(40, 450, 30, 50);
  cop.addImage("cop",copImage);
  cop.scale=0.3;
  
  //adding thief escaping
  thief = createSprite(width/2-80, 450, 30, 50);
  thief.addImage("thief", thiefImage);
  thief.scale=0.2
}

function draw() {
  background("#BDA297");
  drawSprites();
  //console.log(bg.x);
  //making infinite background
  if(bg.x<0)
  {
      bg.x=bg.width/2;
  }
  var rand=Math.round(random(1,3));
  console.log(rand);
  if(rand==1)
  {
    spawningJewels();
  }
  else if(rand==2)
  {
    spawningCoins(); 
  }
  else if(rand===3)
  {
    spawningcoinBags();
  }

}

function spawningJewels()
 {
  if(frameCount%200===0)
  {
      jewel=createSprite(910,450,10,40);  
      jewel.addImage(jewelImage);
      jewel.scale=0.2;
      jewel.velocityX=-3;
      jewel.lifetime=300;
  }
}
function spawningCoins()
 {
  if(frameCount%200===0)
  {
      coin=createSprite(910,450,10,40);  
      coin.addImage(coinImage);
      coin.scale=0.01;
      coin=velocityX=-3;
      coin.lifetime=300;
  }
}
function spawningcoinBags()
 {
  if(frameCount%200===0)
  {
      coinBag=createSprite(910,450,10,40);  
      coinBag.addImage(coinBagImage);
      coinBag.scale=0.1;
      coinBag.velocityX=-3;
      coinBag.lifetime=300;
  }
}
