

var background = document.getElementById('road');
background.id='road';
background.style.left="0px";
background.style.top="0px";
background.style.width="400px";
background.style.height="600px";
var stop = 0;

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
function Frame()
{
	this.y=0;
	this.updateBackground = function()
	{
		// console.log("update");
	background.style.backgroundPosition="0px "+this.y+'px';
	this.y++;
	}
}
function Enemy()
{
	this.x=randomGenerator();
	this.y=-100;
	this.dy = 0;
	  this.createEnemy =  function() {
		this.element = document.createElement('div');
		this.element.id = 'enemy-plane';
		this.element.style.left=this.x+'px';
		background.appendChild(this.element);
	 }
	
	this.updateEnemyPostion = function() {
		var that=this;
		this.dy=0;		
		this.dy = this.dy+2;
			this.y=this.y+this.dy;
			this.element.style.top = this.y+"px";
	}
	this.removeEnemy = function() {
				if ((this.y+100)>800){
					background.removeChild(this.element);
					obstacles.splice(0,1);
                }
	}
	this.checkCollision = function() {
		if(plane.x<this.x+100 && plane.x+100>this.x && plane.y<this.y+100 && plane.y+100 >this.y){
			alert("GAME OVER");
	    }
    }

}
function Plane(elementID)
{
	
	this.x=0;
	this.y=500;
	this.dx=0;
	this.element= document.getElementById(elementID);
    this.element.style.left="0px";
    this.element.style.width="100px";
    this.element.style.top = this.y+'px';
	
	this.updatePosition = function() {
	this.x=this.x+this.dx;
	this.element.style.left=this.x+'px';
    }
	this.moveLeft = function() {
		if(parseInt(this.element.style.left)>parseInt(background.style.left)){
		this.dx=-100;
		}
		else{
			this.dx=0;
		}
		plane.updatePosition();
			for(var j=0;j<obstacles.length;j++) {
				//console.log(j);
		    this.checkCollision(obstacles[j]);
		  // t++; 
			}
	}
	this.moveRight=function() {
		if((parseInt(this.element.style.left)+parseInt(this.element.style.width))<(parseInt(background.style.left)+parseInt(background.style.width)))
		{
			this.dx=100;
		}
		else{
			this.dx=0;
		}

		// console.log("right");
		plane.updatePosition();
		for(var j=0;j<obstacles.length;j++) {
	    	this.checkCollision(obstacles[j]);
	   //t++; 
//	}
	    }
	}
	this.checkCollision = function(enemy)
	{
		console.log("check")
		if(this.x<enemy.x+100 && this.x+100>enemy.x && this.y<enemy.y+100 && this.y+100 >enemy.y)
		{
			alert("GAME OVER");
		}
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
    		background.removeChild(this.element);
    		background.removeChild(obstacleA.element);
    		bulletsArray.slice(bulletsArray.indexOf(this), 1);
    		obstacles.splice(obstacles.indexOf(obstacleA), 1);
    	
    	}

	}
}
	var frame = new Frame();
	var count= 0;
	var obstacles = [];
	var bulletsArray =[];
function start(){
	
	var gameLoop = setInterval(function () {
		count++;
		if(count == 30) {
		count = 0;
		var obs = new Enemy();
		obs.createEnemy();
		obstacles.push(obs);
		}
		for(var j=0;j<obstacles.length;j++){
	              obstacles[j].updateEnemyPostion(); 
	              obstacles[j].checkCollision();
	              obstacles[j].removeEnemy(); 
	            }
	    	frame.updateBackground()
		bulletsArray.forEach(function(bullet){
			bullet.updateBulletPosition();
				for(var j=0;j<obstacles.length;j++){
		  			bullet.checkBulletCollision(obstacles[j]);
				}
		})
		if(stop==1){
				stop=0;
				obstacles = [];
				bulletsArray = [];	
				obstacles.forEach((obs) => {
							background.removeChild(obs.element);
						})
				bulletsArray.forEach((bull) => {
							background.removeChild(bull.element);
						})
				clearInterval(gameLoop);
		}

		},15);
}
start();

var plane = new Plane('plane');

document.onkeydown=function(event)
{
	switch(event.keyCode)
	{
		case 37:
		plane.moveLeft();
		break;
		case 39:
		plane.moveRight();
		break;
		case 32:
		var bullet = new Bullet();
		bulletsArray.push(bullet);
	}
}
