
if(localStorage.getItem('auth_token')===null){
    var path = window.location.pathname;
    var page = path.split("/").pop();
    if(page!=='registration.html'||page!=='index.html'|| page!=='login.html'){
        document.location.href='login.html';
    }

 
}

document.querySelector('#logout').addEventListener('click',()=>{
localStorage.clear();
document.location.href='login.html';
});




document.querySelector("#profile").addEventListener('click',()=>{
    open_profile()
    })
    document.querySelector("#createOrder").addEventListener('click',()=>{
        open_orders()
        })

document.querySelector('#orders').addEventListener('click',function(){
    document.location.href='orders.html';  
});


function open_orders(){
 return   document.location.href='createOrder.html';
}
function redirect_login(){
    window.location.href='login.html';
}
// function redirect_edit(){
    
// }
function display_details(){
    window.location.href='viewDetails.html';
}

function enter_location(elem){
    myid=elem.id;
    
    var newlocation=prompt("Enter the present parcel location!");
    
   if(newlocation!==null){
       
       document.getElementById(myid).innerHTML =newlocation;
   }
    alert("location has been updated");
}
function confirm_request(){
    if(document.getElementById('destination').value==="" || document.getElementById('pickuplocation').value===""){
        alert ('Some fields are not filled!');
    }else{
    if(window.confirm("This order might cost you some money, Are you sure you want to continue?")){
        alert("Your Request has been saved");
    }
}
}


function confirm_edit(){

    if(document.getElementById('old destination').value==="" || document.getElementById('new destination').value===""){
        alert ('Some fields are not filled!');
    }
    else{
        if(window.confirm("Are you sure you want to continue?")){
            alert("Your Request has been saved");
        }
}
}
function confirm_delete(){
    if(window.confirm("This action will delete the order, Are you sure you want to continue?")){
        alert("Your Request has been deleted");
    }
}
function add_record(){
    if(document.getElementById('email').value==="" || document.getElementById('password').value===""){
        alert("Seems that some fields are not filled, please fill them and try again!");

    }
    else
        alert("Your record has been added!");
}
function open_profile(){
   return document.location.href='profile.html';
}


// function check_empty(){
    
    
// }





