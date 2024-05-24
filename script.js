alert("Welcome to experimenting with javascript");
//access using id
let heading=document.getElementById("heading");
console.log(heading);

//access using class
let header = document.getElementsByClassName("header");
console.log(header);

//access using tag
let para=document.getElementsByTagName("p");
console.log(para);

//trying to implement innerText and innerHTML
let div=document.querySelector("div");
console.dir(div);

//try adding text to each division 
let divs = document.querySelectorAll(".box");
console.dir(divs);
divs[0].innerText = "We are using innerText";
//since this is array format use for loop
for(let i=0;i<2;i++)
{
    divs[i].innerText="We are using innerText along with for loop";
}

//get attribute for the heading
let idName=heading.getAttribute("id");
console.log(idName);

//get attribute for the header
let className=div.getAttribute("class");
console.log(className);

//using style attribute
div.style.backgroundColor="pink";

//create a new button using JS
let newBtn = document.createElement("button");
newBtn.innerText="Click Here";
let divs1=document.querySelector(".box");
divs1.append(newBtn); //prepend,before and after can also be used
newBtn.style.padding="5px";
newBtn.style.margin="30px";

