token = localStorage.getItem("auth_token")
parcelId = localStorage.getItem("detailsId")


viewDetails();
function viewDetails(){
    fetch('http://127.0.0.1:5000/api/v1/parcels/'+parcelId,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` 
            
    }
}).then((response_data) => response_data.json())
.then((response_data) => {
    if (response_data.status_code === 200){
            document.querySelector('tbody').innerHTML+=`   
            <tr>
            <td><span class="row-title">OrderId</span></td>
            <td><span id="separator">:</span></td>
            <td><span>${response_data.parcel.parcelid}</span></td>
            </tr>

            <tr>
            <td><span class="row-title">Date</span></td>
            <td><span id="separator">:</span></td>
            <td><span>${response_data.parcel.creation_date}</span></td>
            </tr>

            <tr>
            <td><span class="row-title">Pickup Location</span></td>
            <td><span id="separator">:</span></td>
            <td><span>${response_data.parcel.pickup}</span></td>
            </tr>

            <tr>
            <td><span class="row-title"> Destination</span></td>
            <td><span id="separator">:</span></td>
            <td><span>${response_data.parcel.destination}</span></td>
            </tr>
        
            <tr>
            <td><span class="row-title"> Present location </span></td>
            <td><span id="separator">:</span></td>
            <td><span>${response_data.parcel.present_location}</span></td>
            </tr>

            <tr>
            <td><span class="row-title"> Status </span></td>
            <td><span id="separator">:</span></td>
            <td><span>${response_data.parcel.status}</span></td>
            </tr>

            <tr>
            <td><span class="row-title"> Description</span></td>
            <td><span id="separator">:</span></td>
            <td><span>${response_data.parcel.description}</span></td>
            </tr>

                `
        
                                
                                
    }
}
    )
.catch(error=>alert("Failed to get parcel Delivery order details, try again later")); 
}