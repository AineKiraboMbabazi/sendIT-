token = localStorage.getItem("auth_token")
parcelId = localStorage.getItem("editId")
setPresentDestination()
function setPresentDestination(el){
    el.preventDefault()
    new_destination = document.getElementById("presentdestination").value;
    
    var newlocation = {
        'new location': new_destination
    }
    

    fetch('http://127.0.0.1:5000/api/v1/parcels/present_location/'+parcelId,{
        method: 'PUT',
        body: JSON.stringify(newlocation),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` 
            
    }
}).then((response_data) => response_data.json())
.then((response_data) => {
    console.log(response_data);
    if (response_data.status_code === 200){
        alert(response_data.message);
        console.log(response_data.updated_parcel);
        presentlocation = response_data.updated_parcel.present_location
        status = response_data.updated_parcel.status;
    }
    
    if (response_data.status_code === 400 || response_data.status_code === 404){
       alert(response_data.message);
        
    }
    console.log(response_data.status_code)
    
}
    )
.catch(error=>alert("Failed to set present location, try again later")); 
}