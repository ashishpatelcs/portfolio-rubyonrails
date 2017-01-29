/* Author: Ashish Patel
   National Institute of Technology, Agartala
   16MCA012
*/

// Requesting XML document and updating the web page with new content...
var xhttp = new XMLHttpRequest();
xhttp.open("GET","profile.xml",false);
xhttp.send();
var xmlDoc = xhttp.responseXML;
xmlQuery(xmlDoc);

//function to update about me page button controls
function myTitle(title) {
	if (title=='mca') {
		var xmlCourseName = xmlDoc.getElementsByTagName("coursename")[0].childNodes[0].nodeValue;
		var xmlYear = xmlDoc.getElementsByTagName("year")[0].childNodes[0].nodeValue;
		var xmlInstitute = xmlDoc.getElementsByTagName("institute")[0].childNodes[0].nodeValue;
		var xmlCGPA = xmlDoc.getElementsByTagName("cgpa")[0].childNodes[0].nodeValue;
		var xmlCourses = xmlDoc.getElementsByTagName("courses")[0].childNodes[0].nodeValue;
		var xmlLabs = xmlDoc.getElementsByTagName("labs")[0].childNodes[0].nodeValue;
		document.getElementById("programs").innerHTML = "<div><table><tr><td><b>COURSE NAME</b></td><td> : "+xmlCourseName+"</td></tr><tr><td><b>INSTITUTE</b></td><td> : "+xmlInstitute+"</td></tr><tr><td><b>YEAR</b></td><td> : "+xmlYear+"</td></tr><tr><td><b>CGPA</b></td><td> : "+xmlCGPA+"</td></tr><tr><td><b>COURSES STUDIED</b></td><td> : "+xmlCourses+"</td></tr><tr><td><b>LABS</b></td><td> : "+xmlLabs+"</td></tr></table></div>";
	} else {
		var xmlCourseName = xmlDoc.getElementsByTagName("coursename")[1].childNodes[0].nodeValue;
		var xmlYear = xmlDoc.getElementsByTagName("year")[1].childNodes[0].nodeValue;
		var xmlInstitute = xmlDoc.getElementsByTagName("institute")[0].childNodes[0].nodeValue;
		var xmlCGPA = xmlDoc.getElementsByTagName("cgpa")[1].childNodes[0].nodeValue;
		var xmlCourses = xmlDoc.getElementsByTagName("courses")[1].childNodes[0].nodeValue;
		var xmlLabs = xmlDoc.getElementsByTagName("labs")[1].childNodes[0].nodeValue;
		document.getElementById("programs").innerHTML = "<div><table><tr><td><b>COURSE NAME</b></td><td> : "+xmlCourseName+"</td></tr><tr><td><b>INSTITUTE</b></td><td> : "+xmlInstitute+"</td></tr><tr><td><b>YEAR</b></td><td> : "+xmlYear+"</td></tr><tr><td><b>CGPA</b></td><td> : "+xmlCGPA+"</td></tr><tr><td><b>COURSES STUDIED</b></td><td> : "+xmlCourses+"</td></tr><tr><td><b>LABS</b></td><td> : "+xmlLabs+"</td></tr></table></div>";
	}
	
}

// function to update the web page
function xmlQuery(xmlDoc) {
	//updating homepage and about me pages
	document.getElementById("myname").innerHTML = xmlDoc.getElementsByTagName("name")[0].childNodes[0].nodeValue;
	document.getElementById("name").innerHTML = xmlDoc.getElementsByTagName("name")[0].childNodes[0].nodeValue;
	document.getElementById("title").innerHTML = xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
	document.getElementById("university").innerHTML = xmlDoc.getElementsByTagName("university")[0].childNodes[0].nodeValue;
	document.getElementById("mytitle").innerHTML = xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
	document.getElementById("phone").innerHTML = xmlDoc.getElementsByTagName("phone")[0].childNodes[0].nodeValue;
	document.getElementById("address").innerHTML = xmlDoc.getElementsByTagName("address")[0].childNodes[0].nodeValue;
	xmlEmail = xmlDoc.getElementsByTagName("email")[0].childNodes[0].nodeValue;
	document.getElementById("email").innerHTML = "<a href=\"mailto:"+xmlEmail+"\">"+xmlEmail+"</a>";
	xmlWebsite =  xmlDoc.getElementsByTagName("website")[0].childNodes[0].nodeValue;
	document.getElementById("website").innerHTML = "<a href=\"http://"+xmlWebsite+"\">"+xmlWebsite+"</a>";
	
	//updating skillsets
	document.getElementById("webdev").style.width = xmlDoc.getElementsByTagName("webdevelopment")[0].childNodes[0].nodeValue;
	document.getElementById("htmlcss").style.width = xmlDoc.getElementsByTagName("htmlcss")[0].childNodes[0].nodeValue;
	document.getElementById("js").style.width = xmlDoc.getElementsByTagName("javascript")[0].childNodes[0].nodeValue;
	document.getElementById("php").style.width = xmlDoc.getElementsByTagName("php")[0].childNodes[0].nodeValue;
	document.getElementById("comm").style.width = xmlDoc.getElementsByTagName("communication")[0].childNodes[0].nodeValue;
	document.getElementById("smm").style.width = xmlDoc.getElementsByTagName("socialmedia")[0].childNodes[0].nodeValue;
	document.getElementById("leadership").style.width = xmlDoc.getElementsByTagName("leadership")[0].childNodes[0].nodeValue;
	document.getElementById("confidence").style.width = xmlDoc.getElementsByTagName("confidence")[0].childNodes[0].nodeValue;
}

// generating the captcha code for contact page
function Captcha()
{
	var alpha = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9');
	var i;
	for (i=0;i<6;i++)
	{
		var c0 = alpha[Math.floor(Math.random() * alpha.length)];
		var c1 = alpha[Math.floor(Math.random() * alpha.length)];
		var c2 = alpha[Math.floor(Math.random() * alpha.length)];
		var c3 = alpha[Math.floor(Math.random() * alpha.length)];
		var c4 = alpha[Math.floor(Math.random() * alpha.length)];
		var c5 = alpha[Math.floor(Math.random() * alpha.length)];
		var c6 = alpha[Math.floor(Math.random() * alpha.length)];
	}
	var captchaCode = c0 + ' ' + c1 + ' ' + c2 + ' ' + c3 + ' ' + c4 + ' ' + c5 + ' ' + c6;
	document.getElementById("captchaText").innerHTML = captchaCode;
	document.getElementById("captchaText").value = captchaCode;
}

// validate if the user entered captcha code is correct or not...
function ValidCaptcha() {
	var strcaptcha = removeSpaces(document.getElementById("captchaText").value);
	var strtext = removeSpaces(document.getElementById("captchaInput").value);
	if (strcaptcha == strtext)
	{
		alert("Thank You For Contacting Us!");
	}
	else
	{
		alert("Please enter correct Captcha code!");
	}
}

function removeSpaces(string)
{
	return string.split(' ').join('');
}