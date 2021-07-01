// CH#1 Q1
alert("welcome");
// CH#1 Q2
alert("ERROR! Please Enter a valid Passsword");
// CH#1 Q3
alert("Welcome to JS Land ... <br> Hapy coding");
// CH#1 Q4
alert("Welcome to JS Land");
alert("Happy Coding");
//CH1 q5  
// to be entered in browser console
alert("Hello i can run js thorgh my Web browser");
//CH1 q6
//Already used alerts in the project
//CH1 q7
//done in html file
//----------------------------chapter #2 ---------------------------
//Declare a variable called username.
 var username;
 //Declare a variable called myName & assign to it a string
//that represents your Full Name.
var myName= 'Siddique Muhammad Butt';
//Write script to
//a) Declare a JS variable, titled message.
//b) Assign “Hello World” to variable message
//c) Display the message in alert box.
var message;
message='Hello World';
alert(message);
//Write a script to save student’s bio data in JS variables and
//show the data in alert boxes.
var stdname = 'john';
var age = 26;
var course= 'web development';
alert(stdname);
alert(age);
alert(course);
//Write a script to display the following alert using one JS
//variable:
alert ("PIZZA \r\nPIZZ \r\nPIZ\r\nPI \r\nP");
//Declare a variable called email and assign to it a string that
//represents your Email Address(e.g. example@example.com).
//Show the blow mentioned message in an alert box.(Hint: use
//string concatenation)
var email = 'example@example.com';
alert("My email address is " + email);
//Declare a variable called book & give it the value “A
//smarter way to learn JavaScript”. Display the following
//message in an alert box:
var book = 'A smarter way to learn JavaScript';
alert(book);
//Write a script to display this in browser through JS
document.write("Yah ! i can write html through java script");
//Store following string in a variable and show in alert and browser through JS
alert("▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬");
//-----------------chapter # 3 ----------------------------------------
//Declare a variable called age & assign to it your age. Show your age in an alert box.
var my_age = 28;
alert("I am " + my_age + "years old") ;
//Declare & initialize a variable to keep track of how many 
//times a visitor has visited a web page. Show his/her 
//number of visits on your web page. For example: “You have visited this site N times”.
var visited_times=5;
alert("You have visited this site" + visited_times +"times");
//Declare a variable called birthYear & assign to it your birth year.
// Show the following message in your browser:
    var birthYear=1992;
    document.writeln("My birth Year is " + birthYear +"<br>");
    document.writeln("DAta type of my declared variable is  " + typeof(birthYear));
//A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information: a. Visitor’s name b. Product title c. Quantity i.e. how many products a visitor wants to order Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.
    var visitorName = "John Doe";
var productTitle = "Mobile phone";
var qty = 20;
document.write(visitorName+" ordered " );

document.write( qty + " " );
document.write( productTitle + " from xyz store" );
//--------------------chapter #4--------------
//Declare 3 variables in one statement.
var v1, v2,v3;
//2. Declare 5 legal & 5 illegal variable names.
var Case1,Case2,Case3,Case4,Case5;
var 1-a,1b,-1c,1d,1e;
//3. Display this in your browser
//a) A heading stating “Rules for naming JS variables”
//b) Variable names can only contain ______, ______, ______ and ______. For example $my_1stVariable
//c) Variables must begin with a ______, ______ or _____. For example $name, _name or name
//d) Variable names are case _________
//e) Variable names should not be JS _________
document.write("<h1>Rules for naming JS variables</h1><br>");
document.write("variable name can only contain , number , $ and For example : $my_1stVariable<br>");
document.write("variable must begin with  a letter ,$ or _.For example : $name,_name or name<br>");
document.write("variable names are case sensitive<br>");
document.write("variable name shoud not be JS keywords<br>");

