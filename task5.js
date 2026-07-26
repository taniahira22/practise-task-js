//firstName valid(camelcase)
//First_Name valid(letter and underscore allowed)
//user123 valid(number allow after the first character)
//123user invalid(can not start with a number)
//my_name invalid(hyphens are not allowed in identifier)
//$price valid($is legal starting character)
//_total valid(is a legal starting character)
//let invalid(reserved keyword)
let firstName = "Alex";
let First_Name ="Alex";
let user123 = 1;
let $price = 19.99;
let _total = 0;
console.log(firstName,First_Name,user123,$price,_total);