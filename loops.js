// let i;
// for (i=1; i<=10; i++){
//     console.log(i);
// }

// for (let  i=10; i>=1; i--)
// {
//     console.log(i);
// }

// for (let  i=10; i>=1; i++)
// {
//     console.log(i);
// }

// Even  Numbers

// for(let i=20; i>=1; i=i-2)
// {
//     console.log(i);
// }
// Odd Numbers

// for(let i=1; i<=150;  i=i+2)
// {
//     console.log(i);
// }

// Table of Five
// for(let i=5; i<=50; i=i+5){
//     console.log(i);
// }

// printing table Through User Input
//  let n = prompt("Enter the number:");
//      n = parseInt(n);
//  for(let i=n; i<=n*10; i=i+n){
//     console.log(i);
//  }

// Nested loops
// for(let i=4; i>=1; i--){
//     console.log("First loop");

// for(let j=5; j>=1; j--){
//     console.log(j);
// }
// }

// While Loop
// let i = 0;
// while(i <= 5){
//     console.log(i);
//     i++;
// }

// let i = 1;
// while(i <= 15){
//     console.log(i);
//     i= 1+2;
// }

// Movie guessing game
// let favourite = "Sita Ramam";
// let guess  = prompt("Guess my favourite movie");
// while ((guess != favourite)){
//     if(guess=="quite")
//     {
//         console.log ("you quite,  favourite movie is Sita Ramam");
//         break;
//     }
//     guess  = prompt("Wrong movie, Guess the favourite movie again");
// }

//     if(guess==favourite){
//     console.log("Congrats you guess the right movie.")
//    }
   
// Break keyword

// let i = 5;
// while(i >= 1){
//     if (i == 1){
//         break;
//     }
//     console.log (i);
//     i--;   
    
// }

// Loops with array
// let movies = ["Dhoom", "Sita Ramam", "Sholay", "Rocket", "Krish","Bhediya"];
// for(let i=1; i<movies.length; i=i+2){
//     console.log(i, movies[i]);

// }
//for printing backwards
// for (let i=movies.length-1; i>=0; i--){
//     console.log(i, movies[i]);

// }

// Loops with nested array
// let Devices = [["Computer","Tv","Remote"],["Bluetooth","Charger","Headphone"]];
// for(let i=0; i<Devices.length; i++){
//     console.log(i, Devices[i],Devices[i].length);
//     for(let j=0; j<Devices[i].length; j++){
//         console.log(j=[j], Devices[i][j]);
//     }
// }

// for of loop
// let vegs = ["cucumber","red chilli","potato"]
// for (veg of vegs){
//     console.log(veg);
// }
// for(char of "Nikita")
// {
//     console.log(char);
// }

// Nested for of loops

// let movies = [["Dhoom", "Sita Ramam", "Sholay"], ["Rocket", "Krish","Bhediya"]];
// for(movie of movies){
// for (movi of movie){
//     console.log(movi)
// }
// }