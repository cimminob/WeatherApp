//assign submit id to variable
const submit = document.getElementById('submit');

//event listeners for submit  
submit.addEventListener('click', getJSON);

//test for enter key on zipcode
document.getElementById('zipcode').addEventListener('keyup', pressEnter);

function pressEnter(event) {
    //test if enter key was pressed (code 13)

         if(event.key == 'Enter'){
        //trigger click event for submit
        submit.click();
    }
}


function getJSON(event){
    const zip=document.getElementById('zipcode').value;
    console.log(zip);     

    fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&unites=imperial&appid=b51166f933357bc4db15868fd0b0319f`)
    .then(response=>response.json())
    .then(data=>{      
        console.log(data);
        console.log(data.name);
        let output='';
        const div=document.getElementById('current_weather');
            output+=`<h4 class="red-text text-lighten-2">${data.name}</h4><br>
            <h5 class="blue-text">Current Conditions:</h5>
            <ul class="blue-text">
                <li>Temp: <span class="red-text text-lighten-2">${data.main.temp} &deg;</span></li>
                <li>Currently: <span class="red-text text-lighten-2">${data.weather[0].description}</span></li>
                <li>Atmospheric Pressure: <span class="red-text text-lighten-2">${data.main.pressure}</span></li>
                <li>Humidity: <span class="red-text text-lighten-2"> ${data.main.humidity}%</span></li>
            </ul>
            `;
        div.innerHTML=output;
        })
    .catch(err=>{console.log(err)});
}