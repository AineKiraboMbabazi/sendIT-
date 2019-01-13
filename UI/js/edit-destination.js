token = localStorage.getItem("auth_token")
parcelId = localStorage.getItem("editId")
isadmin = localStorage.getItem("user_role");
if(isadmin==='admin'){
    document.getElementById("admin").addEventListener('click',()=>{
        window.location.href='../Admin/adminDashboard.html';
    });
 
}else{
    document.getElementById("admin").style.display='none';
    document.getElementsByClassName("admin").style.display='none';
}

function editDestination(){
    new_destination = document.getElementById("newdestination").value;
    
    var destination = {
        destination: new_destination
    }
    

    fetch('http://127.0.0.1:5000/api/v1/parcels/destination/'+parcelId,{
        method: 'PUT',
        body: JSON.stringify(destination),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` 
            
    }
}).then((response_data) => response_data.json())
.then((response_data) => {
    if (response_data.status_code === 201 ){
        document.querySelector('.message').innerHTML=`
            ${response_data.message}
            `
            setTimeout(() => {
                document.querySelector('.message').innerHTML="";
            }, 10000);
        localStorage.setItem("detailsId",parcelId);
        document.location.href= '../User/viewDetails.html';
      
    }
    
    if (response_data.status_code === 404 || response_data.status_code === 400){
        document.querySelector('.error').innerHTML=`
            ${response_data.message}
            `
            setTimeout(() => {
                document.querySelector('.error').innerHTML="";
            }, 10000);
            document.location.href= '../User/orders.html';
    }

}
    )
.catch(error=>console.log("Failed to create parcel Delivery order, try again later")); 
}