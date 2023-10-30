/**
 * 
 */
var input = Number(prompt("숫자입력"),"0");

document.write("입력한 숫자"+input+"<br>")
if(input%2 ==0)
{
	document.write("짝수");
}
else{
	document.write("홀수");
}