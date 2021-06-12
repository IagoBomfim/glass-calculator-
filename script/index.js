function insert(num) 
{
   var number = document.getElementById('result').innerHTML;
   document.getElementById('result').innerHTML = number + num;
}

function clean() 
{
   document.getElementById('result').innerHTML = "";
}

function delet()
{
   var number = document.getElementById('result').innerHTML;
   document.getElementById('result').innerHTML = number.substring(0, result.length - 1)
}

function calc()
{
	var number = document.getElementById('result').innerHTML;
   if(number){
   	document.getElementById('result').innerHTML = eval(number)
   }
}
