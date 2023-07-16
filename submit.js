function validateForm(event){
    event.preventDefaut();
    let name= document.getElementById("name").value;
    let email= document.getElementById("email").value;
    let message= document.getElementById("message").value;

    let emailRegex= /^[a-zA-z0-9._-]+@[a-zA-Z.]+.[a-zA-Z]{2,4}$

    if(name==" "){
        alert("Please enter your name");
        return 0;
    }
    if(email==" "){
        alert("Please enter your email");
        return false;
    }
    if(message==" "){
        alert("Please enter your message");
        return false;
    }
    if(!emailRegex.text(email)){
        alert("Error!!! Please enter your email agian.");
        return false;
    }
}