token = localStorage.getItem("auth_token")
isadmin = localStorage.getItem("user_role");
document.querySelector('.error').style.display='none';
if(isadmin==='admin'){
    document.getElementById("admin").addEventListener('click',()=>{
        window.location.href='../Admin/adminDashboard.html';
    });
 
}else{
    document.getElementById("admin").style.display='none';
}
function createParcel(x){

    x.preventDefault()

    var parcel = {
        pickup: document.getElementById("pickuplocation").value,
        destination: document.getElementById("destination").value,
        description: document.getElementById("description").value
    }

    fetch('http://127.0.0.1:5000/api/v1/parcels',{
        method: 'POST',
        body: JSON.stringify(parcel),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` 
            
    }
    }).then((response_data) => response_data.json())
    .then((response_data) => {
        console.log(response_data);
        
    if (response_data.status_code === 400){
        document.querySelector('.error').style.display='block';
        document.querySelector('.error').innerHTML=`
        ${response_data.message}
        `
        setTimeout(() => {
            document.querySelector('.error').innerHTML="";
        }, 4000);
        window.location.href = '../User/createOrder.html';
    }
    
    if (response_data.status_code === 201){
        console.log('I got here');
        window.location.href = '../User/orders.html';
    }
    
}
    )
.catch(error=>{console.log(error);}); 
}