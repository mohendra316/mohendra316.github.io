var imageDiv = document.getElementById('slider-images').children;
var indicator = document.getElementById('red-indicator').children;
var relatedProjectSlider = document.getElementById('related-projects-slide').children;
var something = document.getElementById('indicators');

var currentUL = imageDiv[0];
var currentList = imageDiv[0].children; //ul bhitra ko li ko list
var currentRelatedProject = relatedProjectSlider[0];
console.log(currentRelatedProject);
var indicatorList = indicator[0].children; 
var listLength = currentList.length; 
var ulCounter = 0;
var counter = 0;
var relatedCounter =0;
var current = currentList[0];
var currentIndicator = indicatorList[0];
// window.onload = function() {
// 	updateIndicator(listLength);
// };
// function updateIndicator(noOfImg){
// 	for(var i=0;i<noOfImg-1;i++){
// 		el = document.createElement('li');
// 		el.innerHTML = '<a href="#/">click</a>'
// 		something.appendChild(el);
// 	}

// }
// function removeIndicator(noOfImg){
// 	for(var i=1;i<=noOfImg-1;i++){
// 		something.removeChild(something.childNodes[i]);
// 	}
// }
var box = document.getElementById("search-box");
document.getElementById('searchButton').addEventListener('click', function () {
    	if(box.style.display == "none"){
    		box.style.display = "block";

    	}else{
    		box.style.display ="none";
    	}
    });
function navigateSlideContent(direction){
	currentUL.classList.remove("active");
	ulCounter += direction;
	if(direction == -1 && ulCounter<0){
		ulCounter = imageDiv.length-3;
	}
	if(direction == 1 && ulCounter> imageDiv.length-3)
	{
		ulCounter = 0;
	}
	currentUL = imageDiv[ulCounter];
	currentUL.classList.add("active");
	
	current.classList.remove("active");
	currentIndicator.classList.remove("active");
	console.log(currentList.length);
	// removeIndicator(currentList.length);
	counter = 0;
	currentList = imageDiv[ulCounter].children;
	listLength = currentList.length;
	current = currentList[counter];
	current.classList.add("active");
	// updateIndicator(listLength);
	currentIndicator = indicatorList[counter];
	currentIndicator.classList.add("active");

}
document.getElementById('right-slide-content').addEventListener('click', function () {
    	navigateSlideContent(1);
    });
document.getElementById('left-slide-content').addEventListener('click', function () {
    	navigateSlideContent(-1);
    });
function showNav(direction){
	counter = 0;
	navigate(direction);
}
function navigate(direction){
	current.classList.remove("active");
	currentIndicator.classList.remove("active");
	counter += direction;
	if(direction == -1 && counter<0){
		counter = listLength -1;
	}
	if(direction == 1 && counter>listLength-1){
		counter=0;
	}

	current = currentList[counter];
	current.classList.add("active");
	currentIndicator = indicatorList[counter];
	currentIndicator.classList.add("active");
}


document.getElementsByClassName('right-control')[0].addEventListener('click', function () {
    	navigate(1);
    });
document.getElementsByClassName('left-control')[0].addEventListener('click', function () {
    	navigate(-1);
    });


function fade(direction){
	fadeout(currentRelatedProject);
		relatedCounter += direction;
	if(direction == -1 && relatedCounter<0){
		relatedCounter = relatedProjectSlider.length-1;
	}
	if(direction == 1 && relatedCounter> relatedProjectSlider.length-1)
	{
		console.log(relatedCounter);
		relatedCounter = 0;
	}
	currentRelatedProject = relatedProjectSlider[relatedCounter];
	//unfade(currentRelatedProject);



	setTimeout(function(){ currentRelatedProject.classList.add("active");
	 currentRelatedProject.style.opacity=1;
	 currentRelatedProject.style.display="block";
}, 1000);

}

document.getElementById('left-fade').addEventListener('click', function () {
    	fade(-1);
    });
document.getElementById('right-fade').addEventListener('click', function () {
    	fade(1);
    });

function fadeout(element) {
    var op = 1; 
    var newelement = element; // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
        	currentRelatedProject.classList.remove("active");

            clearInterval(timer);
            newelement.style.display="none";
        }
        element.style.opacity = op;
        op -= op * 0.12;
    }, 50);

}
