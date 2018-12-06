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
    response_data = response;
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
                <img src="../images/trash.png" class="delete" onclick="confirm_delete(${parcel.parcelid})">
            </td>
        </tr>
            
            `
        });
    }
    else if (response_data.status_code === 404){
      
        document.querySelector('table').innerHTML=`
            ${response_data.message}
            `  
    }

    
})
.catch(error=>alert("unable to retrieve your parcels, please try again later")); 
function editDestination(id){
    localStorage.setItem('editId', id);
    return document.location.href=`edit.html`;

}
function viewDetails(id){
    localStorage.setItem('detailsId', id);
    return document.location.href=`viewDetails.html`;
}
function confirm_delete(id){
    localStorage.setItem('cancelId', id);
    return d
}