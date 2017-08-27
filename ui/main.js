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


var nameInput = document.getElementById('name');
var submit = document.getElementById('submit_btn');
submit.onclick = function () {
    
    var request = new XMLHttpRequest();
    
    //Capture the response in a variable
    
    request.onreadystatechanged = function () {
        console.log("state changed");
        if(request.readyState === XMLHttpRequest.DONE) {
            console.log("Done");
            if(request.status === 200) {
                var names= request.responseText;
                names= JSON.parse(names);
                var list='';
                for(var i=0 ; i< names.length; i++){
                    list += '<li>' +name[i]+ '</li>';
                }
                var ul=document.getElementById('namelist');
                ul.innerHTML = list;
            }
        }
    } 
    var nam = nameInput.value;
    request.open('GET', 'http://anuragsinghcs0027.imad.hasura-app.io/submit-name?name='+nam,true);
    request.send(null);
};
