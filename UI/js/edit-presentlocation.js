token = localStorage.getItem("auth_token")
parcelId = localStorage.getItem("editId");
let btb=document.querySelector("#submit");
isadmin = localStorage.getItem("user_role");
if(isadmin==='admin'){
    document.getElementById("admin").addEventListener('click',()=>{
        window.location.href='../Admin/adminDashboard.html';
    });
 
}else{
    document.getElementById("admin").style.display='none';
    document.getElementsByClassName("admin").style.display='none';
}
btb.addEventListener('click',function(e){
    
    e.preventDefault();

    new_destination = document.getElementById("presentdestination").value;
    
    var newlocation = {
        "new location": new_destination
    }
    

    fetch(`http://127.0.0.1:5000/api/v1/parcels/present_location/${parcelId}`,{
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
        localStorage.setItem("detailsId",parcelId); 
        document.location.href= '../User/viewDetails.html';
        localStorage.setItem('redirectMessage',response_data.message);
    }
    
    if (response_data.status_code === 400 ){
        document.querySelector('.error').innerHTML=`
            ${response_data.message}
            `
            setTimeout(() => {
                document.querySelector('.error').innerHTML="";
            }, 2000);    
    }
}
    )
.catch(error=>console.log("Failed to set present location, try again later")); 
}

)