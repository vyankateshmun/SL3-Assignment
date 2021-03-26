function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
};
function validateForm() {
    var email = document.contactForm.email.value;
    var password = document.contactForm.password.value;
    var emailErr = passwordErr = true;
    // Validate email address
    if(email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^([A-Za-z0-9.])+\@([A-Za-z0-9])+\.([A-Za-z]{2,4})$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address containing @ and .");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }
    
    // Validate pincode
    if(password == "") {
        printError("passwordErr", "Please enter your password");
    } else {
        var regex = /^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        if(password.length <6 || password.length>16)
        {
            printError("passwordErr","Enter length between 6-16");
        }
        else if(regex.test(password) === false) {
            printError("passwordErr", "Please enter a valid Password containing uppercase and lowercase letter ,digit and special Symbol");
        } else{
            printError("passwordErr", "");
            passwordErr = false;    
        }
    }
    
    // Prevent the form from being submitted if there are any errors
    if((emailErr || passwordErr) == true) {
       return false;
    } else {
        var dataPreview = "Succesfully done: \n" +
                          "Email Address: " + email + "\n";
        alert(dataPreview);
    }
};