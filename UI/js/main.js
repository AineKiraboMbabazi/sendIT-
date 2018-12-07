
if(localStorage.getItem('auth_token')===null){
    var path = window.location.pathname;
    var page = path.split("/").pop();
    if(page!=='registration.html'||page!=='index.html'|| page!=='login.html'){
        document.location.href='login.html';
    }

 
}

document.querySelector('#logout').addEventListener('click',()=>{
localStorage.clear();
document.location.href='../User/login.html';
});

document.querySelector("#profile").addEventListener('click',()=>{
    open_profile()
    })
document.querySelector("#createOrder").addEventListener('click',()=>{
    open_orders()
    })

document.querySelector('#orders').addEventListener('click',function(){
    document.location.href='../User/orders.html';  
});

document.querySelector('#admindashboard').addEventListener('click',function(){
    document.location.href='../Admin/adminDashboard.html';  
});

function open_orders(){
 return   document.location.href='../User/createOrder.html';
}
function redirect_login(){
    window.location.href='login.html';
}

function display_details(){
    userrole = localStorage.getItem("user_role");
    window.location.href='../User/viewDetails.html';
    
}

function enter_location(elem){
    window.location.href='editPresentLocation.html';

}
function open_profile(){
   return document.location.href='../User/profile.html';
}


