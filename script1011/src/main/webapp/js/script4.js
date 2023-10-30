/**
 * 
 */

var num1 = Number(prompt("첫번째 숫자 입력","0"));
var num2 = Number(prompt("두번째 숫자 입력","0"));

var sum=0;
for(var i = num1; i <= num2 ; i++){
	
	sum = sum+i;

}

document.write(num1+"부터 "+num2+" 까지의 합 : "+sum);