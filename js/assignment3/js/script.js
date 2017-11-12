var details = {
	naam:"Mohendra Amatya",
	location:"Imadol Lalitpur",
	imge:"images/entry-list1.png",
	education:"Advanced College of Engineering and Management",
	phone: 9841016667,
	 interest: ["Sketching", "Painting"],
	 skills: [
        { "name":"web-design", "models":[ "html", "css", "JS" ] },
        { "name":"programming", "models":[ "C", "C++", "JAVA" ] },
    ]
};
document.body.style.background='#f4f4f4';

var mainwrapper = document.createElement('div');
mainwrapper.className= 'main-wrapper';

document.body.appendChild(mainwrapper);
var h1 = document.createElement("h1");
h1.style.display='inline-block';
var x = document.createElement("IMG");
x.style.float='right';
x.setAttribute('src', details.imge);

var header1 = document.createElement('div');
header1.style.borderBottom = '5px solid #d8d8d8';
header1.className = 'header';
header1.style.width=100+'%';
h1.innerHTML=details.naam;
header1.appendChild(h1);
header1.appendChild(x);
mainwrapper.appendChild(header1);



var objectKeys = Object.keys(details);
for(var i=1;i<=objectKeys.length-2;i++){
	if(i===2){
		continue;
	}
var key = objectKeys[i];
var maincontent = document.createElement('div');
maincontent.style.borderBottom = '1px solid #d8d8d8';
maincontent.className = 'details';
// maincontent.style.display='table-row';
mainwrapper.appendChild(maincontent);
var topicname = document.createElement('div');
topicname.className = 'topic';
topicname.style.display='table-row';
topicname.style.width = 20+'%';
topicname.innerHTML = '<h2>'+key+'</h2>';
maincontent.appendChild(topicname);
var description = document.createElement('div');
description.className = 'desp';
description.style.display='table-cell';
// description.style.width = 80+'%';
description.innerHTML = details[key];
maincontent.appendChild(description);
}

var para = document.createElement('p');
// para.id = ''demo;
var skillset="";
 for (var i in details.skills) {
     skillset += "<h2>" + details.skills[i].name + "</h2>";
     for (var j in details.skills[i].models) {
         skillset += details.skills[i].models[j] + "<br>";
     }
}

para.innerHTML = '<h2>'+objectKeys[6]+'</h2>'+skillset;
mainwrapper.appendChild(para);
// border-bottom: 1px solid #d8d8d8;