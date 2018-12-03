function register(){
    if(document.getElementById('confirmpassword').value !==document.getElementById('password').value ){
        alert('Password mismatch');
    }
    var user_credentials = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    }
    console.log(user_credentials['email']);
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
    if (response_data.message === "user created successfully"){
        alert(" Your account has been successfully created");
        window.location.href='../User/login.html';
    }
    else if(response_data.message === "Email already exists"){
        alert("The email you have entered already exists, please use another email")
        window.location.href = '../User/registration.html';

    }
    else if(response_data.message === "You entered an invalid password or \
    password is missing"){
        alert("You entered an invalid password, The password should be atleast 8 characters");
        window.location.href = '../User/registration.html';
    }
    else {
        alert("You entered an invalid email");
    }
    
}
    )
.catch(error=>alert("Failed to create account, try again later")); 
}

function login(){
    
    if(document.getElementById('email').value === "" || document.getElementById('password').value===""){
        alert("All fields have to be filled!");
        
    }

    var user_credentials = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    }
    console.log(user_credentials['email'])
    console.log(user_credentials['password'])
    fetch('http://127.0.0.1:5000/api/v1/auth/login',{
        method: 'POST',
        body: JSON.stringify(user_credentials),
        headers: {
            Content_Type: 'application/json'
    }
}).then((response) => response.json())
.then((response) => {
    var response_data = response;
    if (response_data.message === 'login successful'){
        alert("Welcome to sendIT");
        localStorage.setItem("auth_token",response_data.auth_token);
        
        if(document.getElementById('email').value ==="admin@admin.com" ){
            alert('logging in as admin...')
            window.location.href='../Admin/adminDashboard.html';
        }
        else{
            alert('logging in as user...')
            window.location.href='../User/orders.html';
        }
        
        
    }
    else if(response_data.message === "You are not a system user"){
        alert("An account with your credentials doesnot exist")
        window.location.href = '../User/registration.html';

    }
    else if(response_data.message === "You entered an invalid password,\
    password should be atleast 8 characters long"){
        alert("You entered an invalid password, The password should be atleast 8 characters");
        window.location.href = 'login.html';
    }
    else {
        alert("You entered an invalid email");
    }
    
})
.catch(error=>alert("Failed to login to your account, try again later")); 
}