//---------------------------chapter#5-----------------------
//Write a program that take two numbers & add them in a new variable. Show the result in your browser.
var v1 =20 , v2 =5;
var sumOf = v1 +v2;
document.write("sum of " + v1 + " and " +v2+ " is " + sumOf + "<br>" );
//Repeat task1 for subtraction, multiplication, division & modulus.
var sumOf = v1 +v2;
var diffOf = v1 -v2;
var multOf = v1*v2;
var divOf = v1/v2;
var mod0f = v1%v2;
document.write("sum of " + v1 + " and " +v2+ " is " + sumOf + "<br>" );
document.write("Difference of  " + v1 + " and " +v2+ " is " + diffOf + "<br>" );
document.write("Multiple of  " + v1 + " with " +v2+ " is " + multOf + "<br>" );
document.write("Division of " + v1 + " by " +v2+ " is " + divOf + "<br>" );
document.write("Modulus of " + v1 + " by " +v2+ " is " + mod0f + "<br>" );
// 3 Do the following using JS Mathematic Expressions
var v1 ;
document.write("Value after variable declaration is " + v1 + "<br>" );
v1 = 10;
document.write("Value after variable declaration is " + v1 + "<br>" );
document.write("Initial value: "+v1 + "<br>");
v1++;
document.write("Value after increment is: " +v1+ "<br>" ) ;
v1=v1+7;
document.write("Value after addition is: " +v1+ "<br>" ) ;
v1--;
document.write("Value after decrement is: " +v1+ "<br>" ) ;
v1=v1%3;
document.write("The remainder is : " +v1+ "<br>" ) ;
//Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:
var ticketPrice =50;
var noOfTickets= 5;
var totalCost= ticketPrice*noOfTickets;
document.write("The cost of buying " + noOfTickets+ " tickets to a movie is " + totalCost + " PKR.");
//5. Write a script to display multiplication table of any number in your browser. E.g
document.write("<h1>Table of Four</h1>");
var num =1,mult = num*4;
for(var i=1;i<=10;i++)
{
document.write("4 x" + num + " = " + mult + "<br>" );
num++;
mult = num*4;
}
//The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
//a. Store a Celsius temperature into a variable.
//b. Convert it to Fahrenheit & output “NNoC is NNoF”.
//c. Now store a Fahrenheit temperature into a variable.
//d. Convert it to Celsius & output “NNoF is NNoC”.
var tempc =100;
var tempTofh = (tempc*9/5)+32;
document.write(tempc + "C is" + tempTofh + " C <br>");
var tempF =200;
var tempToDc = (tempF- 32)*5/9;
document.write(tempF + "F is" + tempToDc + " F <br>");
//Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
document.write("<h1>Shopping cart</h1>");
var PriceOfItem1 = 650;
var QuantityOfitem1 = 3;
var PriceOfItem2 = 100;
var QuantityOfitem2 = 7;
var Shippingcharges =100 ;
var TotalCost = (PriceOfItem1*QuantityOfitem1)+(PriceOfItem2*QuantityOfitem2)+Shippingcharges;
document.write("Price of item 1 is " + PriceOfItem1 +"<br>");
document.write("Quantity of item 1 is " + QuantityOfitem1 + "<br>");
document.write("Price of item 2 is " + PriceOfItem1 +"<br>");
document.write("Quantity  of item 2 is " + QuantityOfitem2 +"<br>");
document.write("Shipping charges : " + Shippingcharges+ "<br>");
document.write("Total cost is " + TotalCost +"<br>");
//Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser
document.write("<h1>Mark Sheet</h1>");
var Totalnarks = 980;
var MArksObtained = 804;
var Percentage = MArksObtained/Totalnarks *100;

document.write("Total marks " + Totalnarks +"<br>");
document.write("Marks obtained " + MArksObtained + "<br>");
document.write("Percentage " + Percentage +"<br>");

//Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)
document.write("<h1>Currency in Pak Rupees</h1>");
var Usd = 10;
var Riy = 25;
var TotalPakRupees = (Usd*104.80)+(Riy+28);

document.write("Total currency " + TotalPakRupees +" Rupees.<br>");

//Write a program to initialize a variable with some number and do arithmetic in following sequence: a. Add 5 b. Multiply by 10 c. Divide the result by 2 Perform all calculations in a single expression
var a = 10;
var arithExp = ((a+5)*10)/2;

//The Age Calculator: Forgot how old someone is? Calculate it! a. Store the current year in a variable. b. Store their birth year in a variable. c. Calculate their 2 possible ages based on the stored values.
var CurrYrear = 2019;
var YearOfBirth1 = 1980;
var YearOfBirth2 = 1992;
var age1 = CurrYrear-YearOfBirth1;
var age2 = CurrYrear-YearOfBirth2;
document.write("They are either " +age1 + " or " +age2+ " years old" ); 


//12. The Geometrizer: Calculate properties of a circle. a. Store a radius into a variable.
document.write("<h1>Geometrizer </h1>" ); 

