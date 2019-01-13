
if(localStorage.getItem('auth_token')===null){
    var path = window.location.pathname;
    var page = path.split("/").pop();
    if(page!=='registration.html'||page!=='index.html'|| page!=='login.html'){
        document.location.href='../User/login.html';
    }
}
document.querySelector('#logout').addEventListener('click',()=>{
    localStorage.clear();
    document.location.href='../User/login.html';
    });
    
document.querySelector("#profiles").addEventListener('click',()=>{
    open_profile()
    })
document.querySelector("#createOrder").addEventListener('click',()=>{
    open_orders()
    })

document.querySelector('#orders').addEventListener('click',function(){
    document.location.href='../User/orders.html';  
});

document.querySelector('#admindashboard').addEventListener('click',function(){
    console.log('i get here');
    document.location.href='../Admin/adminDashboard.html';  
});
document.querySelector('#admin').addEventListener('click',function(){
    document.location.href='../Admin/adminDashboard.html';  
});
document.querySelector('.logoutt').addEventListener('click',()=>{
    localStorage.clear();
    document.location.href='../User/login.html';
});

document.querySelector(".profiles").addEventListener('click',()=>{
    open_profile()
    })
document.querySelector(".create").addEventListener('click',()=>{
    open_orders()
    })

document.querySelector('.orders').addEventListener('click',function(){
    document.location.href='../User/orders.html';  
});

document.querySelector('.adminboard').addEventListener('click',function(){
    console.log('i get here class' );
    document.location.href='../Admin/adminDashboard.html';  
});
document.querySelector('.admin').addEventListener('click',function(){
    console.log('i get here class' );
    document.location.href='../Admin/adminDashboard.html';  
});

function open_orders(){
 return   document.location.href='../User/createOrder.html';
}
function redirect_login(){
    window.location.href='../User/login.html';
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

function showDropdown() {
    document.getElementById("mobile").classList.toggle("show");
    document.getElementById("mobile").style.width = "40%";
    document.getElementById("section").style.marginRight = "60%";
  }
  function closeNav() {
    document.getElementById("mobile").style.width = "0";
    document.getElementById("section").style.marginLeft = "0";
    
  }
// function placesAutocomplete(){
//     var field = document.getElementById('pickuplocation');
//     new google.maps.places.Autocomplete(field);
// }
