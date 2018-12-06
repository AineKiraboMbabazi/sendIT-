function register(x){
    x.preventDefault()
    if(document.getElementById('confirmpassword').value !==document.getElementById('password').value ){
        alert('Password mismatch');
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
        alert(response_data.message);
        window.location.href='../User/login.html';
    }
    else if(response_data.status_code === 400){
        alert(response_data.message);
        window.location.href = '../User/registration.html';

    }
    
    
}
    )
.catch(error=>alert("Failed to create account, try again later")); 
}

function login(event){
    event.preventDefault();
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
        console.log(response_data.auth_token);
        localStorage.setItem("auth_token",response_data.auth_token);
        localStorage.setItem("user_Id",response_data.user_Id);
        
        if(document.getElementById('email').value ==="admin@admin.com" ){
            alert('logging in as admin...')
       
            window.location.href='../Admin/adminDashboard.html';
            localStorage.setItem("user_role",admin);
        }
        else{
            alert('logging in as user...')
            window.location.href='../User/orders.html';
        }
        
        
    }
    else if(response_data.message === "You are not a system user"){
        if(window.confirm("An account with your credentials doesnot exist, Would you like to create an account?")){
            window.location.href = '../User/registration.html';
        }

    }
    else if(response_data.status_code === 401){
        alert(response_data.message);
    }
    
})
.catch(error=>alert("Failed to login to your account, try again later")); 
}
