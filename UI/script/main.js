function open_orders(){
    window.location.href='createOrder.html';
}
function redirect_edit(){
    window.location.href='edit.html';
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
function display_details(){
    window.location.href='viewDetails.html';
    alert("Order details loading....");
    
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
    window.location.href='profile.html';
}
function check_empty(){
    if(document.getElementById('email').value ==="" || document.getElementById('password').value===""){
        alert("All fields have to be filled!");
        
    }
    
}

function redirect_user(myform){
    if(myform.email.value ==="admin@admin.com" ){
        alert('logging in as admin...')
        return window.location.href='adminDashboard.html';
    }
    else{
        alert('logging in as user...')
        return window.location.href='orders.html';
    }
}

function confirm_password(){
    if(document.getElementById('confirmpassword').value !==document.getElementById('password').value ){
        alert('Password mismatch');
    }
}


