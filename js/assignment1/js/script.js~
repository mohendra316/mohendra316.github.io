
 var mainWrapper = document.getElementById("main-wrapper");
var data = [
{ top: 2, left: 5 },
{ top: 100, left: 6 },
{ top: 200, left: 500 },
{ top: 50, left: 60 },
{ top: 500, left: 500 },

];

for(var i=0;i<data.length;i++){
var newElement = document.createElement('div');
newElement.style.background = 'blue';
newElement.style.position = 'absolute';
newElement.style.width = '10px';
newElement.style.height = '10px';
newElement.style.top = Math.floor((Math.random() * 300) + 1)+'px'; 
newElement.style.left = Math.floor((Math.random() * 300) + 1)+'px';
mainWrapper.appendChild(newElement);
}

 var bdy = document.getElementsByTagName("body")[0];
 var lister = document.createElement('ul');
// var mainWrapperChildren = mainWrapper.childNodes;
bdy.appendChild(lister);
var g = document.getElementById('main-wrapper');
for (var i = 0, len = g.children.length; i < len; i++)
{

    (function(index){
        g.children[i].onclick = function(){
        	var ls = document.createElement('li');
        	ls.innerHTML = this.style.top + this.style.left;
        	lister.appendChild(ls);
             g.removeChild(this);
             console.log(this.style.top);
             console.log(this.style.left);

        }    
    })(i);

}
