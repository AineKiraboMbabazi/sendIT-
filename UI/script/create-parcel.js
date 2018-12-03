token = localStorage.getItem("auth_token")
function createParcel(x){
    x.preventDefault()

    var parcel = {
        pickup: document.getElementById("pickuplocation").value,
        destination: document.getElementById("destination").value,
        description: document.getElementById("description").value
    }
    console.log(parcel['pickup']);
    fetch('http://127.0.0.1:5000/api/v1/parcels',{
        method: 'POST',
        body: JSON.stringify(parcel),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` 
            
    }
}).then((response_data) => response_data.json())
.then((response_data) => {
    if (response_data.status_code === 400){
       alert(response_data.message);
        window.location.href = '../User/createOrder.html';
    }
    console.log(response_data.status_code)
    if (response_data.status_code === 201){
        alert(response_data.message);
        window.location.href = '../User/orders.html';
    }
    
}
    )
.catch(error=>alert("Failed to create parcel Delivery order, try again later")); 
}