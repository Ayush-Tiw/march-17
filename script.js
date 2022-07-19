// // XMLHTTP request
// //what is AJAX and function of it
// //what is synchronous and asynchronous programming
// //what is use of XMLhttpRequest

// "use strict";

// const url="https://api.thedogapi.com/v1/breeds";

// function suman(url){
// let request =new XMLHttpRequest();//create the object
// request.open("GET",url,true);//opens up the connection
// //callback function inbuilt
// request.onload=()=>{//when their is a connection get the stuff from the server and display
//     let data=request.responseText
//     document.getElementById("data").innerHTML=JSON.stringify(data);
// };
// request.send();//create a connection and sends to the server
// }
// suman(url);


//you have given a JSON data create a HTML table from it

// "use strict";

// let user_input=[
//     {name:"Ayush Tiwari",pincode:56489,location:"hoshangabad"},
// {name:"Anjali Tiwari",pincode:56489,location:"hbad"},
// {name:"Pallavi Tiwari",pincode:56489,location:"Salkanpur"},
// {name:"satish Tiwari",pincode:56489,location:"Ayodhya"}]

// //table_head

// function table_head(table,data){
//     let thead=table.createTHead();//tHead section of my table
//     let row=thead.insertRow();
//     for(let key in data){
//         let th=document.createElement("th");
//         let text= document.createTextNode(key);
//         th.appendChild(text);
//         row.appendChild(th)
//     }
// }

// function create_table(table,data){
//     for(let element of data){
//         let row=table.insertRow();
//         for(let key in element){
//             let cell=row.insertCell();
//             let text= document.createTextNode(element[key]);
//             cell.appendChild(text);
//         }
//     }
// }

// let table=document.querySelector("table");
// let data=Object.keys(user_input[0]);
// table_head(table,user_input);
// create_table(table,user_input)

//Create a HTML table from FORM Input dynamicaklly usin DOM Mnipulation

"use strict";

//add data from the form 
document.getElementById("add").addEventListener("click",function(){
    let food_name=documnent.getElementById("food_name")
    let country_of_origin=documnent.getElementById("country_of_origin")
    let table=documnent.getElementById("my_table")

    let rowCount=table.rows.length;
    let row=table.insertRow(rowCount);

    row.insertCell(0),innerHTML=food_name.ariaValueMax
    row.insertCell(1).innerHTML=country_of_origin.value
})