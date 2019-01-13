token = localStorage.getItem("auth_token")
var data;
getParcels1();
function getParcels(status_type){
    document.querySelector('tbody').innerHTML=``
    data.forEach(function(parcel){
        if(parcel.status === status_type){
            document.querySelector('tbody').innerHTML+=`

            <tr>
            <td>${parcel.parcelid}</td>
            <td>${parcel.userid}</td>
            <td>${parcel.pickup}</td>
            <td>${parcel.destination}</td>
            
            <td>${parcel.present_location}</td>
            <td>
                <img src="../images/eye.png" class="view" onclick="viewDetails(${parcel.parcelid})">
                <img src="../images/trash.png" class="delete" onclick="confirm_delete(${parcel.parcelid})">
                <img src="../images/edit.png" onclick="enter_location(${parcel.parcelid}); ">
            </td>
            
        </tr>
            
            `
        };
    })
    }
    function getParcels1(){
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
            data =response_data.parcels
            response_data.parcels.forEach(parcel => {
                document.querySelector('tbody').innerHTML+=`

                <tr>
                <td>${parcel.parcelid}</td>
                <td>${parcel.userid}</td>
                
                <td>${parcel.pickup}</td>
                <td>${parcel.destination}</td>
                
                
                <td>${parcel.present_location}</td>
                <td>
                    <img src="../images/eye.png" class="view" onclick="viewDetails(${parcel.parcelid})">
                    <img src="../images/trash.png" class="delete" onclick="confirm_delete(${parcel.parcelid})">
                    <img src="../images/edit.png" onclick="enter_location(${parcel.parcelid}); ">
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
    .catch(error=>console.log("unable to retrieve your parcels, please try again later")); 
    }
    function viewDetails(id){
        localStorage.setItem('detailsId', id);
        localStorage.setItem('redirectMessage', "Parcel Details");
        return document.location.href=`../User/viewDetails.html?id=${id}`;
    }
    function enter_location(id){
        localStorage.setItem('editId', id);
        return document.location.href=`editPresentLocation.html?id=${id}`;
    }

function confirm_delete(id){
    
        if(confirm('Are you sure you want to delete this field?')){
            fetch('http://127.0.0.1:5000/api/v1/parcels/'+id+'/delete',{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` 
            
    }
    }).then((response_data) => response_data.json())
    .then((response_data) => {
        console.log(response_data);
        if (response_data.status_code === 200){
            alert(response_data.message);
            document.location.href='../Admin/adminDashboard.html';
        }
        
        if (response_data.status_code === 400 ){
            alert(response_data.message);
            
        }    
    }
        )
        
    }}
