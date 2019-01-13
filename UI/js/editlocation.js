parcel_token = localStorage.getItem("auth_token")
parcelId = localStorage.getItem("editId")
var path = window.location.pathname;
console.log(path);
editlocation();
function editlocation(){
    
    fetch('http://127.0.0.1:5000/api/v1/parcels/'+parcelId,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${parcel_token}` 
            
    }
}).then((response_data) => response_data.json())
.then((response_data) => {
    // console.log('')
    console.log(response_data);
    if (response_data.status_code === 200){
            document.querySelector('tbody').innerHTML+=`  
            <div class="message">
    
            </div>
            <div class="error">
                
            </div>
            <tr class="edit">
            <td><span class="row-title">OrderId</span></td>
            <td><span id="separator">:</span></td>
            <td><span>${response_data.parcel.parcelid}</span></td>
            </tr>

            <tr class="edit">
            <td><span class="row-title">Date</span></td>
            <td><span id="separator">:</span></td>
            <td><span>${response_data.parcel.creation_date.slice(0,16)}</span></td>
            </tr>

            <tr class="edit">
            <td><span class="row-title">Pickup Location</span></td>
            <td><span id="separator">:</span></td>
            <td><span>${response_data.parcel.pickup}</span></td>
            </tr>

            <tr class="edit">
            <td><span class="row-title"> Destination</span></td>
            <td><span id="separator">:</span></td>
            <td><span>${response_data.parcel.destination}</span></td>
            </tr>
            <tr >
            <td colspan="3">
            <form>
            <div class="input_group">
                           
                        <input type="text" name=" Present Location" id="presentdestination" placeholder="Present Location" required>
                    </div>

                    <div><button type="submit" id="submit"> Set</button></div>
                        
            </form>
            </td>
            </tr>
            
`
        
                                
                                
    }
}
    )
.catch(error=>console.log("Failed to get parcel Delivery order details, try again later")); 
}