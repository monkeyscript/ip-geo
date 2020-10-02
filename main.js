function track() {
    
    // Get value from input 
    let ip = document.querySelector('#ipinput').value;
    console.log(ip);
    
    // Validate ip address 
    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ip)){
        
        document.querySelector('pre').style.display = 'block';

        // Ipify geo locator
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", 'https://geo.ipify.org/api/v1?apiKey=at_0WNtZRbJTqnWs0BlbvHvREcQW7Aej');
        xhttp.send();

        xhttp.onreadystatechange = () => {
            if(xhttp.responseText!='') {

                // Show output 
                document.querySelector('#ipoutput').textContent = JSON.stringify(JSON.parse(xhttp.responseText), undefined, 2);
                
            }
        }
        
    }else {
        alert('Invalid IP address :(')
    }
    
}