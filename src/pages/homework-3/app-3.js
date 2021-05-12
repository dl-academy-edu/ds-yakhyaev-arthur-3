// Тернарный оператор 
// const city ="Samara";
// const isSamara = city ==="Samara"
// ?"yes"
// :city ==="Togl"
// ?"yes"
// :"No";
//    console.log(isSamara);



//homework#3(1)/

(function getAge() {

	let age = prompt("Сколько вам лет ?");

	if(age > 18){
		alert("Ну ладно проходи.");
	}else if(age<18){
		alert("Нет, тебе еще рано !");
	}else{
		getAge(age);
	}

    
}());

//homework#3(2)/
// Функции являются чистыми:
//  потому что не имеет вывода на экран,так же с одинаковым аргументом выводят одинаковый результат.
//  Не имеет побочных эффектов
// (вывод на экран, http-методы);  

 (function () {

    function add(x,y) {
      return x + y;
    }

    function subtract(x,y) {
      return x - y;
    }

    function divide(x,y) {
      return x / y;
    }

    function multiply(x,y) {
      return x * y;
    }

  }());

 //homework#3(3)/

 function addCreator(firstNum){
 	let sum=firstNum;
 	return function (secondNum=0){
         sum+=secondNum;
         return sum
    }
}; 

const add = addCreator(5);
console.log(add(5));
console.log(addCreator(1)(3));

//homework#3(4)/

(function (){

	const counter1 = counterCreater(-1);
	const counter2 = counterCreater(4);
	const counter3 = counterCreater();

	console.log(counter1());
	console.log(counter1());

	console.log(counter2());
	console.log(counter2());
	

	console.log(counter3());
	console.log(counter3());

	function counterCreater(step=2){
         let index = 0;
         return () => index += step;
         
	}

}());













