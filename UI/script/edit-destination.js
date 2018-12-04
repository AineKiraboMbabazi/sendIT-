token = localStorage.getItem("auth_token")

function getId(elem){
    var edit = elem.parentNode.parentNode.cells[0].textContent;
    window.location.href='edit.html';
    
}
function editDestination(el){
    el.preventDefault()
    orderId=getId();
    console.log(orderId);
    
    new_destination = document.getElementById("newdestination").value;
    old_destination = document.getElementById("olddestination").value;
    if (new_destination === old_destination){
        alert("The destination is already up to date");
    }


    var destination = {
        destination: new_destination
    }

    fetch('/api/v1/parcels/destination/'+edit,{
        method: 'PUT',
        body: JSON.stringify(destination),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` 
            
    }
}).then((response_data) => response_data.json())
.then((response_data) => {
    console.log(response_data);
    if (response_data.status_code === 400){
       alert(response_data.message);
        
    }
    console.log(response_data.status_code)
    if (response_data.status_code === 201){
        alert(response_data.message);
        alert(response_data.updated_parcel);
    }
    
}
    )
.catch(error=>alert("Failed to create parcel Delivery order, try again later")); 
}