function validation(form) {

    var err = document.getElementById("pass_err");
    
    var b = document.getElementById("u_password");

    if (b.value.length < 8) {
        document.getElementById("pass_err").innerHTML = "password must be contains 8 letters";
        b.style.border = "1px solid red";
        err.style.display = "block";
        return false;
    }
    
   
}
function show() {
    var image = document.getElementById("show_pass");
    var b = document.getElementById("u_password");

    if (b.type === "password") {
        b.type = "text";
        image.src = "css/password_show.svg";
    }

    else {
        b.type = "password";
        image.src = "css/password_not_show.svg";
    }
}

function myfun() {
    var preloader = document.getElementById('loader');
    preloader.style.display = 'none';
    
}

