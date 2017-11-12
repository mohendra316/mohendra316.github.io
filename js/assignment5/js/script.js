
var parent = document.getElementById('wrapper');


var play=document.createElement('div');
play.style.width=parent.style.width;
play.style.height=parent.style.height;
play.style.backgroundColor="#af2401" ;
play.style.absolute="absolute";
play.style.top="0px";
play.style.left="0px";
parent.appendChild(play);
playBtn=document.createElement('button');
playBtn.className='button';
playBtn.style.backgroundColor="#f7f3f2";
playBtn.style.color="#af2401";
playBtn.style.width="200px";
playBtn.style.height="100px";
playBtn.style.fontSize="30px";
playBtn.style.fontWeight="bold";
playBtn.style.marginLeft="50px";
playBtn.style.marginTop="150px";
playBtn.style.borderRadius="20px";
playBtn.innerHTML="lets kill ants!";
play.appendChild(playBtn);


var gameOver=function(){
 		// alert("gameover");
 		var over=document.createElement('div');
		over.style.width=parent.style.width;
		over.style.height=parent.style.height;
		over.style.backgroundColor="#000000" ;
		over.style.top="0px";
		over.style.left="0px";
		parent.appendChild(over);
		reset=document.createElement('button');
		reset.className = 'button';
		reset.innerHTML="RESET";
		over.appendChild(reset);
		reset.onclick=function(){
  			startGame();
		}

 	}

function scatter(i){
	var that=this;
	this.id=i;
	this.y = Math.floor((Math.random()*400)+1); 
	this.x = Math.floor((Math.random()*400)+1);
	this.element= document.createElement('div');
	// this.mainWrapper = document.getElementById(parentId);
	this.height="50px";
	this.width="50px";
	this.dx = 1;
	this.dy = 1;

	
	this.updatePosition=function(){
			if(this.x<=parseInt(parent.style.left)){
				this.dx=-this.dx
			}
			if((this.x+parseInt(this.element.style.width))>=(parseInt(parent.style.left)+(parseInt(parent.style.width)))){
				this.dx=-this.dx;
			}
			this.x=this.x+this.dx;
			this.element.style.left=this.x+"px";
			if(this.y<=parseInt(parent.style.top)){
				this.dy=-this.dy
			}
			if((this.y+parseInt(this.element.style.height))>=(parseInt(parent.style.top)+(parseInt(parent.style.height)))){
				this.dy=-this.dy;
			}
			this.y=this.y+this.dy;
			this.element.style.top=this.y+"px";
			
			
	}
	this.boxGenerator = function(){
		this.element.style.height=this.height;
		this.element.style.width=this.width;
		this.element.style.background='black';
		this.element.style.position ='absolute';
		this.element.style.left=this.x+'px'; 
		this.element.style.top=this.y+'px';
		parent.appendChild(this.element);

	}
 	this.changeDir=function(){
	 	this.dx=-this.dx;
	 	this.dy=-this.dy;
	 }

	
};

function checkCollision(antA,antB){
	// console.log(antA.height);
	aLeft=antA.x;
	aTop=antA.y;
	bLeft=antB.x;
	bTop=antB.y;
	aHeight=antA.height;
 // console.log(antA.x);
	aWidth=antA.width;
	bHeight=antB.height;
	bWidth=antB.width;
    if(antA.x<antB.x+50 && antA.x+50>antB.x && antA.y<antB.y+50 && 50+antA.y>antB.y){
    	return true;
    }
        return false;
}

playBtn.onclick=function(){
  startGame();
}
function startGame(){
	var counter=0;
	var antArray = [];
	for(var i=0;i<4;i++){
		var ant = new scatter(i);
		ant.boxGenerator(20,20);
		antArray.push(ant);
	}
	play.style.display="none";

	for(var i=0;i<parent.children.length;i++){
			 parent.children[i].onclick = function(){
			 	parent.removeChild(this);
			 	counter++;
			 	if(counter == antArray.length+1){
			 		gameOver();
			 	}
			 	
			}
	}
	setInterval(function(){	
		for(var i=0;i<antArray.length;i++){
			antArray[i].updatePosition();
			var antA = antArray[i];
			for(var j=0;j<antArray.length;j++){
				var antB = antArray[j];
			// alert("ssss");
				if(checkCollision(antA,antB)){
					antA.changeDir();
					antB.changeDir();
				}
			}
		}
	},10);
}




