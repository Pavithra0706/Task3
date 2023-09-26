var xhr = new XMLHttpRequest(); //set the http request

//get the data
//first argument => Get,Post,Put,Patch or Delete
//second argument => url 

xhr.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");

//process the data 

xhr.onload = function(){

    if(xhr.status>=200 && xhr.status<300){

    //Get the data from the server

    var data = JSON.parse(this.response);
    var count="";
    
for(var i=0; i<data.length; i++){
        
        console.log(data[i].name,data[i].region,data[i].subregion,data[i].population);
    }

}
};

xhr.send();



