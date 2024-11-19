console.log("Hello World!");
let serumPrize= 200;
let oilPrize= 100;
let deliveryCharges= 49;
let output=`You pay ${serumPrize+oilPrize+deliveryCharges} Rupees..`;
console.log(deliveryCharges);
console.log(serumPrize= 200);
console.log(oilPrize= 100);
console.log(output);

// if statement
let firstname = "nikita";
if(firstname == "nikita") {
    console.log (`Welcome ${firstname}`);
}
let colour ="yellow";

if (colour==="yellow"){
    console.log ("Go slow");
}

if (colour==="red"){
    console.log ("Stop");
}

if (colour==="green"){
    console.log ("Go");
}
let marks = 79;
if(marks>=80){
    console.log('A+ grade');
}
else if(marks>=70){
    console.log('A grade');
}
else if(marks>=65){
    console.log('B grade');
}
else if(marks>=50){
    console.log('C grade');
}

else if(marks<=33){
    console.log('fail');
}
let month="April";
if(month==="january"){
console.log("Winter is here..");
}
if(month==="April"){
    console.log("Summer is here..");
    }
let size="S";
if (size==="XL"){
    console.log("Prize is 250");
}
else if (size==="L"){
    console.log("Prize is 200");
}
else if (size==="M"){
    console.log("Prize is 100");
}
else  {
    console.log("Prize is 50");
}
let marks = 80;
if(marks>=33){
    console.log("Pass");
    if(marks>=80){
        console.log("Outstanding");
    }
    else("Better luck next time");
}
let str= "liver";
if( str[0] === "a" && str.length > 3 ){
    console.log ( "Good String" )
}
else{
    console.log ( "Not a good string" )
}
let num= 12;
if((num%3===0)&& ((num+1==15)|| num-1==10)){
    console.log("Safe");

}
else{
    console.log("Not safe");
}
let day="saturday";
switch(day){
    case("monday"):
   console.log("It's Monday");
    break;

 case("tuesday"):
   console.log("It's Tuesday");
    break;

    case("wednesday"):
   console.log("It's Wednesday");

    case("thursday"):
   console.log("It's Thursday");
    break;

    default:
        console.log("It's Weekend")
}
let day=4;
switch(day){
    case(1):
   console.log("It's Monday");
    break;

 case(2):
   console.log("It's Tuesday");
    break;

    case(3):
   console.log("It's Wednesday");

    case(4):
   console.log("It's Thursday");
    break;

    default:
        console.log("It's Weekend")
}
alert("Something went wrong ,Please try again later.");
console.log("Please Reload the page");
console.warn("Try after 29 sec...");
console.error("Un Error Occured, Please try again later.");
let firstname = prompt("Enter your name:");
let secondname = prompt("Enter your surname:");
let msg = "Welcome"+" "+" "+firstname+" "+" "+secondname+" "+"!";
alert(msg);


Assignment question

Q.no1
let num=7;
if(num%10==0){
    console.log("good")
}
else{
    console.log("bad")
}
Q.no2

let fullname = prompt("Enter your name:");
let age = prompt("Enter your age:");
let msg = `${fullname} your age is ${age}  `;
alert(msg);

Q.no3

let month=6;
switch(month){
       case(1):
   console.log("It's january,february, march");
    break;

 case(2):
   console.log("It's april,may,june");
    break;

    case(3):
   console.log("It's july,august,september");

    case(4):
   console.log("It october,november,december");
    break;

    default:
        console.log("It's not a quartor");
}
Q.no.4


let str="apple";
if(str[0]==="a" && str.length >= 5){
    console.log("Its a golden string");
}
else{
    console.log("It's a bad string");
}

Q.no.5

let a=9;
let b=5;
let c=8;
if(a>b && a>c){
    console.log("a is greater")
}
else if (b>a && b>c){
    console.log("b is greater")
}
else{
    console.log("c is greater")
}

Q.no.6
let num1=32;
let num2=47852;
if(num1%10 == num2%10){
    console.log("Numbers have the same last digit is ", num1%10);
}
else{
    console.log("Numbers does not have the same last digit")
}

String methods
Trim
let name="   Niki ta   ";
let password = prompt("Enter your Password:");
let newpassword = password.trim();
console.log(newpassword);
let website = "caresupp";
console.log(website.toUpperCase());
let company = "TaskMentor";
console.log(company.toLowerCase());

Methods with argument
let shop = "CaresuppMedical";
console.log(shop);
console.log("The Index of supp is:",shop.indexOf("supp"));

Methode chaining
let name ="             Nikita Vishnoi            ";
let newMsg = name.trim() .toUpperCase();
console.log(newMsg);
let msg = "help!   ";
console.log(msg.trim().toUpperCase());
let clg = "ApnaCollege";
console.log(clg.slice(4).replace("l", "t"))
Slice Methode
let shop= "CaresuppMedical";
console.log(shop.slice(0,4));
console.log(shop.slice(4,8));
console.log(shop.slice(8));
console.log(shop.slice(-7));

Replace methode
let shop = "medicalmedical";
console.log(shop.replace("medical", "caresupp"))

Repeat Methode
let name = "jeeva ";
console.log(name.repeat(10));