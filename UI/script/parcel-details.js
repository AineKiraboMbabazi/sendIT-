token = localStorage.getItem("auth_token")

function getId(elem){
    var edit = elem.parentNode.parentNode.cells[0].textContent;
    return edit;
}

function viewDetails(){
    orderId=getId();
    alert('i got here');
    console.log(orderId);

    fetch('/api/v1/parcels/'+orderId,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` 
            
    }
}).then((response_data) => response_data.json())
.then((response_data) => {
    console.log(response_data);
    alert(response_data.message);
    // if (response_data.status_code === 400){
    //    alert(response_data.message);
        
    // }
    // console.log(response_data.status_code)
    // if (response_data.status_code === 201){
    //     alert(response_data.message);
    //     alert(response_data.updated_parcel);
    // }
    
}
    )
.catch(error=>alert("Failed to get parcel Delivery order details, try again later")); 
}