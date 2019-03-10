document.getElementById('submit').addEventListener('click', getJSON);

function getJSON(){
    fetch('weather.json')
    .then(response=>response.json())
    .then(data=>{
        let output='';
        const div=document.getElementById('current_weather');
        data.forEach(loc=>{
            output+=`<h4>City: ${loc.city}</h4><br><h5>Current Conditions:</h5>
            <ul>
                <li>Temperature: ${loc.temp}</li>
                <li>${loc.condition}</li>
            </ul>
            `;
        });
        div.innerHTML=output;
    })
    .catch(err=>{console.log(err)});
}