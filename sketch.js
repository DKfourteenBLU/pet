//Create variables here
var dog,happyDog,foodS,database,foodStock,dogImg
function preload()
{
  //load images here
  dogImg=loadImage("images/doglmg.png")
  dog1=loadImage("images/doglmg1.png")
}

function setup() {
  database=firebase.database()
	createCanvas(500, 500);
  dog=createSprite(250,300,150,150)
 dog.addImage(dogImg)
foodStock=database.ref('food')
foodStock.on("value",readStock)
}


function draw() {  

background(46, 139, 87)
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dog1)
}
  drawSprites();
  text("foodRemaining"+foodS,170,200)
  text("note:press up arrow key to feed milk ",130,10,300,20)
  //add styles here

}
function readStock(data){
  foodS=data.val();

}
function writeStock(x){
  database.ref('/').update({

  })
}
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;

}
}

database.ref('/').update({
food:x
})
