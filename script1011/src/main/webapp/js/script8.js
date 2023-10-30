/**
 * 
 */

function calcBMI()
{
	var weight = Number(document.getElementById('weight').value);
	var input = Number(document.getElementById('height').value);
	var height = input/100;
	var result = weight/(height*height);
	
	
	var STTUS="";
	
	
//	document.write("test : "+input+weight);
	
	

	if(result >= 18.5 && result<23)
	{
		//document.write("정상<br>");
		STTUS = "정상";
	}
	else if(result >= 23&&result<25)
	{
		//	document.write("과체중<br>");
		STTUS = "과체중";
	}
	else if(result>=25&& result<30)
	{
		//	document.write("경도비만<br>");
		STTUS = "경도비만";
	}
	else if(result >=30)
	{
		//	document.write("중등도비만<br>");
		STTUS = "중등도비만";
	}
	else{
		//	document.write("저체중<br>");
		STTUS = "저체중";
	}
	
	const element1 = document.getElementById('guide_bmi1');
	element1.innerText = result.toString();
	const element2 = document.getElementById('guide_bmi2');
	element2.innerText = result.toString();
	const element3 = document.getElementById('guide_sttus');
	element3.innerText =STTUS;
	
	const element4 = document.getElementById('result_box');
	element4.style.display='block';
	/*
	document.getElementById('guide_bmi1').text(result);
	document.getElementById('guide_bmi2').text(result);
	document.getElementById('guide_sttus').text(result);
	document.getElementById('result_box').show();
	*/
	/*
	$('#guide_bmi1').text(result);
	$('#guide_bmi2').text(result);
	$('#guide_sttus').text(STTUS);
	
	$('#result_box').show();
	*/
}
/* var input = Number(prompt("신장 입력","0"));

 var weight = Number(prompt("체중 입력","0"));
 */
