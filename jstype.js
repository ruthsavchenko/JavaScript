// bool type cast
!!1 //true
!!2 //true
!true //false
!false //true
!true === false //true
1 !== 2 //true
!(1 === 1) //false
!(1 !== 1) //true
!0 //true
!!0 //false
// or
2 || 1 //2
2 || 0 //2
//and
2 && 1 //1
1 && 2 //2
0 && 2 //0
// or and and difference
0 || 1 || 2 //1
0 && 1 && 2 //0
2 || 1 || 0 //2
2 && 1 && 0 //0
//null, undefined, so on
null || 2 //2
undefined && 1 //undefined
  //brackets and complex expressions
  (undefined || 2) && (3 || 0) //3
(2 && 1) || (null && 0) //1
(2 > 1) && "greater" //'greater'
(2 < 1) && null //false
null && (2 < 1) //null
// ternary operator
1 ? "one" : "not one" //"one"
0 ? "zero" : "not zero" //"not zero"
"0" ? "\"zero\"" : "not `zero`" //"\"zero\""
parseInt("0") ? 'true' : 'false' //'false'
("" || 2) && (3 || "3.5") || (4 && 5) //2 && 3 || 5 = 3
(-1 + 1) && "zero" //0
"-1" + 1 && "oups" //"oups"
(typeof null === 'object') ? "null is object" : "null is null"; //"null is object"


(null >= 0) + 5 //6
null - 5 + ("null - 5") + "false" //-5 + "null - 5" + "false" = "-5null - 5false"
true - true + "hello" === "0hello" //0 + "hello" = "0hello" === "0hello" //true
null + " is " + (typeof null) //"null is object"
Boolean(null) + !Boolean("") / Boolean(1) + Boolean(undefined) //false + true / true + false = 1 / 1 = 1
"null" + +("hello" > "Hello") - Number("3") //"null" + 1 - 3 = NaN
34 + "43" - parseInt("43px") //"3443" - 43 = 3400
String(false) - String(true) + "not" + NaN //"false" - "true" + "not" + NaN = NaN + "notNaN" = "NaNnotNaN"
("text" > 'Text') + 5 + null * 45 //1 + 5 + 0 * 45 = 6
!!parseFloat("t123") - false + true // false - false + 1 = 1
"hello" && 0 - '22' //1
!!Boolean("") || Boolean("code") - 45*2 //false || -89 = -89
Number("23") - Number(true) - Number(null) - undefined //NaN