document.getElementById('submit').addEventListener('click', getJSON);

function getJSON(event){
    const zip=document.getElementById('zipcode').value;
    console.log(zip);     

    fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=b51166f933357bc4db15868fd0b0319f`)
    .then(response=>response.json())
    .then(data=>{      
        console.log(data);
        console.log(data.name);
        let output='';
        const div=document.getElementById('current_weather');
            output+=`<h4>City: ${data.name}</h4><br><h5>Current Conditions:</h5>
            <ul>
                <li>Temperature: ${data.main.temp}</li>
                <li>Current Conditions: ${data.weather.main} : ${data.weather.description}</li>
                <li>Atmospheric Pressure: ${data.main.pressure}</li>
                <li>Humidity: ${data.main.humidity}</li>
            </ul>
            `;
        div.innerHTML=output;
        })
    .catch(err=>{console.log(err)});
}