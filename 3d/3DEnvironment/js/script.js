

let map = [
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,3,0,3,0,0,1,1,1,6,1,8,8,1,1,6,1,1,1,2,1,0,0,0,0,0,0,0,0,1],
  [1,0,0,3,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,3,1,1,1,1,1],
  [1,0,0,3,0,3,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,3,0,4,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
  [1,0,0,3,0,3,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,3,3,3,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,3,1,1,1,1,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,3,3,3,0,0,3,3,3,5,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
  [1,0,0,0,0,0,0,0,0,3,3,3,0,0,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,3,3,3,0,0,3,3,3,0,0,0,0,0,0,0,0,0,3,1,1,1,1,1],
  [1,0,0,0,0,0,0,0,0,3,3,3,0,0,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,4,0,0,4,2,0,2,2,6,6,6,6,2,2,0,2,4,4,0,0,4,0,0,0,0,0,0,0,1],
  [1,0,0,4,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,4,0,0,0,0,0,0,0,1],
  [1,0,0,4,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,4,0,0,0,0,0,0,0,1],
  [1,0,0,4,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,4,0,0,0,0,0,0,0,1],
  [1,0,0,4,3,3,4,2,2,2,2,6,6,6,6,2,2,2,2,2,4,3,3,4,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];
var itemTypes = [
  { img : "table-chairs.png", block : true }, // 0
  { img : "armor.png", block : true },    // 1
  { img : "plant-green.png", block : true },  // 2
  { img : "lamp.png", block : false }   // 3
];

var dead = false;
var flip = -1;


var mapItems = [
  //{type:1, x:30, y:1},
  //{type:1, x:1, y:1},
  // lamps in center area
  {type:1, x:10, y:7},
  {type:1, x:15, y:7},

  // lamps in bottom corridor
  {type:3, x:5, y:22},
  {type:3, x:12, y:22},
  {type:3, x:19, y:22},

  // tables in long bottom room
  {type:0, x:10, y:18},
  {type:0, x:15, y:18},
  // lamps in long bottom room
  {type:3, x:8, y:18},
  {type:3, x:17, y:18}
];
let mapWidth = 0;
let mapHeight = 0;
let miniMapScale =0;
var screenWidth = 1000;
var screenHeight = 500;
var screenStrips = [];
let stripWidth = 1;
let fov = 60 * Math.PI / 180;

let numRays = Math.ceil(screenWidth / stripWidth);
let fovHalf = fov / 2;

let viewDist = (screenWidth/2) / Math.tan((fov / 2));

let twoPI = Math.PI * 2;

let numTextures = 8;

let $ = function(id) { return document.getElementById(id); };
let dc = function(tag) { return document.createElement(tag); };

function moveArmor()
{
  for (var i = 0; i < mapItems.length; i++)
  {
    if (mapItems[i].type == 1)
    { 

      var locX =  Math.floor(mapItems[i].x) ;
      if (locX > 31)
      {
        mapItems[i].y -= 0.1 
      }
      var locY =  Math.floor(mapItems[i].y);
      var pos = map[locY][locX];
         if (pos == 0)
         {
          flip = flip * -1;
         }
         mapItems[i].y += flip * 0.1  ;


    }
  }

}

var ticker = 0;
function gameCycle(cancelled) {
  ticker++;
  console.log(ticker);
  
   // console.log("ssssss");
   if (!dead)
   {
    playerObject.move();
   }
  
  if (ticker == 3)
  {
    
    moveArmor();
    ticker = 0;
  }
  

  mapObject.updateMiniMap();
  mapObject.clearSprites();
  playerObject.castRays();
  mapObject.renderSprites();
 // console.log("sss");
  
  setTimeout(gameCycle,1000/30);
}
var enemies=[];
var spriteMap;
var visibleSprites = [];
var oldVisibleSprites = [];

class Map1{
  constructor(){

    this.mapWidth = 0;
    this.mapHeight =  0;
    this.miniMapScale =8;
    this.miniMap = $('minimap');
    this.miniMapObjects = $('minimapobjects');
    this.miniMapCtr = $('minimapcontainer');
    this.screen = $('screen');

  }
  init(){
    this.mapWidth = map[0].length;
    this.mapHeight = map.length;
    playerObject.bindKeys();
    this.initScreen();
    this.initSprites();
    this.drawMiniMap();
    gameCycle();
    
  }
  initSprites() {
  spriteMap = [];
  for (var y=0;y<map.length;y++) {
    spriteMap[y] = [];
  }

 // var screen = $("screen");

  for (var i=0;i<mapItems.length;i++) {
    var sprite = mapItems[i];
    var itemType = itemTypes[sprite.type];
    var img = dc("img");
    img.src = itemType.img;
    img.style.display = "none";
    img.style.position = "absolute";

    sprite.visible = false;
    sprite.block = itemType.block;
    sprite.img = img;
     enemies.push(sprite);
    spriteMap[sprite.y][sprite.x] = sprite;
    this.screen.appendChild(img);
  }

}
  initScreen() {

	
  for (var i=0;i<screenWidth;i+=stripWidth) 
  {
	  var that = this;
	var strip = dc('div');
    strip.style.position = "absolute";
    strip.style.left = i  + "px";
    strip.style.width = stripWidth+"px";
    strip.style.height = "0px";
    strip.style.overflow = "hidden";
	strip.style.backgroundColor = "red";

    var img = new Image();
   // img.src = (window.opera ? "walls_19color.png" : "walls.png");
    img.src = "walls.png";
    img.style.position = "absolute";
    img.style.left = "0px";

    strip.appendChild(img);
    strip.img = img;  // assign the image to a property on the strip element so we have easy access to the image later

    screenStrips.push(strip);
    that.screen.appendChild(strip);
  }

}

clearSprites() {
  // clear the visible sprites array but keep a copy in oldVisibleSprites for later.
  // also mark all the sprites as not visible so they can be added to visibleSprites again during raycasting.
  oldVisibleSprites = [];
  for (var i=0;i<visibleSprites.length;i++) {
    var sprite = visibleSprites[i];
    oldVisibleSprites[i] = sprite;
    sprite.visible = false;
  }
  visibleSprites = [];
}

renderSprites() {

  for (var i=0;i<visibleSprites.length;i++) {
    var sprite = visibleSprites[i];
    var img = sprite.img;
    img.style.display = "block";

    // translate position to viewer space
    var dx = sprite.x + 0.5 - playerObject.x;
    var dy = sprite.y + 0.5 - playerObject.y;

    // distance to sprite
    var dist = Math.sqrt(dx*dx + dy*dy);

    // sprite angle relative to viewing angle
    var spriteAngle = Math.atan2(dy, dx) - playerObject.rot;

    // size of the sprite
    var size = viewDist / (Math.cos(spriteAngle) * dist);

    if (size <= 0) continue;

    // x-position on screenm
    var x = Math.tan(spriteAngle) * viewDist;

    img.style.left = (screenWidth/2 + x - size/2) + "px";

    // y is constant since we keep all sprites at the same height and vertical position
    img.style.top = ((screenHeight-size)/2)+"px";

    var dbx = sprite.x - playerObject.x;
    var dby = sprite.y - playerObject.y;

    img.style.width = size + "px";
    img.style.height =  size + "px";

    var blockDist = dbx*dbx + dby*dby;
    img.style.zIndex = -Math.floor(blockDist*1000);
  }

  // hide the sprites that are no longer visible
  for (var i=0;i<oldVisibleSprites.length;i++) {
    var sprite = oldVisibleSprites[i];
    if (visibleSprites.indexOf(sprite) < 0) {
      sprite.visible = false;
      sprite.img.style.display = "none";
    }
  }

}

  drawMiniMap(){

    let widthVariable = this.mapWidth * this.miniMapScale;
    let heightVariable = this.mapHeight * this.miniMapScale;
    this.miniMap.width = this.miniMapObjects.width = widthVariable; 
    this.miniMap.height = this.miniMapObjects.height = heightVariable; 
  // Resize the canvas CSS dimensions
    this.miniMap.style.width = widthVariable + 'px';
    this.miniMap.style.height = heightVariable + 'px';
    this.miniMapCtr.style.width = widthVariable + 'px';
    this.miniMapCtr.style.height = heightVariable + 'px';
    this.miniMapObjects.style.width = widthVariable + 'px';
    this.miniMapObjects.style.height = heightVariable + 'px';
  // Loop through all blocks on the map
  let ctx = this.miniMap.getContext('2d');
  for (let y=0; y < this.mapHeight; y++) {
    for (let x=0; x < this.mapWidth; x++) {
      let wall = map[y][x];
      // If there is a wall block at this (x,y)…
      if (wall > 0) {
        ctx.fillStyle = 'rgb(200,200,200)';
        // …Then draw a block on the minimap
        ctx.fillRect(
          x* this.miniMapScale ,
          y* this.miniMapScale ,
         this.miniMapScale, this.miniMapScale
        );
        }

        if (spriteMap[y][x] && spriteMap[y][x].type!=1) {
        ctx.fillStyle = "rgb(100,200,100)";
        ctx.fillRect(
          x * this.miniMapScale + this.miniMapScale*0.25,
          y * this.miniMapScale + this.miniMapScale*0.25,
          this.miniMapScale*0.5,this.miniMapScale*0.5
        );
      }
      }
    }
    this.updateMiniMap();
  }
  updateMiniMap(){
    let objCtx = this.miniMapObjects.getContext('2d');
    objCtx.clearRect(0,0,this.miniMap.width, this.miniMap.height);
    objCtx.fillRect(
      playerObject.x*this.miniMapScale-2,
      playerObject.y*this.miniMapScale-2,
      4,4
      );
    objCtx.beginPath();
    objCtx.moveTo(playerObject.x*this.miniMapScale, playerObject.y*this.miniMapScale);
    objCtx.lineTo(
      (playerObject.x+Math.cos(playerObject.rot)*4)*this.miniMapScale,
      (playerObject.y+Math.sin(playerObject.rot)*4)*this.miniMapScale
      );
    objCtx.closePath();
    objCtx.stroke();
    for (var i=0;i<enemies.length;i++) {
    var enemy = enemies[i];
    // console.log(enemy.y);
    objCtx.fillStyle = "blue";
    objCtx.fillRect(   // draw a dot at the enemy position
          enemy.x * this.miniMapScale + this.miniMapScale*0.25,
          enemy.y * this.miniMapScale + this.miniMapScale*0.25,
          this.miniMapScale*0.5,this.miniMapScale*0.5
    );
  }
  }

}



class Player{
  constructor(){
    this.x=10;
    this.y=10;
    this.dir=0;
    this.rot=0;
    this.speed = 0;
    this.moveSpeed = 0.2;
    this.rotSpeed = 6 * Math.PI/180;
  }
    bindKeys() {
    let that=this;
    document.onkeydown = function(e) {
      e = e || window.event;

      switch (e.keyCode) { // which key was pressed?

        case 38: // up, move player forward, ie. increase speed
          that.speed = 1;
          break;

        case 40: // down, move player backward, set negative speed
          that.speed = -1;
          break;

        case 37: // left, rotate player left
          that.dir = -1;
          break;

        case 39: // right, rotate player right
          that.dir = 1;
          break;
      }
    }

    document.onkeyup = function(e) {
      e = e || window.event;

      switch (e.keyCode) {
        case 38:
        case 40:
          that.speed = 0; // stop the player movement when up/down key is released
          break;
        case 37:
        case 39:
          that.dir = 0;
          break;
      }
    }
  }

  move() {
    let moveStep = this.speed * this.moveSpeed; // player will move this far along the current direction vector
    this.rot += this.dir * this.rotSpeed;
    //console.log(this.rot); // add rotation if player is rotating (player.dir != 0)
    let newX = this.x + Math.cos(this.rot) * moveStep;  // calculate new player position with simple trigonometry
    let newY = this.y + Math.sin(this.rot) * moveStep;
    
    if(this.isBlocking(newX, newY)){
      return;
    }

    this.x = newX; // set new position
    this.y = newY;
  }
  isBlocking(x,y){
      if(y<0 || y >= mapObject.mapHeight || x<0 || x >= mapObject.mapWidth){
        return true;
      }
      var ix = Math.floor(x);
  var iy = Math.floor(y);

  // return true if the map block is not 0, ie. if there is a blocking wall.
  if (map[iy][ix] != 0)
    return true;

  if (spriteMap[iy][ix] && spriteMap[iy][ix].block)
  {
    EndGame();
    return true;
  }

  return false;
    }
  castRays(){
    let stripIdx = 0;
     for (let i=0;i<numRays;i++) {
      let rayScreenPos = (-numRays/2 + i) * stripWidth;

      // the distance from the viewer to the point on the screen
      let rayViewDist = Math.sqrt(rayScreenPos*rayScreenPos + viewDist*viewDist);

      // the angle of the ray, relative to the viewing direction.
      let rayAngle = Math.asin(rayScreenPos / rayViewDist);
      //console.log(rayAngle);

      this.castSingleRay(
        playerObject.rot + rayAngle,  
        stripIdx++
      );
    }

  }
  castSingleRay(rayAngle, stripIdx) {

  // first make sure the angle is between 0 and 360 degrees
  rayAngle %= twoPI;
  if (rayAngle < 0) rayAngle += twoPI;

  // moving right/left? up/down? Determined by which quadrant the angle is in.
  var right = (rayAngle > twoPI * 0.75 || rayAngle < twoPI * 0.25);
  var up = (rayAngle < 0 || rayAngle > Math.PI);

  var wallType = 0;

  // only do these once
  var angleSin = Math.sin(rayAngle);
  var angleCos = Math.cos(rayAngle);

  var dist = 0; // the distance to the block we hit
  var xHit = 0;   // the x and y coord of where the ray hit the block
  var yHit = 0;

  var xWallHit = 0;
  var yWallHit = 0;

  var textureX; // the x-coord on the texture of the block, ie. what part of the texture are we going to render
  var wallX;  // the (x,y) map coords of the block
  var wallY;


  var wallIsHorizontal = false;

  // first check against the vertical map/wall lines
  // we do this by moving to the right or left edge of the block we're standing in
  // and then moving in 1 map unit steps horizontally. The amount we have to move vertically
  // is determined by the slope of the ray, which is simply defined as sin(angle) / cos(angle).

  var slope = angleSin / angleCos;  // the slope of the straight line made by the ray
  var dXVer = right ? 1 : -1;   // we move either 1 map unit to the left or right
  var dYVer = dXVer * slope;  // how much to move up or down

  var x = right ? Math.ceil(playerObject.x) : Math.floor(playerObject.x); // starting horizontal position, at one of the edges of the current map block
  var y = playerObject.y + (x - playerObject.x) * slope;      // starting vertical position. We add the small horizontal step we just made, multiplied by the slope.

  while (x >= 0 && x < mapObject.mapWidth && y >= 0 && y < mapObject.mapHeight) {
    var wallX = Math.floor(x + (right ? 0 : -1));
    var wallY = Math.floor(y);

    if (spriteMap[wallY][wallX] && !spriteMap[wallY][wallX].visible) {
      spriteMap[wallY][wallX].visible = true;
      visibleSprites.push(spriteMap[wallY][wallX]);
    }



    // is this point inside a wall block?
    if (map[wallY][wallX] > 0) {
      var distX = x - playerObject.x;
      var distY = y - playerObject.y;
      dist = distX*distX + distY*distY; // the distance from the player to this point, squared.

      wallType = map[wallY][wallX]; // we'll remember the type of wall we hit for later
      textureX = y % 1; // where exactly are we on the wall? textureX is the x coordinate on the texture that we'll use later when texturing the wall.
      if (!right) textureX = 1 - textureX; // if we're looking to the left side of the map, the texture should be reversed

      xHit = x; // save the coordinates of the hit. We only really use these to draw the rays on minimap.
      yHit = y;
      xWallHit = wallX;
      yWallHit = wallY;

      wallIsHorizontal = true;

      break;
    }
    x += dXVer;
    y += dYVer;
  }



  // now check against horizontal lines. It's basically the same, just "turned around".
  // the only difference here is that once we hit a map block, 
  // we check if there we also found one in the earlier, vertical run. We'll know that if dist != 0.
  // If so, we only register this hit if this distance is smaller.

  var slope = angleCos / angleSin;
  var dYHor = up ? -1 : 1;
  var dXHor = dYHor * slope;
  var y = up ? Math.floor(playerObject.y) : Math.ceil(playerObject.y);
  var x = playerObject.x + (y - playerObject.y) * slope;

  while (x >= 0 && x < mapObject.mapWidth && y >= 0 && y < mapObject.mapHeight) {
    var wallY = Math.floor(y + (up ? -1 : 0));
    var wallX = Math.floor(x);

    if (spriteMap[wallY][wallX] && !spriteMap[wallY][wallX].visible) 
    {
      spriteMap[wallY][wallX].visible = true;
      visibleSprites.push(spriteMap[wallY][wallX]);
    }

    if (map[wallY][wallX] > 0) {
      var distX = x - playerObject.x;
      var distY = y - playerObject.y;
      var blockDist = distX*distX + distY*distY;
      if (!dist || blockDist < dist) {
        dist = blockDist;
        xHit = x;
        yHit = y;
        xWallHit = wallX;
        yWallHit = wallY;
        wallType = map[wallY][wallX];
        textureX = x % 1;
        if (up) textureX = 1 - textureX;
      }
      break;
    }
    x += dXHor;
    y += dYHor;
  }

  if (dist) 
  {
    //drawRay(xHit, yHit);

    var strip = screenStrips[stripIdx];
    dist = Math.sqrt(dist);

    // use perpendicular distance to adjust for fish eye
    // distorted_dist = correct_dist / cos(relative_angle_of_ray)
    dist = dist * Math.cos(playerObject.rot - rayAngle);

    // now calc the position, height and width of the wall strip

    // "real" wall height in the game world is 1 unit, the distance from the player to the screen is viewDist,
    // thus the height on the screen is equal to wall_height_real * viewDist / dist

    var height = Math.round(viewDist / dist);

    // width is the same, but we have to stretch the texture to a factor of stripWidth to make it fill the strip correctly
    var width = height * stripWidth;

    // top placement is easy since everything is centered on the x-axis, so we simply move
    // it half way down the screen and then half the wall height back up.
    var top = Math.round((screenHeight - height) / 2);

    strip.style.height = height+"px";
    strip.style.top = top+"px";

    strip.img.style.height = Math.floor(height * numTextures) + "px";
    strip.img.style.width = Math.floor(width*2) +"px";
    strip.img.style.top = -Math.floor(height * (wallType-1)) + "px";

    var texX = Math.round(textureX*width);

    if (texX > width - stripWidth)
      texX = width - stripWidth;

    strip.img.style.left = -texX  + "px";
    var dwx = xWallHit - playerObject.x;
    var dwy = yWallHit - playerObject.y;


    var wallDist = dwx*dwx + dwy*dwy;
    strip.style.zIndex = -Math.floor(wallDist*1000);

  }

}

// drawRay(rayX, rayY) {
  
//   var objectCtx = mapObject.miniMapObjects.getContext("2d");

//   objectCtx.strokeStyle = "rgba(0,100,0,0.3)";
//   objectCtx.lineWidth = 0.5;
//   objectCtx.beginPath();
//   objectCtx.moveTo(playerObject.x * mapObject.miniMapScale, playerObject.y * mapObject.miniMapScale);
//   objectCtx.lineTo(
//     rayX * mapObject.miniMapScale,
//     rayY * mapObject.miniMapScale
//   );
//   objectCtx.closePath();
//   objectCtx.stroke();
// }



}


restartBtn=document.createElement('button');
function EndGame(){
  dead = true;
  let screen = $('screen');
  // console.log("---------------");
  stop=1;
  let end=document.createElement("div");
  end.style.display="block";
  end.style.position="absolute";
  //end.style.background="green";
  end.style.width="625px";
  end.style.height="470px";
  // end.style.zIndex = "100000000";
  screen.appendChild(end);

  restartBtn.style.backgroundColor="white";
  restartBtn.style.color="black"
  restartBtn.style.width="200px";
  restartBtn.style.height="100px";
  restartBtn.style.fontSize="30px";
  restartBtn.style.fontWeight="bold";
  restartBtn.style.marginRight="50px";
  restartBtn.style.marginTop="30px";
  restartBtn.style.borderRadius="20px";
  restartBtn.innerHTML="Game Over! \nRestart?";
  end.appendChild(restartBtn);
restartBtn.onclick=function(){
  end.style.display="none";
  dead = false;
  playerObject.x=10;
  playerObject.y=10;
  playerObject.dir=0;
  playerObject.rot=0;
  playerObject.speed = 0;
  
   //gameCycle(1);


}
}
 let mapObject = new Map1();
 let playerObject = new Player();
 setTimeout(mapObject.init(), 1);