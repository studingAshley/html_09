/**
 * 
 */

 var sBtn = function(){
	 
//	 alert("입력버튼을 클릭함");
	 
	 const element = document.getElementById('score');
	 const query = document.querySelector('#score');
	 var query2 = document.querySelector('#mark');
	 const element2 = document.getElementById('mark');
	 
	 var score = Number(element.value);
	 var grade = "";
	 
	 if(score>=90)
	 {
		 grade="A";
	 }
	 else if(score>=80)
	 {
		 grade="B";
	 }
	 else if(score>=70)
	 {
		 grade="C";
	 }
	 else if(score>=60)
	 {
		 grade="D";
	 }
	 else
	 {
		 grade="F";
	 }
	 

	 element2.innerText = grade;
 }
 
var loginBtn = function(){
	

 	const id = document.querySelector("#id");
 	const id2 = document.getElementById('id');
 	const pw = document.querySelector("#pw");
 	
 	if(id.value=="aaa" && pw.value=="1111")
 	{
		 alert("일치합니다.");
		 location.href="https://www.cjcookit.com/pc/main";
	}
	else{
		 alert("불일치합니다.");
		 id.value="";
		 pw.value="";
		 id2.focus();
		 const element= document.querySelector('.foot_ccm');
		 document.documentElement.scrollTop = element.scrollHeight;
	}

}

var siteBtn = function(){
	
	const element = document.querySelector('input[id="site"]:checked');
	const element2 = document.querySelector('div[class="d05"]');
	
//	var site = element.value;
	
	var d = element2.innerText;
	var dd = element2.
	
//	var url ="";
	alert(d);
	console.log(d);
/*	
	switch(site){
		case "구글":
			url = "http://www.google.com";
			break;
		case "다음" :
			url = "http://www.daum.net";
			break;
		case "네이버" :
			url = "http://www.naver.com";
			break;
		case "네이트" : 
			url = "http://www.nate.com";
			break;
			
	}
*/
//	location.href=url
	
	
	
	
}



























