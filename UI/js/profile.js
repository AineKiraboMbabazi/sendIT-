token = localStorage.getItem("auth_token");
userId = localStorage.getItem("user_Id");
isadmin = localStorage.getItem("user_role");
if(isadmin==='admin'){
    document.getElementById("admin").addEventListener('click',()=>{
        window.location.href='../Admin/adminDashboard.html';
    });
 
}else{
    document.getElementById("admin").style.display='none';
    document.getElementsByClassName("admin").style.display='none';
}

(function profile(){
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
    if (response_data.status_code===200){
        delivered = 0;
        intransit =0;
        response_data.parcels.forEach(parcel => {
            
            if (parcel.status === 'Delivered'){
                delivered++;
            }
            if (parcel.status === 'intransit'){
                intransit++;
            }
            
            document.querySelector('tbody').innerHTML+=`
            
            <tr>
            <td>${parcel.parcelid}</td>
            <td>${parcel.creation_date}</td>
            <td>${parcel.status}</td>
            <td>${parcel.description}</td>
            </tr>
            
            `
            
        });
        document.querySelector('#delivered').innerHTML=`
                ${delivered}
            `
        document.querySelector('#intransit').innerHTML=`
            ${intransit}
        `
    }
    else if(response_data.status_code === 404 || response_data.status_code === 400){
        document.querySelector('table').innerHTML=`
            ${response_data.message}
            `  
    }

    
})
.catch(error=>console.log("unable to retrieve your parcels, please try again later")); 
})();