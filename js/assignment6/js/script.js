

var background = document.getElementById('road');
background.id='road';
background.style.left="0px";
background.style.top="0px";
background.style.width="400px";
background.style.height="600px";

function randomGenerator()
	{
		var random= Math.random();
		if(random>=0 && random<0.25)
		{
			return 0;
		}
		else if(random >=0.25 && random <0.5)
		{
			return (100);
		}
		else if(random >=0.5 && random <0.75)
		{
			return (200);
		}
		else
		{
			return (300);
		}
	}
function Frame(){
	this.y=0;
	this.updateBackground = function(){
		// console.log("update");
	background.style.backgroundPosition="0px "+this.y+'px';
	this.y++;
	}
}
function Enemy(){
	this.x=randomGenerator();
	this.y=-100;
	this.dy = 0;
	  this.createEnemy =  function(){
		this.element = document.createElement('div');
		this.element.id = 'enemy-plane';
		this.element.style.left=this.x+'px';
		background.appendChild(this.element);
	 }
	
	this.updateEnemyPostion = function(){
		var that=this;
		this.dy=0;		
		this.dy = this.dy+100;
			this.y=this.y+this.dy;
			this.element.style.top = this.y+"px";
		}
	this.removeEnemy = function(){
				if ((this.y+100)>800){
					background.removeChild(this.element);
					obstacles.splice(0,1);
          }
	}
	this.checkCollision = function(){
		if((this.y+90)>plane.y && this.y<=(plane.y+90) && (this.x+90)>plane.x && this.x <= (plane.x+90)){
			alert("Game Over");
	}
}

}
function Plane(elementID){
	
	this.x=0;
	this.y=500;
	this.dx=0;
	this.element= document.getElementById(elementID);
    this.element.style.left="0px";
    this.element.style.width="100px";
    this.element.style.top = this.y+'px';
	this.updatePosition = function(){
		this.x=this.x+this.dx;
		this.element.style.left=this.x+'px';

	}
	this.moveLeft = function(){
		if(parseInt(this.element.style.left)>parseInt(background.style.left)){
		this.dx=-100;
		}
		else{
			this.dx=0;
		}
		plane.updatePosition();
	}
	this.moveRight=function(){
		if((parseInt(this.element.style.left)+parseInt(this.element.style.width))<(parseInt(background.style.left)+parseInt(background.style.width)))
		{this.dx=100;}
		else{
			this.dx=0;
		}
		// console.log("right");
		plane.updatePosition();
	}
}
function Bullet(){
	this.y=0;
	this.dy=10;
	this.element = document.createElement('div');
	this.element.style.height = '10px';
	this.element.style.width='10px';
	this.element.style.position = "absolute";
	this.element.style.backgroundImage = 'url("images/bullet.png")';
	this.x = (plane.x+47);
	this.y = plane.y;
	this.element.style.left = this.x +'px';
	this.element.style.top=this.y+'px';
	// alert(plane.x);
	background.appendChild(this.element);
	this.updateBulletPosition = function(){
		var t = this.y - this.dy;
		this.y=t;
		this.element.style.top=this.y+'px';

	}
	this.checkBulletCollision = function(obstacleA){
		if((obstacleA.x+90)>this.x && obstacleA.x<=(this.x+10) && (obstacleA.y+70)>this.y+10 && obstacleA.y<=(this.y+10)){
    		console.log("boom");
    	}

	}
}

var frame = new Frame();

setInterval(function () {
	frame.updateBackground()

}
	,15);
// var t= 0;
var obstacles = [];
var bulletsArray =[];
setInterval(function () {
	var obs = new Enemy();
	obs.createEnemy();
	obstacles.push(obs);
	for(var j=0;j<obstacles.length;j++){
			  // obs.createEnemy();
              obstacles[j].updateEnemyPostion(); 
              obstacles[j].checkCollision();
              // obstacles[j].removeEnemy();
              // t++; 
            }
    // checkCollision();

	// bulletsArray.forEach(function(bullet){
	// 	bullet.updateBulletPosition();
	// })
}
	,500);
setInterval(function(){
	for(var i=0;i<bulletsArray.length;i++){
		bulletsArray[i].updateBulletPosition();
		var bulletA = bulletsArray[i];
		for(var j=0;j<bulletsArray.length;j++){
			var obstacleA = obstacles[j];
			if(bulletA.checkBulletCollision(obstacleA)){
				alert("boom");
			}
		} 
	}


},15)

var plane = new Plane('plane');

document.onkeydown=function(event){
	switch(event.keyCode){
		case 37:
		plane.moveLeft();
		break;
		case 39:
		plane.moveRight();
		break;
		case 32:
		var bullet = new Bullet();
		bulletsArray.push(bullet);
		// background.appendChild(bullet);
	}
}


