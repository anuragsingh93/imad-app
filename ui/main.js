var button = document.getElementById('counter');

button.onclick = function () {
    //create a request object
    
    var request = new XMLHttpRequest();
    
    //Capture the response in a variable
    
    request.onreadystatechanged = function () {
        console.log("state changed");
        if(request.readyState === XMLHttpRequest.DONE) {
            console.log("Done");
            if(request.status === 200) {
                console.log("Status");
                var counter=request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
    //Make a request
    request.open('GET', 'http://anuragsinghcs0027.imad.hasura-app.io/counter',true);
    request.send(null);
};