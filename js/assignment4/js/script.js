// Convert JSON object into HTML
// 	> STEP 1 :  Should be able to handle rendering children dynamically
// 	> STEP 2 : Should be able to handle any style added in the JSON
var data = [
   {
       tagName: 'div',
       className: 'test-class',
       styles: {
           width: "100px",
           height: "100px",
           backgroundColor: 'red'
       },
       children: [
           {
               tagName: 'div',
               className: 'box',
               styles: {
                   width: "50px",
                   height: "50px",
                   backgroundColor: 'blue'
               },
           },
           {
               tagName: 'div',
               className: 'box',
               styles: {
                   width: "50px",
                   height: "50px",
                   backgroundColor: 'brown',
                   float: 'right'
               },
           }
       ]
   }
];

function display(){
  for(var i=0;i<data.length;i++){
    var mainWrapper = document.createElement(data[i].tagName);
    mainWrapper.className = data[i].className;
    setAttributes(mainWrapper, data[i].styles);
    document.body.appendChild(mainWrapper);
   if(data[i].children) {
      var dataChildren = data[i].children;
      
      for(var j=0; j<dataChildren.length; j++) {
        var childContainer = document.createElement(dataChildren[j].tagName);
        childContainer.className = dataChildren[j].className;
        setAttributes(childContainer, dataChildren[j].styles);
        mainWrapper.appendChild(childContainer);
      }
    }  

  }
}
function setAttributes(element, stylesData){
  var keys = Object.keys(stylesData);
  for(var i=0;i<keys.length;i++){
    element.style[keys[i]]=stylesData[keys[i]];
  }
}
 display();