var Radius = 10;
var circumference = 2*(22/7)*Radius;
var Area = (22/7)*(Radius*Radius);
document.write("The circumference is " + circumference + "<br>" ); 
document.write("The Area is " + Area + "<br>" ); 
//The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more. a. Store your favorite snack into a variable b. Store your current age into a variable. c. Store a maximum age into a variable. d. Store an estimated amount per day (as a number). e. Calculate how many would you eat total for the rest of your life.
document.write("<h1>Lifetime Supply calculator </h1>" ); 
var favSnack = "Lays";
var curAge = 26;
var maxAge = 50;
var estAmountPerDay = 2;
var Total = (maxAge-curAge)*365*2;
document.write("You will need " + Total +" "+  favSnack + " to last you until the ripe old age of " + maxAge); 

//----------------------chap#6 to chap#9----------------------
 //1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:
 var a=10;
 document.write("The value of a is "+ a + "<br>");
 document.write("<hr>");
 ++a;
 document.write("The value of ++a is " + a  + "<br>");
 document.write("The value of a is " + a  + "<br>");
 a++;
 document.write("The value of a++ is " + a  + "<br>");
 document.write("The value of a is " + a  + "<br>");
 --a;
 document.write("The value of --a is " + a  + "<br>");
 document.write("The value of a is " + a  + "<br>");
 a--;
 document.write("The value of a-- is " + a  + "<br>");
 document.write("The value of a is " + a  + "<br>");
 //What will be the output in variables a, b & result after execution of the following script:
 var a = 2, b = 1; var result = --a - --b + ++b + b--;
 //Explain the output at each stage:
 // --a; equals 1ddd
 // --a - --b;// 1 - 0 = 1
// --a - --b + ++b;// 1- 0+ 0
 //  --a - --b + ++b + b--; 1-0+0 +0
 
 //Write a program that takes input a name from user & greet the user.
 var a = prompt("enter name");
 alert("hello "+ a);

//Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.
var nm = prompt("Enter number");
alert(nm);
if(nm=='')
{
    document.write("<h1>Table</h1>");
    var num =1,mult = num*5;
    for(var i=1;i<=10;i++)
    {
    document.write("5 x" + num + " = " + mult + "<br>" );
    num++;
    mult = num*5;
    }
}
else {
    document.write("<h1>Table</h1>");
    var num =1,mult = num*nm;
    for(var i=1;i<=10;i++)
    {
    document.write(nm +"x" + num + " = " + mult + "<br>" );
    num++;
    mult = num*nm;
    }
}

//6. Take
//a) Take three subjects name from user and store them in 3 different variables.
//b) Total marks for each subject is 100, store it in another variable.
//c) Take obtained marks for first subject from user and stored it in different variable.
//ALERTS | JAVASCRIPT
//Page 3 of 3
//d) Take obtained marks for remaining 2 subjects from user and store them in variables.
//e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)
var a= prompt("enter subject name");
var b= prompt("enter subject name");
var c= prompt("enter subject name"); 
var max= 100;
var marks1= +prompt("enter marks for subject : " + a);
var perc1 =mark1/total*100;
var marks2= +prompt("enter marks for subject : " + b);
var perc2 =mark2/total*100;
var marks3= +prompt("enter marks for subject : " + c);
var perc3 =marks3/total*100;
var total = a+b+c;
var perc= total/300 *100;
//code for table//
document.createElement("table").setAttribute("id","mytable");




var table = document.getElementById("myTable");
  var row = table.insertRow(0);
  var row = table.insertRow(1);
  var row = table.insertRow(2);
  var row = table.insertRow(3);
  var row = table.insertRow(4);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = "NEW CELL1";
  cell2.innerHTML = "NEW CELL2";


// end //

//------------------------------chapter 9-11--------------------

// 1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”
var city = prompt("your city");
if(city=="karachi")
alert("Welcome to city of lights");
//Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.
var gender = prompt("your gender");
if(gender=="male")
alert("Welcome sir");
else if (gender=="female")
alert("Welcome Ma am");
//Write a program to take input color of road traffic signal from the user & show the message according to this table:
var colour = prompt("input colours");
if(colour=="red")
alert("must stop");
else if (colour=="yellow")
alert("ready to move");
else if (colour=="green")
alert("move now");
else 
alert("invalid inputs");
//Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”
var remFuel = prompt("Enter remaining fuel in litres");
if(remFuel<0.25)
alert("Please refill the fuel in car");
//Run this script, & check whether alert message would be displayed or not. Record the outputs.
// a . true 
// b .not true
// c . condition 2 is true
// d. the cost equals
// e. true alert conditon is shown
//f .no alert but error

//Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table:
document.write("<h1>Marksheet<h1><br>");
var subj1 = parseInt (prompt("enter subject 1 marks"));
var subj2 =parseInt (prompt("enter subject 1 marks"));
var subj3 = parseInt (prompt("enter subject 1 marks"));
var totalMarks = subj1 + subj2 + subj3 ;
//alert(totalMarks);
var percentage = totalMarks/300 *100;
var grade,REMARKS;
if(percentage>=80 && percentage<=100)
{
    grade="A-ONE";
    REMARKS="EXCELLENT";
}
else if(percentage>=70&& percentage<80)
{
    grade="A";
    REMARKS="GOOD";
}
else if(percentage>=60 && percentage<70)
{
    grade="B";
    REMARKS="YOU NEED TO IMPROVE";
}

else if(percentage<60)
{
    grade="FAIL";
    REMARKS="SORRY";
}
document.write("Total marks = 300<br>");
document.write("marks obtained = " + totalMarks + " .<br>");
document.write("Percentage : " + percentage + "<br>");
document.write("Grade: " + grade + "<br>");
document.write("Remarks :" +REMARKS + "<br>");



//Guess game:
//Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number. a. If user guesses the same number, show “Bingo! Correct answer”. b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.

var number = parseInt (prompt("Enter Guessed number "));
var arr=[1,2,3,4,5,6,7,8,9,10];
var number1 = ++number;
for(i=0;i<=arr.length;i++)
{
    if(number==arr[i])
    {
        alert("bingo , you are correct");
        break;
    }
    else if (number==number1)
    {
        alert("close enough to the correct answer");
        break;
    }
}

// Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.

var number = parseInt (prompt("Enter number to check divisibilityy by 3 "));
if(number%3===0)
{
    alert("number is divisible by 3");
}
else 
alert("number is not divisible by 3");

//  Write a program that checks whether the given input is an even number or an odd number.

var number = parseInt (prompt("Enter number to check even or odd "));
if(number%2===0)
{
    alert("number is even");
}
else 
alert("number is odd");
   

//Write a program that takes temperature as input and shows a message based on following criteria a. T > 40 then “It is too hot outside.” b. T > 30 then “The Weather today is Normal.” c. T > 20 then “Today’s Weather is cool.” d. T > 10 then “OMG! Today’s weather is so Cool.”


