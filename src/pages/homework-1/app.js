
// let name = prompt ('Введите ваше имя:')
// let surname = prompt ('Введите вашу фамилию:')
// let age = prompt ('Введите сколько вам лет:')

// let user = {
// 	name:name,
// 	surname:surname,
// 	age:age
// }

// console.log(user);


// let number = prompt('Введиет число ');
// console.log(+number);
// while (isNaN(+number)){
// 	number = prompt ('Вы ошиблись,введиет число');
// 	console.log(+number);
// }

// /homework#2(1)/
// let number = +(prompt("Введите число - не больше 50"));
// let i = 1;

//   if (isNaN(number)) {
//     alert("Ошибка!!! Введите число");
//    }

//   if (number > 50) {
//     alert("Слишком большое число");
//     number = 0;
//   }

//   for (i=0; i <= number; i++) {
//     if (i % 4) {
//       console.log(i);
//     }
//   }




//  /homework#2(2)/
// let number = +(prompt('Введите число для факториала'));
// let i = 1;
// let factorial = 1;

// if (isNaN(number)) {
//     alert("Ошибка!!! Введите число");
//  }else if (number<0) {
//  	alert ("Введено отрицательное число");
//  } else { 
//     while (i<number+1) {
//         factorial *= i;
//         i+=1;
//     }
//     console.log(factorial);
// }




// /homework#2(3)/
// let number = +(prompt("Введите число для возведенеи в степень"));
// let step = +(prompt("Введите степень"));
// let sum = 1;

// if (isNaN(number)) {
//     alert("Ошибка!!! Введите число");
// }
// else if (number<0) {
//  	alert ("Введена некорректная степень");
// }
// else { 
// 	   if (step===0){
// 	   console.log(1);
// 	} 
// 	for(i=1; i<=step; i++){
// 	  sum *= number;

// 	if(step<0){
// 	  sum *=(1/number);    
// 	 }

// 	   console.log(sum);
// 	}

// }

/homework#2(4)/


(function (){
    let rand = Math.floor(1+Math.random()*10);
    let number;
    console.log(rand);
    while (true) {
        number = +(prompt("Угадайте число"));
        if (isNaN(number)) {
             alert("Ошибка!!! Введено некорректное число.");
            
            }else if (rand!=number) {
                alert("Не угадали! Попробуйте еще раз.");
            }
            else {
                alert ("Поздравляю вы угадали.");
                break
            }
    }
})();











// else if (step>0) {
//     for (let i=0; i<=step; i++) {
//        sum*=num;
//      }
//   } 
// else {
//     for (let i=0; i<=(-step); i++)
//       sum*=(1/num);
//      }
//         console.log(sum)
 


// function fac(num){
// 	if(num < 0) return
//     if (num ===1)return num
//     	return num * fac (num-1);

// }
// fac(5);


// let num = +(prompt('введите число'));
// let step = +(prompt('введите степень'));
// let sum = 1;

// if (isNaN(num)) {
//     alert("Ошибка!!! Введите число");
// }
// for(let i=1; i<=step; i++){
//   step === 0 ===sum;
//   sum = sum * num;
// if(step<0){
//   sum = 1/num * sum;    
//  }

//    console.log(sum);
// }





