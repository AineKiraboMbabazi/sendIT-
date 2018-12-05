token = localStorage.getItem("auth_token");
userId = localStorage.getItem("user_Id");


    fetch('http://127.0.0.1:5000/api/v1/users/'+userId+'/parcels',{
        method: 'GET',
        headers: {
            "Content_Type": 'application/json',
            "Authorization":`Bearer ${token}`
    }
}).then((response) => response.json())
.then((response) => {
    var response_data = response;
    console.log(response_data);
    if (response_data.status_code === 200){
        response_data.parcels.forEach(parcel => {
            document.querySelector('tbody').innerHTML+=`
            
            <tr>
            <td>${parcel.parcelid}</td>
            <td>${parcel.userid}</td>
            <td>${parcel.creation_date}</td>
            <td>${parcel.status}</td>
            <td>
                <img src="../images/eye.png" class="view" onclick="viewDetails(${parcel.parcelid})">
                <img src="../images/edit.png" class="edit" onclick="editDestination(${parcel.parcelid});">
                <img src="../images/trash.png" class="delete" onclick="confirm_delete()">
            </td>
        </tr>
            
            `
        });
    }
    else if(response_data.status_code === 404 || response_data.status_code === 400){
        document.querySelector('tbody').innerHTML+=`
            
            <tr>
            <td colspan="5">${response_data.message}</td>
            </tr>
            
            `
    }

    
})
.catch(error=>alert("unable to retrieve your parcels, please try again later")); 
function editDestination(id){
    localStorage.setItem('editId', id);
    return document.location.href=`edit.html`;

}