var num1 = parseInt (prompt("Enter number1 "));
var num2 = parseInt (prompt("Enter number2 "));
var op = parseInt (prompt("Enter operator +,-, * or / "));
var num3;''
if(op==="+)
{
    num3=num1 + num2;
    alert(num3);
}

else if(op==='-')
{
    num3=num1 - num2;
    alert(num3);
}
else if(op==='*')
{
    num3=num1 * num2;
    alert(num3);
}
else if (op==='/')
{
    num3=num1 / num2;
    alert(num3);
}


//Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input: a. First number b. Second number c. Operation (+, -, *, /, %) Compute & show the calculated result to user.

var temp = parseInt (prompt("Enter temperature "));
if(temp>40)
{
    alert("it is too hot outside");
}
else if (temp>30 && temp <40 )
{
    alert("the weather today is normal");
}
else if (temp>20 && temp <30 )
{
    alert("today weather is cold");
}
else if (temp>10 && temp <20 )
alert("todays weather is so cold");


//--------------------chapter 12-13-----------------
//Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).


var ch = prompt("enter");
if (ch >= "A" && ch <= "Z")
          document.write(ch +
          " is an UpperCase character <br>");
        else if (ch >= "a" && ch <= "z")
          document.write(ch +
          " is an LowerCase character <br>");
        else if(ch  >= 48 && ch <= 57) document.write(ch +
        " is a number <br>");

//Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.

var a= prompt();
    var b = prompt();
if(a>b)
alert(a + "is greater than" + b);
else
alert(b + "is greater than" + a);

//Write a program that takes input a number from user & state whether the number is positive, negative or zero.

var a= +prompt("enter number");
if(a>0)
alert("positive number");
else if (a<0)
alert("negative number");
else if(a==0) 
alert("zero");


//Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise
var c= prompt("enter character");
if(c=="a" || c=="e" || c=="i"|| c=="o"|| c=="u")
alert("vowel");
else
alert("not a vowel");

//5. Write a program that
//a. Store correct password in a JS variable.
//b. Asks user to enter his/her password
//c. Validate the two passwords:
//i. Check if user has entered password. If not, then give message “ Please enter your password”
//ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show “Incorrect password” otherwise.
var password= "password";
var pass= prompt("Enter passoword");
if (pass=="")
var pass= prompt("no password entered , please Enter passoword");
if(pass==password)
alert("Correct password");
if(pass!=password)
alert("inCorrect password");

//This if/else statement does not work. Try to fix it:

var greeting; var hour = 13; if (hour < 18)
 {
      greeting = "Good day";
      }     else
        greeting = "Good evening"; 

//Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements


var time = 1900;
if(time>=0000 && time< 1200)
alert("good morning");
else if(time>=1200 && time< 1700)
alert("good afternoon");
else if(time>=1700 && time< 2100)
alert("good evening");
else if(time>=2100 && time<= 2359)
alert("good night");


//-----------------------------chap14-16-----------------------------
//Declare an empty array using JS literal notation to store student names in future.
var stdname=[];
//Declare an empty array using JS object notation to store student names in future.
var stdnames= new Array();
//3. Declare and initialize a strings array.
var str =["as","asd","adar"];
//Declare and initialize a numbers array.
var nmb = [12,123,3,123,];
//Declare and initialize a boolean array.
var bl = [rue,false,false,true];
//Declare and initialize a mixed array.
var mix= [12,"qwe","4t","sdf","asf",121,];
//Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:
var qual= ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write("<h2> qualification<h2>");
for(i=0;i<qual.length;i++)
document.write(i+1 +") " + qual[i] + "<br>");

//Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like:
var stdname=["amir","zohaib","ali"];
var score=[230,230,480];
for(i=0;i<stdname.length;i++)
document.write("Score of " +stdname[i] +"is " + score[i] + ".Percentage is "+ score[i]/500*100 +".<br>");

//9. Initialize an array with color names. Display the array elements in your browser.
 var colorName= ["blue","orange","red"];
 var newclr= prompt("enter colour to add at he beginning");
 colorName.unshift(newclr);
 document.write(colorName);
 var newclr= prompt("enter colour to add at the end");
 colorName.push(newclr);
 document.write(colorName);
 colorName.unshift("gray","nave blue");
 document.write(colorName);
colorName.shift();
document.write(colorName);
colorName.shift();
document.write(colorName);
colorName.pop();
document.write(colorName);
var ind = prompt("enter index to put new color");
var ncolor = prompt("enter new color")
colorName.splice(ind,0,ncolor);
document.write(colorName);
var delInd= prompt("enter index to delete");
var count= prompt("How many to delete");
colorName.splice(delInd,count);
document.write(colorName);
////10. Write a program to store student scores in an array & sort the array
var arr = [320,230,480,120];
document.write("score of stuent : "+arr +"<br>");
arr.sort();
document.write("Sorted score of stuent : "+arr +"<br>");

//Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.
var cities= ["karachi","lahore","islamabad","quettta","peshawar"];
document.write("Cities list : "+cities +"<br>");
var selCities= cities.slice(2,4);
document.write("selected Cities list : "+selCities +"<br>");

//12. Write a program to create a single string from the below mentioned array:
var arr = ["This","is","my", "cat"];
var newar = arr.join();


/////////////////class work///
// var a= prompt("enter the number for table ");
// var b = prompt("enter multiplier range");

// for(i=1;i<=b;i++)
// document.write(a + " x " + i + " = " + (a*i) + "<br>");

//13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)
var arr= [];
arr.push("keyboard <br>");
arr.push("mouse <br>");
arr.push("printer <br>");
arr.push("monitor <br>");
document.writeln(arr);
document.write(arr.shift());
document.write(arr.shift());
document.write(arr.shift());
document.write(arr.shift());

//Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last In-First Out)
var arr= [];
arr.unshift("keyboard <br>");
arr.unshift("mouse <br>");
arr.unshift("printer <br>");
arr.unshift("monitor <br>");
document.writeln(arr);
document.write(arr.pop());
document.write(arr.pop());
document.write(arr.pop());
document.write(arr.pop());

//
//// class work ////

var arr = ["apple","mango","banana","grapes","orange"];
for(i=0;i<arr.length;i++)
{
    if(arr[i]=="orange")
    {
        alert(arr[i] + " found in array");            
}
}


//15. Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in your browser using document.write() method:
var arr = ["qpple","samsung","motorla","nokia","sony ", "haier"];




//--------------------------------chapter 17-20---------
//1. Declare and initialize an empty multidimensional array.
var arr = [[1,2,3],4,5,6];

//2. Declare and initialize a multidimensional array representing the following matrix:
var ArrMulti= [[0,1,2,3 ],[1,0,1,,2],[2,1,0,1]];

//3. Write a program to print numeric counting from 1 to 10.
for(i=1;i<11;i++)
document.write(i + "<br>");

//4. Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.

var a= prompt("enter the number for table ");
var b = prompt("enter multiplier range");

for(i=1;i<=b;i++)
document.write(a + " x " + i + " = " + (a*i) + "<br>");

//5. Write a program to print items of the following array using for loop: fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
document.write(fruits);
for(i=0;i<fruits.length;i++)
document.write("ELEMENT at index " +i+" is " +fruits[i] + "<br>" );


//6. Generate the following series in your browser. See example output. a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
document.write("Counting : ");
for(i=1;i<=15;i++)
document.write(i + " ");

document.write(" <br> Reverse Counting : ")
for(i=10;i>=0;i--)
document.write(i + " ");

document.write(" <br> even Counting : ")
for(i=0;i<=10;i++)
document.write(i*2 + " ");

document.write(" <br> odd Counting : ")
for(i=1;i<=21;i+=2)
document.write(i + " ");

document.write(" <br> Series : ")
for(i=0;i<=10;i++)
document.write(i*2 + "k ");

//7. You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Example:

var a = ['cake','apple pie','cookie','chips','patties']
var indexfound=-1;
var inp = prompt("WELCOME to ABC BAKERY,What do you want to order ?")
for(i=0;i<a.length;i++)
{
    if(a[i]==inp)
     //alert(a[i] + " is available at index " + i + " in our Bakery");
       indexfound=i;         
}
if(indexfound!=-1)
alert(a[indexfound] + " is available at index " + indexfound + " in our Bakery");
else
alert("WE re sorry."+ inp+" is not avalable in our bakery");

//Write a program to identify the largest number in the given array.
var arry = [24, 53, 78, 91, 12];
var largest= arry[0];
for (i=1;i<arry.length;i++)
{
    if(largest<arry[i] )
    largest=arry[i];
}
document.write("array items : " + arry + "<br>");
document.write("Largest item: " + largest);

//Write a program to identify the smallest number in the given array.
var a = [24, 53, 78, 91, 12];
var smallest= a[0];
for (i=1;i<a.length;i++)
{
    if(smallest>a[i] )
    largest=a[i];
}
document.write("array items : " + a + "<br>");
document.write("Smallest item: " + smallest);


//Write a program to print multiples of 5 ranging 1 to 100.
for(i=1;i<=20;i++)
{
    document.write(5*i + "\,");
}


//





// var pera = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ab similique sunt perferendis. Non quos voluptatibus, facere eligendi nam unde maxime totam aliquam dolorem, maiores veritatis cupiditate. Minus, delectus ratione?'
// var a = 'consectetur'
// var b = 'Dummy text'

// for (var i = 0; i < pera.length; i++) {
    
//     console.log(pera.slice(i, i + 11))
    
    
//     if (pera.slice(i, i + 11) === a) {
//         alert('word found')
//         var x = pera.slice(0, i)
//         var y = pera.slice(i + 11)
//         console.log(x + b + y)
//         break
//     }
// }



// var pera = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ab similique sunt perferendis. Non quos voluptatibus, facere eligendi nam unde maxime totam aliquam dolorem, maiores veritatis cupiditate. Minus, delectus ratione?'
// var wordIndex = pera.indexOf('ashdkj')
// console.log(wordIndex)



// var pera = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ab similique sunt consectetur perferendis. Non quos voluptatibus, facere eligendi consectetur nam unde maxime totam aliquam dolorem, maiores veritatis cupiditate. Minus, delectus ratione?'
// var lastWordIndex = pera.lastIndexOf('consectetur')
// console.log(lastWordIndex)


