// Q no 01 
// Create a signup form and display form data in your web
// page on submission.

// function submit(){
// var head1 = document.getElementById("head1");
// var firstName = document.getElementById("first-name")
// var email = document.getElementById("mail")
// var password = document.getElementById("password");
// head1.innerHTML = `First Name : ${firstName.value} <br>
//  Email : ${email.value}  <br>  Password : ${password.value}`;

// }



// Q no 02 
// Suppose in your webpage there is content area in which
// you have entered your item details, but user can only see
// some details on first look. When user clicks on “Read
// more” button, full detail of that particular item will be
// displayed.


// function expand(){
//     var text = "orem Ipsum is simply dummy text of the printing and typesetting industry hanaorem Ipsum is simply dummy text of the printing and typesetting industry hanaorem Ipsum is simply dummy text of the printing and typesetting industry hanaorem Ipsum is simply dummy text of the printing and typesetting industry hanaorem Ipsum is simply dummy text of the printing and typesetting industry hanaorem Ipsum is simply dummy text of the printing and typesetting industry hana";
//     var shortPara = "orem Ipsum is simply dummy text of the printing and typesetting industry..."
//     var btn = document.getElementById("btn")
//     var para = document.getElementById("para");
//     if(btn.innerHTML == "See More"){
//     para.innerText = text
//     btn.innerText = "See Less"
// }else{
//     para.innerText = shortPara
//     btn.innerText = "See More";
// }
// }


// Q no 03 
// In previous assignment you have created a tabular data
// using javascript. Let’s modify that. Create a form which
// takes student’s details and show each student detail in
// table. Each row of table must contain a delete button and
// an edit button. On click on delete button entire row should
// be deleted. On click on edit button, a hidden form will
// appear with the values of that row.



var row = document.getElementById("tr-1");
function deleteRow() {
    row.remove()
}

function edit(){
 console.log(row.childNodes)
}