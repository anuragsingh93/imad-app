var button = document.getElementById('counter');
var counter=0;
button.onclick = function () {
    //make a request to thed counter endpoint
    
    var request=new XMLHttpRequest();
    
    //Capture the response in a variable
    //Render the variable in the correct span
    counter=counter+1;
    var span = document.getElementById('count');
    span.innerHTML=counter.toString();
}