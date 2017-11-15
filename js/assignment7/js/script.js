let score=0;
let stop=0;
let scoreBoard = document.getElementById('score');

scoreBoard.innerHTML = score;
class World{
	constructor(){
		this.height=470;
		this.width=625;
		this.element = document.getElementById('world');
		this.element.id = 'world';
		this.x=0;
	}
	init(bird){
		var that=this;
		let gameLoop = setInterval(function(){
			// console.log('running')
			that.moveFrame();
			bird.pushBirdDown();
			counter++;
			if(counter==250){
				let obstacle = new Obstacle();
				obstacle.createObstacleUp(that);
				pipeUpArr.push(obstacle);
				// console.log(pipeUpArr.length);
				obstacle.createObstacleDown(that);
				pipeDownArr.push(obstacle);
				// console.log(pipeDownArr.length);
				counter=0;
			}
			for(let i=0;i<pipeUpArr.length;i++){
				let pipeU=pipeUpArr[i];
				let pipeD=pipeDownArr[i];
				pipeU.moveObstacle();
				pipeD.moveObstacle();
				that.checkCollision(bird,pipeU,pipeD);
				pipeU.removeUpObstacle(that);
				pipeD.removeDownObstacle(that);
			}
			console.log(stop);
			if(stop==1){
				console.log("STOOOOOOOOOOOOOOOP");
						stop=0;
						score=0;
						pipeUpArr.forEach((pipeUp) => {
							that.element.removeChild(pipeUp.pipeUp);
						})

						pipeDownArr.forEach((pipeDown) => {
							that.element.removeChild(pipeDown.pipeDown);
						})
						pipeUpArr = [];
						pipeDownArr = [];
						clearInterval(gameLoop);
			}
		},15);

		document.onkeydown = function(event){
			switch(event.keyCode){
				case 32:
				bird.y-=50;
				break;
			}	
		}

	}
	moveFrame(){
		this.element.style.backgroundPosition='-'+this.x+'px'+' 0px';
		this.x++;
	}
	checkCollision(birdobj, pipeU,pipeD){
		if(birdobj.x+84>parseInt(pipeU.pipeUp.style.left) && pipeU.heightUp>birdobj.y){
			birdobj.y=pipeU.heightUp;
			EndGame("block",this.element);
		}
		else if(birdobj.x+84>parseInt(pipeD.pipeDown.style.left) && 470-pipeD.heightDown<birdobj.y+50){
			EndGame("block", this.element);
		}
		else if(birdobj.y+50>=470){
			EndGame("block", this.element);
		}

	}
}

class Bird{
	constructor(){
		this.bird = document.getElementById('bird');
		this.bird.id='bird';
		this.height=50;
		this.width=84;
		this.x=0;
		this.y=0;
		this.dx=5;
		this.dy=3;
		this.bird.style.left=this.x+'px';
	}

	pushBirdDown(){
		if (this.y <=0) {
		this.y=0;
		}
		if (this.y+50>=470) {
			// alert("gameover");
			this.dy=0;
		}
		this.y=this.y+this.dy;
		this.bird.style.top=this.y+'px';
	}	
}

class Obstacle{
	constructor(){
		this.x=625;
		this.y=0
		this.heightUp=Math.random()*260;
		this.heightDown= Math.random()*250;

	}
	createObstacleUp(world){
		this.pipeUp=document.createElement('div');
		this.pipeUp.id = 'obstacle';
		this.pipeUp.style.top = '0px';
		this.pipeUp.style.height = this.heightUp+'px';
		world.element.appendChild(this.pipeUp);
	}
	createObstacleDown(world){
		this.pipeDown=document.createElement('div');
		this.pipeDown.id = 'obstacle';
		this.pipeDown.style.bottom = '0px';
		this.pipeDown.style.height =this.heightDown+'px';
		world.element.appendChild(this.pipeDown);
	}
	moveObstacle(){
		this.pipeUp.style.left=this.x+'px';
		this.pipeDown.style.left=this.x+'px';
		this.x-=1;
	}
	removeUpObstacle(world){
		if(parseInt(this.pipeUp.style.left)+100<0){
		world.element.removeChild(this.pipeUp);
		pipeUpArr.splice(0,1);
		score+=1;
		scoreBoard.innerHTML = score;
		console.log("SCORE=========="+score);
		}
	}
	removeDownObstacle(world){
		if(parseInt(this.pipeDown.style.left)+100<0){
		world.element.removeChild(this.pipeDown);		
		pipeDownArr.splice(0,1);
		}
	}

}
start();
let counter=0;
let pipeUpArr = [];
let pipeDownArr = [];
function start(){

let world = new World();
let bird = new Bird();
world.init(bird); 	
}

restartBtn=document.createElement('button');
function EndGame(show, parent){
	console.log("---------------");
	stop=1;
	let end=document.createElement("div");
	end.style.display=show;
	end.style.position="absolute";
	end.style.background="green";
	end.style.width="625px";
	end.style.height="470px";
	parent.appendChild(end);

	restartBtn.style.backgroundColor="white";
	restartBtn.style.color="black"
	restartBtn.style.width="200px";
	restartBtn.style.height="100px";
	restartBtn.style.fontSize="30px";
	restartBtn.style.fontWeight="bold";
	restartBtn.style.marginRight="50px";
	restartBtn.style.marginTop="30px";
	restartBtn.style.borderRadius="20px";
	restartBtn.innerHTML="Restart";
	end.appendChild(restartBtn);
restartBtn.onclick=function(){
	end.style.display="none";
		score=0;
		start();

}


}
