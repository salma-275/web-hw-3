const languages = ["HTML" , "CSS" , "JavaScripts" , "PHP" , "Swift" , "Java" ]
const neded_languages = 1;

cconsole.log(" مرحباً بك في برنامج توضيف المبرمجين ، يرجى الاجابه على الاسئله التاليه");

let neme = prompt("ما اسمك");
let age = parseInt(prompt("كم عمرك"));
let exp = parseInt(prompt("كم عدد سنوات الخبره  لديك "));

console.log("لغات البرمجه ");
console.log("1. " + languages [0]);
console.log("1. " + languages [1]);
console.log("1. " + languages [2]);
console.log("1. " + languages [3]);
console.log("1. " + languages [4]);
console.log("1. " + languages [5]);
 

les skill = prompt(" اختر لغه تتقنها من لغات البرمجه المذكوره بادخاال رقمها ");
les skill2 = prompt("اختر لغة برمجه اخرى ");

if(age > 25 && age < 40 && exp > 3 && skill == neded_languages && skill2 == neded_languages)
{
     console.log("تهانينا تم قبولك يا " + neme);
     
}else {
    console.log(" نأسف، انت لست رائعاً بالشكل لتعمل معنا  " + neme);
    
}


السؤال الثاني

 
function logger(tempreatuss) {
for (let i = 0; i < tempreatuss.length; i++) {
    console.log(tempreatuss[i]);
  }    
} 
let array = [10, 20, 30];clogger(array);

let tempreatuss = [28, 67, 89, 108];
let cel_temp =[];


function toCel(tempreatuss) {
 for (let i = 0; i < tempreatuss.length; i++) {
    cel_temp.push(parseInt(tempreatuss[i] - 32) * (5/ 9))); 
     
 } 
 return cel_temp;  
}
toCel(tempreatuss); 
//اذا بتأكد احط console.log 


let hot = [];
let min_value = 30;
function hottestDays (cel_temp, min_value ){
    for (let i = 0; i < cel_temp.length; i++) {
       if (tempreatuss[i ] > min_value) {
          hot.push(tempreatuss of [i]); 
       }
        
    }
    return hot;
}
hottestDays (cel_temp, min_value);


let ffeh_temp = [ 32, 70, 99, 100 ];
let mmin_value = 70;
let ccel_temp = [];

function loghottDays (tempreatuss, min_value){
 logger(toCel(hottestDays(tempreatuss, min_value), cel_temp)));
}
loghottDays(ffeh_temp, mmin_value );
___________________________________________________________________________________

// let calculator = [ ];
// function addCalculator( ){
//    console.log (document.getElementById("myCalculator").value;);
// let quizes = [ ];
// let midterm = [ ];
// let finalTest = [ ];
// let oral = [ ];
// function MyQuizes (quizes == 10){
//  console.log(document.getElem entById("quizes").value;);
// }
// function MyMidterm (midterm == 25){
//  console.log(document.getElementById("midterm").value;);
// }
// function MyFinalTest (finalTest == 50){
//  console.log(document.getElementById("finalTest").value;);
// }
// function MyOral (oral == 15){
//  console.log(document.getElementById("oral").value;);
// }   
// }
 
// if (quizes + midterm + finalTest + oral >=100) {
//     console.log("A");
// }
// if (quizes + midterm + finalTest + oral >=89) {
//     console.log("B");
    
// }
// if  (quizes + midterm + finalTest + oral <=79) {
//     console.log ("C")
// }
// if (quizes + midterm + finalTest + oral <=96) {
    
// }if else {
//    console.log("F");
   
// }
// function totel ( ) {
//    let mark = document.getElementById("MyQuizes");.Value;
//    let mark2 = document.getElementById("MyMidterm");.Value;
//    let mark3 = document.getElementById("MyFinalTest");.Value;
//    let mark4 = document.getElementById("MyOral");.Value;
//    let toteel = document.getElementById("TheTotel");Value;

//    if(mark == 10 && mark2 == 25 && mark3 == 50 && mark4 == 15){
//        alert("عفيه عالشاطرر")
//    }
// }
// let quize = [];
// let midterm = [];
// let finalTest = [];
// let oral = [];
 
function myCalculator(){
const quize = 10% ;
const midterm = 25% ;
const finalTest = 50% ;
const oral = 15% ;
       let num = document.getElementById("num").value;
        if (quizes + midterm + finalTest + oral == 90, 100){
              document.getElementById("numericGrade").innerHTML."your numeric grade is:" + num
              document.getElementById("letterGrade").innerHTML."your letter grade is: A"  
        }
        else if (quizes + midterm + finalTest + oral <==80){
              document.getElementById("numericGrade").innerHTML."your numeric grade is:" + num
              document.getElementById("letterGrade").innerHTML."your letter grade is: B" 
        }
        else if (quizes + midterm + finalTest + oral <==70){
              document.getElementById("numericGrade").innerHTML."your numeric grade is:" + num 
              document.getElementById("letterGrade").innerHTML."your letter grade is: C"
        }
        else if (quizes + midterm + finalTest + oral <==60){
              document.getElementById("numericGrade").innerHTML."your numeric grade is:" + num 
              document.getElementById("letterGrade").innerHTML."your letter grade is: D"    
        }
    } else 
    document.getElementById("numericGrade").innerHTML."your numeric grade is:" + num 
    document.getElementById("letterGrade").innerHTML."your letter grade is: F" 
    



    















