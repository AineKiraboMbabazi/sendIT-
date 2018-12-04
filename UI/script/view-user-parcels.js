token = localStorage.getItem("auth_token");
userId = localStorage.getItem("user_Id");


getUserParcels();
function getUserParcels(){
    fetch('http://127.0.0.1:5000/api/v1/users/'+userId+'/parcels',{
        method: 'GET',
        headers: {
            "Content_Type": 'application/json',
            "Authorization":`Bearer ${token}`
    }
}).then((response) => response.json())
.then((response) => {
    console.log(response);
    
    var response_data = response;
    if (response_data.status_code===200){
        console.log(response_data);
        response_data.parcels.forEach(parcel => {
            document.querySelector('tbody').innerHTML+=`
            
            <tr>
            <td>${parcel.parcelid}</td>
            <td>${parcel.userid}</td>
            <td>${parcel.creation_date}</td>
            <td>${parcel.status}</td>
            <td>
                <img src="../images/eye.png" class="view" onclick="display_details()">
                <img src="../images/edit.png" class="edit" onclick="getId(this)">
                <img src="../images/trash.png" class="delete" onclick="confirm_delete()">
            </td>
        </tr>
            
            `
        });
    }
    else if(response_data.status_code === 404 ){
        alert(response_data.message);

    }
    else if(response_data.status_code === 400 ){
        alert(response_data.message);

    }
    
})
.catch(error=>alert("unable to retrieve your parcels, please try again later")); 
}