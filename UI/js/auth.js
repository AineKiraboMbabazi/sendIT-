document.querySelector('.error').style.display='none';
function register(x){
    x.preventDefault()
    if(document.getElementById('confirmpassword').value !==document.getElementById('password').value ){
        document.querySelector('.error').style.display='block';
        document.querySelector('.error').innerHTML=`
        'Password mismatch'
        `
        setTimeout(() => {
            document.querySelector('.error').innerHTML="";
        }, 2000);
        window.location.href = '../User/registration.html';

        
    }
    var user_credentials = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    }
    fetch('http://127.0.0.1:5000/api/v1/auth/signup',{
        method: 'POST',
        body: JSON.stringify(user_credentials),
        headers: {
            'Content-Type': 'application/json',
            
    }
}).then((response) => response.json())
.then((response) => {
    var response_data = response;
    console.log(response_data)
    if (response_data.status_code === 201){
        document.querySelector('.error').style.display='block';
        document.querySelector('.error').innerHTML=`
        ${response_data.message}
        `
        setTimeout(() => {
            document.querySelector('.error').innerHTML="";
        }, 4000);
        window.location.href='../User/login.html';
    }
    else if(response_data.status_code === 400){
        document.querySelector('.error').style.display='block';
        document.querySelector('.error').innerHTML=`
        ${response_data.message}
        `
        setTimeout(() => {
            document.querySelector('.error').innerHTML="";
        }, 4000);
        window.location.href = '../User/registration.html';

    }
  
}
    )
.catch(error=>console.log("Failed to create account, try again later")); 
}

function login(event){
    event.preventDefault();
    var user_credentials = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    }
    fetch('http://127.0.0.1:5000/api/v1/auth/login',{
        method: 'POST',
        body: JSON.stringify(user_credentials),
        headers: {
            Content_Type: 'application/json'
    }
}).then((response) => response.json())
.then((response) => {
    response_data = response;
    if (response_data.status_code === 200){
        localStorage.setItem("auth_token",response_data.auth_token);
        localStorage.setItem("user_Id",response_data.user_Id);
        
        if(document.getElementById('email').value ==="admin@admin.com" ){
            
            window.location.href='../Admin/adminDashboard.html';
            localStorage.setItem("user_role","admin");
        }
        else{

            window.location.href='../User/orders.html';
        }
    }
    else if(response_data.status_code === 401){
        document.querySelector('.error').style.display='block';
        document.querySelector('.error').innerHTML=`
        ${response_data.message}
        `
        setTimeout(() => {
            document.querySelector('.error').innerHTML="";
        }, 4000);
    }
})
.catch(error=>console.log("Failed to login to your account, try again later")); 
}
