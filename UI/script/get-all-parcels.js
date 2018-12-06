token = localStorage.getItem("auth_token")
getParcels();
function getParcels(){
    
    fetch('http://127.0.0.1:5000/api/v1/parcels',{
        method: 'GET',
        headers: {
            "Content_Type": 'application/json',
            "Authorization":`Bearer ${token}`
    }
}).then((response) => response.json())
.then((response) => {
    var response_data = response;
    if (response_data.status_code === 200){
        // console.log(response_data.parcels);
        // alert(response_data.parcels);
        response_data.parcels.forEach(parcel => {
            document.querySelector('tbody').innerHTML+=`

            <tr>
            <td>${parcel.parcelid}</td>
            <td>${parcel.userid}</td>
            <td>${parcel.creation_date}</td>
            <td>${parcel.pickup}</td>
            <td>${parcel.destination}</td>
            <td>${parcel.status}</td>
            <td>${parcel.description}</td>
            <td>${parcel.present_location}</td>
            <td>
                <img src="../images/eye.png" class="view" onclick="viewDetails(${parcel.parcelid})">
                <img src="../images/trash.png" class="delete" onclick="confirm_delete()">
            </td>
            <td>
                <button id="1" onclick="enter_location(${parcel.parcelid}); ">
                    Set
                </button>
            </td>
        </tr>
            
            `
        });
    }
    else if(response_data.status_code === 404 || response_data.status_code === 400){
        document.querySelector('table').innerHTML=`
        ${response_data.message}
        `
    }

})
.catch(error=>alert("unable to retrieve your parcels, please try again later")); 
}
function viewDetails(id){
    localStorage.setItem('detailsId', id);
    return document.location.href=`../User/viewDetails.html`;
}
function enter_location(id){
    localStorage.setItem('editId', id);
    return document.location.href=`editPresentLocation.html`;
}